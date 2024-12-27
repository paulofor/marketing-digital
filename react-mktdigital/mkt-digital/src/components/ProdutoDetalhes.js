import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Typography,
  Switch,
  FormControlLabel,
  TextField,
  MenuItem,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const ProdutoDetalhes = () => {
  const { produtoId } = useParams(); // Obter o ID do produto da URL
  const navigate = useNavigate(); // Hook para navegação
  const [nomeProduto, setNomeProduto] = useState(''); // Estado para o nome do produto
  const [geraPaginaCheckout, setGeraPaginaCheckout] = useState(0); // Estado para o status geraPaginaCheckout
  const [mercadoPotencialId, setMercadoPotencialId] = useState(''); // Estado para o mercado potencial
  const [mercadosPotenciais, setMercadosPotenciais] = useState([]); // Lista de mercados potenciais

  useEffect(() => {
    // Função para obter os dados do produto do backend
    const fetchProduto = async () => {
      try {
        const response = await axios.get(`http://vps-40d69db1.vps.ovh.ca:23101/api/ProdutoProprios/${produtoId}`);
        setNomeProduto(response.data.nome); // Atualiza o nome do produto
        setGeraPaginaCheckout(response.data.geraPaginaCheckout); // Atualiza o status geraPaginaCheckout
        setMercadoPotencialId(response.data.mercadoPotencialId); // Atualiza o mercado potencial
      } catch (error) {
        console.error('Erro ao obter o produto:', error);
      }
    };

    // Função para obter a lista de mercados potenciais
    const fetchMercadosPotenciais = async () => {
      try {
        const response = await axios.get('http://vps-40d69db1.vps.ovh.ca:23101/api/MercadoPotencials');
        setMercadosPotenciais(response.data);
      } catch (error) {
        console.error('Erro ao obter mercados potenciais:', error);
      }
    };

    fetchProduto();
    fetchMercadosPotenciais();
  }, [produtoId]);

  const handleToggleCheckout = async () => {
    const novoStatus = geraPaginaCheckout === 1 ? 0 : 1;
    try {
      // Atualiza o campo geraPaginaCheckout no backend
      await axios.patch(`http://vps-40d69db1.vps.ovh.ca:23101/api/ProdutoProprios/${produtoId}`, {
        geraPaginaCheckout: novoStatus,
      });
      setGeraPaginaCheckout(novoStatus); // Atualiza o estado local
    } catch (error) {
      console.error('Erro ao atualizar o status geraPaginaCheckout:', error);
    }
  };

  const handleSaveMercadoPotencial = async () => {
    try {
      // Atualiza o campo mercadoPotencialId no backend
      await axios.patch(`http://vps-40d69db1.vps.ovh.ca:23101/api/ProdutoProprios/${produtoId}`, {
        mercadoPotencialId,
      });
      alert('Mercado Potencial atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar o mercado potencial:', error);
      alert('Erro ao atualizar o mercado potencial.');
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        {nomeProduto || 'Carregando...'}
      </Typography>

      <FormControlLabel
        control={
          <Switch
            checked={geraPaginaCheckout === 1}
            onChange={handleToggleCheckout}
            color="primary"
          />
        }
        label={`Página de Checkout: ${geraPaginaCheckout === 1 ? 'Ligado' : 'Desligado'}`}
      />

      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h6" gutterBottom>
          Selecionar Mercado Potencial
        </Typography>
        <TextField
          select
          label="Mercado Potencial"
          value={mercadoPotencialId}
          onChange={(e) => setMercadoPotencialId(e.target.value)}
          fullWidth
          margin="normal"
        >
          {mercadosPotenciais.map((mercado) => (
            <MenuItem key={mercado.id} value={mercado.id}>
              {`${mercado.nome} (${mercado.volumePesquisa || 0})`}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveMercadoPotencial}
          sx={{ marginTop: 2 }}
        >
          Salvar Mercado Potencial
        </Button>
      </Box>

      <Box sx={{ marginTop: 5 }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginRight: 2 }}
          onClick={() => navigate(`/produtos/${produtoId}/paginas`)}
        >
          Páginas de Venda
        </Button>

        <Button
          variant="contained"
          color="secondary"
          sx={{ marginRight: 2 }}
          onClick={() => navigate(`/produtos/${produtoId}/entregaveis`)}
        >
          Entregáveis
        </Button>

        <Button
          variant="contained"
          color="secondary"
          sx={{ marginRight: 2 }}
          onClick={() => navigate(`/produtos/${produtoId}/checkout`)}
        >
          Checkout
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate(`/produtos/${produtoId}/perguntas-respostas`)}
        >
          Perguntas e Respostas
        </Button>
      </Box>
    </Box>
  );
};

export default ProdutoDetalhes;
