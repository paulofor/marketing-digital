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
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useParams, useNavigate } from 'react-router-dom';

const ListaDeEntregaveis = () => {
  const { produtoId } = useParams();
  const [entregaveis, setEntregaveis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [editEntregavel, setEditEntregavel] = useState(null);
  const [nome, setNome] = useState('');
  const [promptDefinicao, setPromptDefinicao] = useState('');
  const [geraEbook, setGeraEbook] = useState(0);
  const [area, setArea] = useState('');
  const [urlImagemCapa, setUrlImagemCapa] = useState(''); // Estado para manter a URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntregaveis = async () => {
      try {
        const response = await axios.get(
          `http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelProdutos`,
          {
            params: {
              filter: JSON.stringify({
                where: { produtoProprioId: Number(produtoId) },
              }),
            },
          }
        );
        setEntregaveis(response.data);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar os entregáveis.');
        setLoading(false);
      }
    };

    fetchEntregaveis();
  }, [produtoId]);

  const handleOpen = (entregavel = null) => {
    setEditEntregavel(entregavel);
    setNome(entregavel ? entregavel.nome : '');
    setPromptDefinicao(entregavel ? entregavel.promptDefinicao : '');
    setGeraEbook(entregavel ? entregavel.geraEbook : 0);
    setArea(entregavel ? entregavel.area || '' : '');
    setUrlImagemCapa(entregavel ? entregavel.urlImagemCapa || '' : ''); // Preenche o estado com a URL
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNome('');
    setPromptDefinicao('');
    setGeraEbook(0);
    setArea('');
    setUrlImagemCapa('');
    setEditEntregavel(null);
  };

  const handleSave = async () => {
    try {
      const entregavelData = {
        nome,
        promptDefinicao,
        geraEbook,
        area,
        urlImagemCapa, // Inclui a URL no objeto enviado
        produtoProprioId: Number(produtoId),
      };

      if (editEntregavel) {
        await axios.put(
          `http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelProdutos/${editEntregavel.id}`,
          entregavelData
        );
      } else {
        await axios.post(
          `http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelProdutos`,
          entregavelData
        );
      }

      handleClose();

      const response = await axios.get(
        `http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelProdutos`,
        {
          params: {
            filter: JSON.stringify({
              where: { produtoProprioId: Number(produtoId) },
            }),
          },
        }
      );
      setEntregaveis(response.data);
    } catch (error) {
      setError('Erro ao salvar o entregável.');
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
      <Typography variant="h4" gutterBottom>
        Entregáveis do Produto
      </Typography>

      <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpen()}>
        Novo Entregável
      </Button>

      <List sx={{ marginTop: 2 }}>
        {entregaveis.map((entregavel) => (
          <ListItem
            key={entregavel.id}
            sx={{
              marginBottom: 2,
              backgroundColor: '#f4f4f4',
              borderRadius: '10px',
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              justifyContent: 'space-between',
            }}
            onClick={() => navigate(`/entregaveis/${entregavel.id}/capitulos`)}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemAvatar sx={{ marginRight: 2 }}>
                {entregavel.urlImagemCapa ? (
                  <Avatar
                    src={entregavel.urlImagemCapa}
                    alt={entregavel.nome}
                    variant="square"
                    sx={{ width: 64, height: 64 }}
                  />
                ) : (
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                )}
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h6" fontWeight="bold">
                    {entregavel.nome}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" color="textSecondary">
                    {entregavel.area ? `Área: ${entregavel.area}` : 'Sem área definida'}
                  </Typography>
                }
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  color: entregavel.geraEbook === 1 ? 'green' : 'red',
                  marginRight: 2,
                }}
              >
                {entregavel.geraEbook === 1 ? 'Ligado' : 'Desligado'}
              </Typography>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpen(entregavel);
                }}
              >
                <EditIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>{editEntregavel ? 'Editar Entregável' : 'Novo Entregável'}</DialogTitle>
        <DialogContent>
          <input type="hidden" name="urlImagemCapa" value={urlImagemCapa} />
          <TextField
            autoFocus
            margin="dense"
            label="Nome do Entregável"
            fullWidth
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Prompt Definição"
            fullWidth
            multiline
            rows={4}
            value={promptDefinicao}
            onChange={(e) => setPromptDefinicao(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Área"
            fullWidth
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Gera Ebook</InputLabel>
            <Select value={geraEbook} onChange={(e) => setGeraEbook(e.target.value)}>
              <MenuItem value={1}>Ligado</MenuItem>
              <MenuItem value={0}>Desligado</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="primary">
            {editEntregavel ? 'Atualizar' : 'Salvar'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ListaDeEntregaveis;
