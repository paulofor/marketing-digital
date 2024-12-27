import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, CircularProgress, Box, Button, Pagination, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import SourceIcon from '@mui/icons-material/Source';
import EditIcon from '@mui/icons-material/Edit';

const ListaDeMercadosPotenciais = () => {
  const [mercados, setMercados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedMercado, setSelectedMercado] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [novoMercado, setNovoMercado] = useState({ nome: '', descricao: '', fonte: '', data: '', volumePesquisa: 0 });
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchMercados = async () => {
      try {
        const response = await axios.get('http://vps-40d69db1.vps.ovh.ca:23101/api/MercadoPotencials');
        const sortedData = response.data.sort((a, b) => b.volumePesquisa - a.volumePesquisa); // Ordenação decrescente
        setMercados(sortedData);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar os mercados potenciais. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchMercados();
  }, []);

  const paginatedMercados = () => {
    const startIndex = (page - 1) * itemsPerPage;
    return mercados.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleOpenEditDialog = (mercado) => {
    setSelectedMercado(mercado);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedMercado(null);
  };

  const handleOpenAddDialog = () => {
    setNovoMercado({ nome: '', descricao: '', fonte: '', data: '', volumePesquisa: 0 });
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://vps-40d69db1.vps.ovh.ca:23101/api/MercadoPotencials/${selectedMercado.id}`, selectedMercado);
      const updatedMercados = mercados.map((el) => (el.id === selectedMercado.id ? selectedMercado : el));
      const sortedData = updatedMercados.sort((a, b) => b.volumePesquisa - a.volumePesquisa); // Reordenar após edição
      setMercados(sortedData);
      handleCloseEdit();
    } catch (error) {
      setError('Erro ao salvar as alterações. Tente novamente.');
    }
  };

  const handleSaveAdd = async () => {
    try {
      const response = await axios.post('http://vps-40d69db1.vps.ovh.ca:23101/api/MercadoPotencials', novoMercado);
      const updatedMercados = [...mercados, response.data];
      const sortedData = updatedMercados.sort((a, b) => b.volumePesquisa - a.volumePesquisa); // Reordenar após adição
      setMercados(sortedData);
      handleCloseAdd();
    } catch (error) {
      setError('Erro ao adicionar o novo mercado potencial. Tente novamente.');
    }
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setSelectedMercado((prevMercado) => ({
      ...prevMercado,
      [name]: name === 'volumePesquisa' ? parseInt(value, 10) : value,
    }));
  };

  const handleChangeAdd = (e) => {
    const { name, value } = e.target;
    setNovoMercado((prevMercado) => ({
      ...prevMercado,
      [name]: name === 'volumePesquisa' ? parseInt(value, 10) : value,
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
        Lista de Mercados Potenciais
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
        onClick={handleOpenAddDialog}
      >
        Adicionar Mercado
      </Button>

      <List sx={{ marginTop: 2 }}>
        {paginatedMercados().map((mercado) => (
          <ListItem
            key={mercado.id}
            sx={{ marginBottom: 2, backgroundColor: '#f4f4f4', borderRadius: '10px', cursor: 'pointer' }}
          >
            <ListItemAvatar>
              <Avatar>
                <SourceIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${mercado.nome || 'Sem Nome'} (Volume: ${mercado.volumePesquisa})`}
              secondary={
                <Typography variant="body2" color="textSecondary">
                  {mercado.descricao || 'Descrição não disponível'} | Fonte: {mercado.fonte} | Data: {mercado.data}
                </Typography>
              }
            />
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={() => handleOpenEditDialog(mercado)}
              sx={{ marginLeft: 2 }}
            >
              Editar
            </Button>
          </ListItem>
        ))}
      </List>

      <Pagination
        count={Math.ceil(mercados.length / itemsPerPage)}
        page={page}
        onChange={(event, value) => setPage(value)}
        sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
      />

      {/* Popup de edição */}
      <Dialog open={openEdit} onClose={handleCloseEdit} maxWidth="sm" fullWidth>
        <DialogTitle>Editar Mercado</DialogTitle>
        <DialogContent>
          <TextField
            label="Nome"
            name="nome"
            value={selectedMercado?.nome || ''}
            onChange={handleChangeEdit}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Descrição"
            name="descricao"
            value={selectedMercado?.descricao || ''}
            onChange={handleChangeEdit}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Fonte"
            name="fonte"
            value={selectedMercado?.fonte || ''}
            onChange={handleChangeEdit}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Data"
            name="data"
            type="date"
            value={selectedMercado?.data || ''}
            onChange={handleChangeEdit}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Volume de Pesquisa"
            name="volumePesquisa"
            type="number"
            value={selectedMercado?.volumePesquisa || 0}
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
        <DialogTitle>Adicionar Novo Mercado</DialogTitle>
        <DialogContent>
          <TextField
            label="Nome"
            name="nome"
            value={novoMercado.nome}
            onChange={handleChangeAdd}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Descrição"
            name="descricao"
            value={novoMercado.descricao}
            onChange={handleChangeAdd}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Fonte"
            name="fonte"
            value={novoMercado.fonte}
            onChange={handleChangeAdd}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Data"
            name="data"
            type="date"
            value={novoMercado.data}
            onChange={handleChangeAdd}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Volume de Pesquisa"
            name="volumePesquisa"
            type="number"
            value={novoMercado.volumePesquisa}
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

export default ListaDeMercadosPotenciais;
