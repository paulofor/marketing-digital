import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, CircularProgress, Box, Button, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useParams, useNavigate } from 'react-router-dom'; // Para navegação e capturar parâmetros da URL

const ListaDeEntregaveis = () => {
  const { produtoId } = useParams(); // Captura o produtoId da URL
  const [entregaveis, setEntregaveis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false); // Estado para controlar o modal
  const [editEntregavel, setEditEntregavel] = useState(null); // Estado para saber se está editando ou criando um novo
  const [nome, setNome] = useState(''); // Estado para o nome do entregável
  const [promptDefinicao, setPromptDefinicao] = useState(''); // Estado para o promptDefinicao do entregável
  const navigate = useNavigate(); // Hook de navegação

  useEffect(() => {
    const fetchEntregaveis = async () => {
      try {
        // Faz a chamada para buscar os entregáveis relacionados ao produto selecionado
        const response = await axios.get(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelProdutos`, {
          params: {
            filter: JSON.stringify({ where: { produtoProprioId: Number(produtoId) } }),
          },
        });
        setEntregaveis(response.data);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar os entregáveis.');
        setLoading(false);
      }
    };

    fetchEntregaveis();
  }, [produtoId]); // Reexecuta o efeito quando o produtoId mudar

  // Função para abrir o modal de edição ou criação
  const handleOpen = (entregavel = null) => {
    setEditEntregavel(entregavel); // Se entregável for passado, abre para edição
    setNome(entregavel ? entregavel.nome : ''); // Se tiver um entregável, edita, se não, cria um novo
    setPromptDefinicao(entregavel ? entregavel.promptDefinicao : ''); // Preenche promptDefinicao se estiver editando
    setOpen(true);
  };

  // Função para fechar o modal
  const handleClose = () => {
    setOpen(false);
    setNome('');
    setPromptDefinicao('');
    setEditEntregavel(null);
  };

  // Função para salvar o entregável (criar ou editar)
  const handleSave = async () => {
    try {
      const entregavelData = {
        nome,
        promptDefinicao,
        produtoProprioId: Number(produtoId), // Certifica-se de que o produtoProprioId seja enviado
      };

      if (editEntregavel) {
        // Edição de entregável
        await axios.put(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelProdutos/${editEntregavel.id}`, entregavelData);
      } else {
        // Criação de novo entregável
        await axios.post(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelProdutos`, entregavelData);
      }
      handleClose();
      // Recarrega a lista de entregáveis
      const response = await axios.get(`http://vps-40d69db1.vps.ovh.ca:23101/api/EntregavelProdutos`, {
        params: {
          filter: JSON.stringify({ where: { produtoProprioId: Number(produtoId) } }),
        },
      });
      setEntregaveis(response.data);
    } catch (error) {
      setError('Erro ao salvar o entregável.');
    }
  };

  // Verificação se está carregando
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

      {/* Botão para adicionar um novo entregável */}
      <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpen()}>
        Novo Entregável
      </Button>

      <List sx={{ marginTop: 2 }}>
        {entregaveis.map((entregavel) => (
          <ListItem
            key={entregavel.id}
            sx={{ marginBottom: 2, backgroundColor: '#f4f4f4', borderRadius: '10px', cursor: 'pointer' }}
            onClick={() => navigate(`/entregaveis/${entregavel.id}/capitulos`)} // Link para a lista de capítulos
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={entregavel.nome}
              secondary={
                <Typography variant="body2" color="textSecondary">
                  {entregavel.tipo ? `Tipo: ${entregavel.tipo}` : 'Sem tipo definido'}
                </Typography>
              }
            />
            <IconButton edge="end" aria-label="edit" onClick={(e) => {
              e.stopPropagation(); // Evita que o clique no botão de edição redirecione
              handleOpen(entregavel); // Abre o modal para editar
            }}>
              <EditIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      {/* Modal para adicionar/editar entregável com largura maior e novo campo */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg" // Define a largura máxima como "lg" (grande)
        fullWidth // Garante que o modal ocupe toda a largura disponível
      >
        <DialogTitle>{editEntregavel ? 'Editar Entregável' : 'Novo Entregável'}</DialogTitle>
        <DialogContent>
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
            rows={4} // Deixa o campo de definição com mais espaço
            value={promptDefinicao}
            onChange={(e) => setPromptDefinicao(e.target.value)}
          />
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
