import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, CircularProgress, Box, Pagination } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import { useNavigate } from 'react-router-dom'; // Para navegação

const ListaDeProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Página atual
  const itemsPerPage = 20; // Itens por página
  const navigate = useNavigate(); // Hook para navegação

  // Função para buscar os produtos da API
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://vps-40d69db1.vps.ovh.ca:23101/api/ProdutoProprios');
        setProdutos(response.data);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar os produtos. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  // Função para calcular os produtos a serem exibidos na página atual
  const paginatedProdutos = () => {
    const startIndex = (page - 1) * itemsPerPage;
    return produtos.slice(startIndex, startIndex + itemsPerPage);
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
        Lista de Produtos
      </Typography>

      <List sx={{ marginTop: 2 }}>
        {paginatedProdutos().map((produto) => (
          <ListItem
            key={produto.id}
            sx={{ marginBottom: 2, backgroundColor: '#f4f4f4', borderRadius: '10px', cursor: 'pointer' }}
            onClick={() => navigate(`/produtos/${produto.id}`)} // Redireciona para a tela de detalhes do produto
          >
            <ListItemAvatar>
              <Avatar>
                <StoreIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={produto.nome}
              secondary={
                <Typography variant="body2" color="textSecondary">
                  {produto.promptEspecialista ? produto.promptEspecialista : 'Descrição não disponível'}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>

      <Pagination
        count={Math.ceil(produtos.length / itemsPerPage)} // Total de páginas
        page={page} // Página atual
        onChange={(event, value) => setPage(value)} // Função para mudar de página
        sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
      />
    </Box>
  );
};

export default ListaDeProdutos;
