import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  CircularProgress,
  Box,
  Button,
  Pagination,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EditIcon from '@mui/icons-material/Edit';

const ListaDePerguntasPublicoAlvo = () => {
  const [perguntas, setPerguntas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedPergunta, setSelectedPergunta] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [novaPergunta, setNovaPergunta] = useState({ ativo: 1, pergunta: '', ordenacao: 0 });
  const itemsPerPage = 20;

  // Função para buscar as perguntas da API
  useEffect(() => {
    const fetchPerguntas = async () => {
      try {
        const response = await axios.get('http://vps-40d69db1.vps.ovh.ca:23101/api/PerguntaPublicoAlvos');
        // Ordena as perguntas pelo campo 'ordenacao'
        const sortedPerguntas = response.data.sort((a, b) => a.ordenacao - b.ordenacao);
        setPerguntas(sortedPerguntas);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar as perguntas. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchPerguntas();
  }, []);

  // Função para calcular as perguntas a serem exibidas na página atual
  const paginatedPerguntas = () => {
    const startIndex = (page - 1) * itemsPerPage;
    return [...perguntas].sort((a, b) => a.ordenacao - b.ordenacao).slice(startIndex, startIndex + itemsPerPage);
  };

  const handleOpenEditDialog = (pergunta) => {
    setSelectedPergunta(pergunta);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedPergunta(null);
  };

  const handleOpenAddDialog = () => {
    setNovaPergunta({ ativo: 1, pergunta: '', ordenacao: 0 });
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(
        `http://vps-40d69db1.vps.ovh.ca:23101/api/PerguntaPublicoAlvos/${selectedPergunta.id}`,
        selectedPergunta
      );
      setPerguntas((prev) =>
        [...prev].map((pq) => (pq.id === selectedPergunta.id ? selectedPergunta : pq)).sort((a, b) => a.ordenacao - b.ordenacao)
      );
      handleCloseEdit();
    } catch (error) {
      setError('Erro ao salvar as alterações. Tente novamente.');
    }
  };

  const handleSaveAdd = async () => {
    try {
      const response = await axios.post('http://vps-40d69db1.vps.ovh.ca:23101/api/PerguntaPublicoAlvos', novaPergunta);
      setPerguntas((prev) => [...prev, response.data].sort((a, b) => a.ordenacao - b.ordenacao));
      handleCloseAdd();
    } catch (error) {
      setError('Erro ao adicionar a nova pergunta. Tente novamente.');
    }
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setSelectedPergunta((prevPergunta) => ({
      ...prevPergunta,
      [name]: value,
    }));
  };

  const handleChangeAdd = (e) => {
    const { name, value } = e.target;
    setNovaPergunta((prevPergunta) => ({
      ...prevPergunta,
      [name]: value,
    }));
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
        Lista de Perguntas para Público-Alvo
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
        onClick={handleOpenAddDialog}
      >
        Adicionar Pergunta
      </Button>

      <List sx={{ marginTop: 2 }}>
        {paginatedPerguntas().map((pergunta) => (
          <ListItem
            key={pergunta.id}
            sx={{
              marginBottom: 2,
              backgroundColor: '#f4f4f4',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <HelpOutlineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={pergunta.pergunta}
              secondary={
                <Typography variant="body2" color="textSecondary">
                  {`Ordenação: ${pergunta.ordenacao}, Ativo: ${pergunta.ativo}`}
                </Typography>
              }
            />
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={() => handleOpenEditDialog(pergunta)}
              sx={{ marginLeft: 2 }}
            >
              Editar
            </Button>
          </ListItem>
        ))}
      </List>

      <Pagination
        count={Math.ceil(perguntas.length / itemsPerPage)}
        page={page}
        onChange={(event, value) => setPage(value)}
        sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
      />

      {/* Popup de edição */}
      <Dialog open={openEdit} onClose={handleCloseEdit} maxWidth="sm" fullWidth>
        <DialogTitle>Editar Pergunta</DialogTitle>
        <DialogContent>
          <TextField
            label="Pergunta"
            name="pergunta"
            value={selectedPergunta?.pergunta || ''}
            onChange={handleChangeEdit}
            fullWidth
            margin="normal"
            multiline
            rows={8}
          />
          <TextField
            label="Ativo"
            name="ativo"
            type="number"
            value={selectedPergunta?.ativo || 0}
            onChange={handleChangeEdit}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Ordenação"
            name="ordenacao"
            type="number"
            value={selectedPergunta?.ordenacao || 0}
            onChange={handleChangeEdit}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Popup de adição */}
      <Dialog open={openAdd} onClose={handleCloseAdd} maxWidth="sm" fullWidth>
        <DialogTitle>Adicionar Nova Pergunta</DialogTitle>
        <DialogContent>
          <TextField
            label="Pergunta"
            name="pergunta"
            value={novaPergunta.pergunta}
            onChange={handleChangeAdd}
            fullWidth
            margin="normal"
            multiline
            rows={8}
          />
          <TextField
            label="Ativo"
            name="ativo"
            type="number"
            value={novaPergunta.ativo}
            onChange={handleChangeAdd}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Ordenação"
            name="ordenacao"
            type="number"
            value={novaPergunta.ordenacao}
            onChange={handleChangeAdd}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSaveAdd} color="primary">
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ListaDePerguntasPublicoAlvo;
