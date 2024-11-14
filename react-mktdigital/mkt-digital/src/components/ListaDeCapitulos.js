import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, CircularProgress, Box, IconButton, Typography, Breadcrumbs, Link, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, useParams } from 'react-router-dom';

const ListaDeCapitulos = () => {
  const { entregavelId } = useParams(); // Captura o ID do entregável da URL
  const [capitulos, setCapitulos] = useState([]);
  const [entregavel, setEntregavel] = useState({ nome: '', produtoProprioId: '' }); // Estado para o nome e produtoProprioId do entregável
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false); // Estado para controlar o modal
  const [editCapitulo, setEditCapitulo] = useState(null); // Estado para controlar o capítulo sendo editado
  const [numero, setNumero] = useState(''); // Estado para o número do capítulo
  const [nome, setNome] = useState(''); // Estado para o nome do capítulo
  const [prompt, setPrompt] = useState(''); // Estado para o prompt do capítulo
  const [html, setHtml] = useState(''); // Estado para o HTML do capítulo
  const [markup, setMarkup] = useState(''); // Estado para o markup do capítulo
  const navigate = useNavigate(); // Navegação para os detalhes do capítulo

  useEffect(() => {
    const fetchCapitulos = async () => {
      try {
        const responseCapitulos = await axios.get(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapitulos`, {
          params: {
            filter: JSON.stringify({ where: { entregavelProdutoId: Number(entregavelId) }, order: ['numero ASC'] }),
          },
        });
        setCapitulos(responseCapitulos.data);

        // Busca o nome do entregável e o produtoProprioId
        const responseEntregavel = await axios.get(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelProdutos/${entregavelId}`);
        setEntregavel(responseEntregavel.data);

        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar os capítulos.');
        setLoading(false);
      }
    };

    fetchCapitulos();
  }, [entregavelId]);

  // Função para abrir o modal de edição
  const handleOpen = (capitulo) => {
    if (capitulo) {
      setEditCapitulo(capitulo); // Define o capítulo a ser editado
      setNumero(capitulo.numero); // Preenche o número do capítulo
      setNome(capitulo.nome); // Preenche o nome do capítulo
      setPrompt(capitulo.prompt || ''); // Preenche o prompt do capítulo, caso exista
      setHtml(capitulo.html || ''); // Preenche o HTML do capítulo, caso exista
      setMarkup(capitulo.markup || ''); // Preenche o markup do capítulo, caso exista
    } else {
      setEditCapitulo(null); // Caso seja um novo capítulo, zera o estado
      setNumero('');
      setNome('');
      setPrompt('');
      setHtml('');
      setMarkup('');
    }
    setOpen(true); // Abre o modal
  };

  // Função para fechar o modal
  const handleClose = () => {
    setOpen(false);
    setEditCapitulo(null);
    setNumero('');
    setNome('');
    setPrompt('');
    setHtml('');
    setMarkup('');
  };

  // Função para salvar as alterações
  const handleSave = async () => {
    const updatedCapitulo = {
      numero,
      nome,
      prompt,
      html,
      markup,
      entregavelProdutoId: Number(entregavelId), // Certifica-se de associar ao entregável correto
    };

    try {
      if (editCapitulo) {
        // Se estamos editando, faz um PUT para atualizar o capítulo
        await axios.put(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapitulos/${editCapitulo.id}`, updatedCapitulo);
      } else {
        // Se estamos criando, faz um POST para criar um novo capítulo
        await axios.post('http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapitulos', updatedCapitulo);
      }

      handleClose(); // Fecha o modal após salvar
      // Recarrega a lista de capítulos
      const response = await axios.get(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelCapitulos`, {
        params: {
          filter: JSON.stringify({ where: { entregavelProdutoId: Number(entregavelId) }, order: ['numero ASC'] }),
        },
      });
      setCapitulos(response.data);
    } catch (error) {
      console.error('Erro ao salvar o capítulo:', error);
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
        {entregavel.produtoProprioId && (
          <Link underline="hover" color="inherit" onClick={() => navigate(`/produtos/${entregavel.produtoProprioId}/entregaveis`)} sx={{ cursor: 'pointer' }}>
            Entregáveis
          </Link>
        )}
        <Typography color="textPrimary">{entregavel.nome}</Typography>
      </Breadcrumbs>

      {/* Botão para criar novo capítulo */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => handleOpen()}>
          Novo Capítulo
        </Button>
      </Box>

      <List>
        {capitulos.map((capitulo) => (
          <ListItem
            key={capitulo.id}
            sx={{ marginBottom: 2, backgroundColor: '#f4f4f4', borderRadius: '10px', cursor: 'pointer' }}
            onClick={() => navigate(`/capitulos/${capitulo.id}/detalhes`)} // Navega para a lista de detalhes do capítulo
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`Capítulo ${capitulo.numero}: ${capitulo.nome}`}
              secondary={`Número: ${capitulo.numero}`}
            />
            {/* Botões para mover o capítulo */}
            <IconButton onClick={(event) => {
              event.stopPropagation(); // Evita que o clique no botão dispare o clique no item da lista
              // lógica de mover para cima
            }}>
              <ArrowUpwardIcon />
            </IconButton>
            <IconButton onClick={(event) => {
              event.stopPropagation(); // Evita que o clique no botão dispare o clique no item da lista
              // lógica de mover para baixo
            }}>
              <ArrowDownwardIcon />
            </IconButton>
            {/* Botão de editar */}
            <IconButton edge="end" aria-label="edit" onClick={(event) => {
              event.stopPropagation(); // Evita que o clique no botão dispare o clique no item da lista
              handleOpen(capitulo); // Abre o modal para editar o capítulo
            }}>
              <EditIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      {/* Modal para editar ou criar um capítulo */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>{editCapitulo ? 'Editar Capítulo' : 'Novo Capítulo'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Número do Capítulo"
            fullWidth
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Nome do Capítulo"
            fullWidth
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Prompt do Capítulo"
            fullWidth
            multiline
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <TextField
            margin="dense"
            label="HTML do Capítulo"
            fullWidth
            multiline
            rows={6}
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Markup do Capítulo"
            fullWidth
            multiline
            rows={4}
            value={markup}
            onChange={(e) => setMarkup(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ListaDeCapitulos;
