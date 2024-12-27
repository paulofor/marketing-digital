import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  CircularProgress,
  List,
  ListItem,
  Divider,
} from '@mui/material';
import { useParams } from 'react-router-dom';

const RespostaElementoCheckout = () => {
  const { produtoId } = useParams(); // Obter o ID do produto da URL
  const [elementosCheckout, setElementosCheckout] = useState([]); // Estado para armazenar os elementos
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  useEffect(() => {
    const fetchElementosCheckout = async () => {
      try {
        // Busca os elementos relacionados ao produto
        const response = await axios.get(
          `http://vps-40d69db1.vps.ovh.ca:23101/api/ElementoCheckoutProdutos`,
          {
            params: {
              filter: JSON.stringify({
                where: { produtoProprioId: Number(produtoId) },
                include: 'elementoPaginaCheckout', // Inclui os detalhes do elemento relacionado
              }),
            },
          }
        );

        const data = response.data.map((item) => ({
          id: item.id,
          texto: item.texto || 'Texto não disponível',
          promptBasico:
            item.elementoPaginaCheckout?.promptBasico ||
            'Prompt Básico não disponível',
        }));

        setElementosCheckout(data);
      } catch (err) {
        setError('Erro ao carregar elementos de checkout.');
      } finally {
        setLoading(false);
      }
    };

    fetchElementosCheckout();
  }, [produtoId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Respostas dos Elementos de Checkout
      </Typography>

      <List>
        {elementosCheckout.map((elemento, index) => (
          <React.Fragment key={elemento.id}>
            <ListItem alignItems="flex-start">
              <Box>
                {/* Prompt Básico do Elemento */}
                <Typography variant="h6" color="primary" gutterBottom>
                  {`${index + 1}. ${elemento.promptBasico}`}
                </Typography>

                {/* Texto do Elemento */}
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  {elemento.texto}
                </Typography>
              </Box>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default RespostaElementoCheckout;
