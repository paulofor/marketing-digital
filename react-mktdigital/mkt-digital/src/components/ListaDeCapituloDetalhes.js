import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, CircularProgress, Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, Breadcrumbs, Link } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useParams, useNavigate } from 'react-router-dom';

const ListaDeCapituloDetalhes = () => {
  const { capituloId } = useParams(); // Obtém o capituloId da URL
  const navigate = useNavigate(); // Hook para navegação
  const [detalhes, setDetalhes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [capitulo, setCapitulo] = useState({ nome: '', prompt: '', numero: 0 }); // Estado para o nome, prompt e número do capítulo
  const [open, setOpen] = useState(false); // Estado para controlar o modal
  const [editDetalhe, setEditDetalhe] = useState(null); // Estado para saber se estamos editando ou criando
  const [texto, setTexto] = useState(''); // Campo "texto"
  const [html, setHtml] = useState(''); // Campo "html"
  const [prompt, setPrompt] = useState(''); // Campo "prompt"
  const [markup, setMarkup] = useState(''); // Campo "markup"
  const [posicao, setPosicao] = useState(0); // Campo "posicao"

  useEffect(() => {
    const fetchDetalhes = async () => {
      try {
        // Busca os detalhes do capítulo com base no capituloId e ordena por posição
        const responseDetalhes = await axios.get('http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapituloDetalhes', {
          params: {
            filter: JSON.stringify({ where: { entregavelCapituloId: Number(capituloId) }, order: ['posicao ASC'] }),
          },
        });

        // Busca o nome, prompt e número do capítulo
        const responseCapitulo = await axios.get(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapitulos/${capituloId}`);

        setDetalhes(responseDetalhes.data);
        setCapitulo(responseCapitulo.data); // Define o nome, prompt e número do capítulo
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar os detalhes do capítulo.');
        setLoading(false);
      }
    };

    fetchDetalhes();
  }, [capituloId]);

  // Função para abrir o modal para criar ou editar
  const handleOpen = (detalhe = null) => {
    setEditDetalhe(detalhe);
    setTexto(detalhe ? detalhe.texto : ''); // Preenche "texto" se estamos editando
    setHtml(detalhe ? detalhe.html : ''); // Preenche "html" se estamos editando
    setPrompt(detalhe ? detalhe.prompt : ''); // Preenche "prompt" se estamos editando
    setMarkup(detalhe ? detalhe.markup : ''); // Preenche "markup" se estamos editando
    setPosicao(detalhe ? detalhe.posicao : detalhes.length + 1); // Preenche "posicao", se for novo, atribui ao próximo número
    setOpen(true); // Abre o modal
  };

  // Função para fechar o modal
  const handleClose = () => {
    setOpen(false);
    setTexto('');
    setHtml('');
    setPrompt('');
    setMarkup('');
    setPosicao(0);
    setEditDetalhe(null);
  };

  // Função para salvar o detalhe (criar ou editar)
  const handleSave = async () => {
    const detalheData = {
      texto,
      html,
      prompt,
      markup,
      posicao, // Certifica-se de enviar a posição corretamente
      entregavelCapituloId: Number(capituloId), // Certifica-se de que o capituloId seja enviado corretamente
    };

    try {
      if (editDetalhe) {
        // Se estamos editando, faz um PUT para atualizar o detalhe
        await axios.put(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapituloDetalhes/${editDetalhe.id}`, detalheData);
      } else {
        // Se estamos criando, faz um POST para criar o novo detalhe
        await axios.post('http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapituloDetalhes', detalheData);
      }
      handleClose(); // Fecha o modal após salvar
      // Recarrega a lista de detalhes
      const response = await axios.get('http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapituloDetalhes', {
        params: {
          filter: JSON.stringify({ where: { entregavelCapituloId: Number(capituloId) }, order: ['posicao ASC'] }),
        },
      });
      setDetalhes(response.data);
    } catch (error) {
      console.error('Erro ao salvar o detalhe:', error);
    }
  };

  // Função para mover um item para cima
  const handleMoveUp = async (detalhe, index) => {
    if (index === 0) return; // Não pode mover o primeiro item para cima

    const newPosicao = detalhes[index - 1].posicao;
    const oldPosicao = detalhe.posicao;

    try {
      // Atualiza o item atual com a nova posição
      await axios.put(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapituloDetalhes/${detalhe.id}`, { posicao: newPosicao });
      // Atualiza o item anterior com a posição atual
      await axios.put(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapituloDetalhes/${detalhes[index - 1].id}`, { posicao: oldPosicao });

      // Recarrega a lista
      const response = await axios.get('http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapituloDetalhes', {
        params: {
          filter: JSON.stringify({ where: { entregavelCapituloId: Number(capituloId) }, order: ['posicao ASC'] }),
        },
      });
      setDetalhes(response.data);
    } catch (error) {
      console.error('Erro ao mover item:', error);
    }
  };

  // Função para mover um item para baixo
  const handleMoveDown = async (detalhe, index) => {
    if (index === detalhes.length - 1) return; // Não pode mover o último item para baixo

    const newPosicao = detalhes[index + 1].posicao;
    const oldPosicao = detalhe.posicao;

    try {
      // Atualiza o item atual com a nova posição
      await axios.put(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapituloDetalhes/${detalhe.id}`, { posicao: newPosicao });
      // Atualiza o próximo item com a posição atual
      await axios.put(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapituloDetalhes/${detalhes[index + 1].id}`, { posicao: oldPosicao });

      // Recarrega a lista
      const response = await axios.get('http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapituloDetalhes', {
        params: {
          filter: JSON.stringify({ where: { entregavelCapituloId: Number(capituloId) }, order: ['posicao ASC'] }),
        },
      });
      setDetalhes(response.data);
    } catch (error) {
      console.error('Erro ao mover item:', error);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      {/* Migalha de pão */}
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" onClick={() => navigate(`/produtos`)} sx={{ cursor: 'pointer' }}>
          Produtos
        </Link>
        <Link underline="hover" color="inherit" onClick={() => navigate(`/entregaveis/${capitulo.entregavelProdutoId}/capitulos`)} sx={{ cursor: 'pointer' }}>
          Capítulos
        </Link>
        <Typography color="textPrimary">Capítulo {capitulo.numero}</Typography>
      </Breadcrumbs>

      {/* Título com o nome do capítulo e número */}
      <Typography variant="h4" gutterBottom>
        Capítulo {capitulo.numero}: {capitulo.nome} {/* Exibe o número e o nome do capítulo */}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ whiteSpace: 'pre-line' }}>
        {capitulo.prompt} {/* Exibe o prompt do capítulo como subtítulo com quebras de linha */}
      </Typography>

      {/* Botão para adicionar um novo detalhe */}
      <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpen()}>
        Novo Detalhe
      </Button>

      <List>
        {detalhes.map((detalhe, index) => (
          <ListItem key={detalhe.id} sx={{ marginBottom: 2, backgroundColor: '#f4f4f4', borderRadius: '10px' }}>
            <ListItemText
              primary={`Detalhe ID: ${detalhe.id}`}
              secondary={`Posição: ${detalhe.posicao} | Markup: ${detalhe.markup ? detalhe.markup.substring(0, 50) : ''}...`} // Exibe os primeiros 50 caracteres de markup
            />
            {/* Botão de mover para cima */}
            <IconButton onClick={() => handleMoveUp(detalhe, index)}>
              <ArrowUpwardIcon />
            </IconButton>
            {/* Botão de mover para baixo */}
            <IconButton onClick={() => handleMoveDown(detalhe, index)}>
              <ArrowDownwardIcon />
            </IconButton>
            {/* Botão de editar */}
            <IconButton onClick={() => handleOpen(detalhe)}>
              <EditIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      {/* Modal para criar ou editar detalhe com largura grande */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>{editDetalhe ? 'Editar Detalhe' : 'Novo Detalhe'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Texto"
            fullWidth
            multiline
            rows={3} // Área maior para "texto"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <TextField
            margin="dense"
            label="HTML"
            fullWidth
            multiline
            rows={3} // Área maior para "html"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Prompt"
            fullWidth
            multiline
            rows={2} // Área maior para "prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Markup"
            fullWidth
            multiline
            rows={3} // Área maior para "markup"
            value={markup}
            onChange={(e) => setMarkup(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Posição"
            fullWidth
            type="number"
            value={posicao}
            onChange={(e) => setPosicao(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSave} variant="contained">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ListaDeCapituloDetalhes;
