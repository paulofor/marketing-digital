import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const ProdutoDetalhes = () => {
  const { produtoId } = useParams(); // Obter o ID do produto da URL
  const navigate = useNavigate(); // Hook para navegação

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Escolha uma Opção para o Produto
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        sx={{ marginRight: 2 }}
        onClick={() => navigate(`/produtos/${produtoId}/paginas`)} // Navega para a lista de páginas
      >
        Páginas de Venda
      </Button>

      <Button
        variant="contained"
        color="secondary"
        sx={{ marginRight: 2 }}
        onClick={() => navigate(`/produtos/${produtoId}/entregaveis`)} // Navega para a lista de entregáveis
      >
        Entregáveis
      </Button>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate(`/produtos/${produtoId}/entregaveis`)} // Navega para a lista de entregáveis
      >
        Checkout
      </Button>
    </Box>
  );
};

export default ProdutoDetalhes;
