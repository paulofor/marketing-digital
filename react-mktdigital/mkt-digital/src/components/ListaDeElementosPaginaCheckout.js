import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, CircularProgress, Box, Button, Pagination, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import EditIcon from '@mui/icons-material/Edit';

const ListaDeElementosPaginaCheckout = () => {
  const [elementos, setElementos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedElemento, setSelectedElemento] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [novoElemento, setNovoElemento] = useState({ nome: '', promptBasico: '', ordenacao: 0 });
  const itemsPerPage = 20;

  // Função para buscar os elementos da API
  useEffect(() => {
    const fetchElementos = async () => {
      try {
        const response = await axios.get('http://vps-40d69db1.vps.ovh.ca:23101/api/ElementoPaginaCheckouts');
        setElementos(response.data);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar os elementos da página de checkout. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchElementos();
  }, []);

  // Função para calcular os elementos a serem exibidos na página atual
  const paginatedElementos = () => {
    const startIndex = (page - 1) * itemsPerPage;
    return elementos.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleOpenEditDialog = (elemento) => {
    setSelectedElemento(elemento);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedElemento(null);
  };

  const handleOpenAddDialog = () => {
    setNovoElemento({ nome: '', promptBasico: '', ordenacao: 0 });
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://vps-40d69db1.vps.ovh.ca:23101/api/ElementoPaginaCheckouts/${selectedElemento.id}`, selectedElemento);
      setElementos((prev) => prev.map((el) => (el.id === selectedElemento.id ? selectedElemento : el)));
      handleCloseEdit();
    } catch (error) {
      setError('Erro ao salvar as alterações. Tente novamente.');
    }
  };

  const handleSaveAdd = async () => {
    try {
      const response = await axios.post('http://vps-40d69db1.vps.ovh.ca:23101/api/ElementoPaginaCheckouts', novoElemento);
      setElementos((prev) => [...prev, response.data]);
      handleCloseAdd();
    } catch (error) {
      setError('Erro ao adicionar o novo elemento. Tente novamente.');
    }
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setSelectedElemento((prevElemento) => ({
      ...prevElemento,
      [name]: value,
    }));
  };

  const handleChangeAdd = (e) => {
    const { name, value } = e.target;
    setNovoElemento((prevElemento) => ({
      ...prevElemento,
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
        Lista de Elementos da Página de Checkout
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
        onClick={handleOpenAddDialog}
      >
        Adicionar Elemento
      </Button>

      <List sx={{ marginTop: 2 }}>
        {paginatedElementos().map((elemento) => (
          <ListItem
            key={elemento.id}
            sx={{ marginBottom: 2, backgroundColor: '#f4f4f4', borderRadius: '10px', cursor: 'pointer' }}
          >
            <ListItemAvatar>
              <Avatar>
                <StoreIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={elemento.nome}
              secondary={
                <Typography variant="body2" color="textSecondary">
                  {elemento.promptBasico ? elemento.promptBasico : 'Descrição não disponível'}
                </Typography>
              }
            />
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={() => handleOpenEditDialog(elemento)}
              sx={{ marginLeft: 2 }}
            >
              Editar
            </Button>
          </ListItem>
        ))}
      </List>

      <Pagination
        count={Math.ceil(elementos.length / itemsPerPage)}
        page={page}
        onChange={(event, value) => setPage(value)}
        sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
      />

      {/* Popup de edição */}
      <Dialog open={openEdit} onClose={handleCloseEdit} maxWidth="sm" fullWidth>
        <DialogTitle>Editar Elemento</DialogTitle>
        <DialogContent>
          <TextField
            label="Nome"
            name="nome"
            value={selectedElemento?.nome || ''}
            onChange={handleChangeEdit}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Prompt Básico"
            name="promptBasico"
            value={selectedElemento?.promptBasico || ''}
            onChange={handleChangeEdit}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <TextField
            label="Ordenação"
            name="ordenacao"
            type="number"
            value={selectedElemento?.ordenacao || 0}
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
        <DialogTitle>Adicionar Novo Elemento</DialogTitle>
        <DialogContent>
          <TextField
            label="Nome"
            name="nome"
            value={novoElemento.nome}
            onChange={handleChangeAdd}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Prompt Básico"
            name="promptBasico"
            value={novoElemento.promptBasico}
            onChange={handleChangeAdd}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <TextField
            label="Ordenação"
            name="ordenacao"
            type="number"
            value={novoElemento.ordenacao}
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

export default ListaDeElementosPaginaCheckout;
