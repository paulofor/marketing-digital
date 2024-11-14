import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CircularProgress,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  IconButton,
  Pagination,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import PageIcon from '@mui/icons-material/InsertDriveFile'; // Ícone para páginas
import { useParams } from 'react-router-dom';

const ListaDePagina = () => {
  const { produtoId } = useParams(); // Captura o produtoId da URL
  const navigate = useNavigate();
  const [paginas, setPaginas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false); // Estado para o modal
  const [editingPagina, setEditingPagina] = useState(null); // Página sendo editada
  const [nome, setNome] = useState(''); // Nome da página
  const [htmlInicial, setHtmlInicial] = useState(''); // HTML Inicial da página
  const [htmlFinal, setHtmlFinal] = useState(''); // HTML Final da página
  const [cssGlobal, setCssGlobal] = useState(''); // CSS Global da página
  const [geraComSecao, setGeraComSecao] = useState(false); // Estado para o campo geraComSecao (booleano)
  const [urlFinal, setUrlFinal] = useState(''); // Estado para o campo urlFinal
  const [page, setPage] = useState(1); // Página atual
  const itemsPerPage = 50; // Quantidade de itens por página

  // Função para buscar as páginas do produto
  useEffect(() => {
    const fetchPaginas = async () => {
      try {
        const response = await axios.get('http://vps-40d69db1.vps.ovh.ca:23101/api/PaginaVendaAberta', {
          params: {
            filter: JSON.stringify({ where: { produtoProprioId: Number(produtoId) } }),
          },
        });

        setPaginas(response.data);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar as páginas. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchPaginas();
  }, [produtoId]);

  // Função para abrir o modal (adicionar/editar)
  const handleOpen = (pagina = null) => {
    setEditingPagina(pagina); // Se houver uma página, será editada
    setNome(pagina ? pagina.nome : '');
    setHtmlInicial(pagina ? pagina.htmlInicial : '');
    setHtmlFinal(pagina ? pagina.htmlFinal : '');
    setCssGlobal(pagina ? pagina.cssGlobal : '');
    setUrlFinal(pagina ? pagina.urlFinal : ''); // Preenche o campo urlFinal
    setGeraComSecao(pagina ? pagina.geraComSecao === 1 : false); // Converte o valor INT(1) para booleano

    setOpen(true); // Abre o modal
  };

  // Fechar o modal
  const handleClose = () => {
    setOpen(false);
    setEditingPagina(null);
    setNome('');
    setHtmlInicial('');
    setHtmlFinal('');
    setCssGlobal('');
    setUrlFinal(''); // Reseta o campo urlFinal
    setGeraComSecao(false);
  };

  // Função para adicionar ou atualizar uma página
  const handleSave = async () => {
    const paginaData = {
      nome,
      htmlInicial,
      htmlFinal,
      cssGlobal,
      urlFinal, // Inclui o valor de urlFinal
      geraComSecao: geraComSecao ? 1 : 0, // Converte o valor booleano para INT(1)
      produtoProprioId: Number(produtoId),
    };

    try {
      if (editingPagina) {
        // Atualizar página existente
        await axios.put(`http://vps-40d69db1.vps.ovh.ca:23101/api/PaginaVendaAberta/${editingPagina.id}`, paginaData);
      } else {
        // Adicionar nova página
        await axios.post('http://vps-40d69db1.vps.ovh.ca:23101/api/PaginaVendaAberta', paginaData);
      }
      handleClose(); // Fecha o modal após salvar
      window.location.reload(); // Recarregar para mostrar os dados atualizados
    } catch (error) {
      console.error('Erro ao salvar a página:', error);
    }
  };

  // Função para calcular as páginas a serem exibidas na página atual
  const paginatedPaginas = () => {
    const startIndex = (page - 1) * itemsPerPage;
    return paginas.slice(startIndex, startIndex + itemsPerPage);
  };

  // Função para redirecionar para a lista de seções da página
  const redirectToSecoes = (paginaId) => {
    navigate(`/paginas/${paginaId}/secoes`);
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
      <Typography variant="h4" gutterBottom>
        Páginas do Produto
      </Typography>

      {/* Botão para adicionar nova página */}
      <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpen()}>
        Adicionar Nova Página
      </Button>

      <List sx={{ marginTop: 2 }}>
        {paginatedPaginas().map((pagina) => (
          <ListItem
            key={pagina.id}
            sx={{ marginBottom: 2, backgroundColor: '#f4f4f4', borderRadius: '10px' }}
            button
            onClick={() => redirectToSecoes(pagina.id)} // Redireciona para a lista de seções ao clicar fora do botão de editar
          >
            <ListItemAvatar>
              <Avatar>
                <PageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={pagina.nome}
              sx={{ cursor: 'pointer' }}
            />
            <IconButton edge="end" aria-label="edit" onClick={(e) => {
              e.stopPropagation(); // Evita que o clique no botão de editar redirecione
              handleOpen(pagina);
            }}>
              <EditIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      {/* Componente de Paginação */}
      <Pagination
        count={Math.ceil(paginas.length / itemsPerPage)} // Total de páginas
        page={page} // Página atual
        onChange={(event, value) => setPage(value)} // Função para mudar de página
        sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
      />

      {/* Modal para adicionar/editar páginas */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingPagina ? 'Editar Página' : 'Adicionar Página'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {editingPagina ? 'Edite as informações da página' : 'Insira os detalhes para a nova página'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Nome da Página"
            fullWidth
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            margin="dense"
            label="HTML Inicial"
            fullWidth
            multiline
            rows={4}
            value={htmlInicial}
            onChange={(e) => setHtmlInicial(e.target.value)}
          />
          <TextField
            margin="dense"
            label="HTML Final"
            fullWidth
            multiline
            rows={4}
            value={htmlFinal}
            onChange={(e) => setHtmlFinal(e.target.value)}
          />
          <TextField
            margin="dense"
            label="CSS Global"
            fullWidth
            multiline
            rows={4}
            value={cssGlobal}
            onChange={(e) => setCssGlobal(e.target.value)}
          />
          <TextField
            margin="dense"
            label="URL Final"
            fullWidth
            value={urlFinal}
            onChange={(e) => setUrlFinal(e.target.value)}
          />
          {/* Checkbox para o campo geraComSecao */}
          <FormControlLabel
            control={
              <Checkbox
                checked={geraComSecao}
                onChange={(e) => setGeraComSecao(e.target.checked)} // Atualiza o estado
              />
            }
            label="Gerar com Seção"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="primary">
            {editingPagina ? 'Atualizar' : 'Salvar'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ListaDePagina;
