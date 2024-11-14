import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

const CadastroPagina = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtoId, setProdutoId] = useState('');
  const [nome, setNome] = useState('');

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('https://sua-api.com/produtos');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
    fetchProdutos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://sua-api.com/produtos/${produtoId}/paginas`, { nome });
      alert('Página cadastrada com sucesso!');
      setNome('');
    } catch (error) {
      console.error('Erro ao cadastrar página:', error);
      alert('Erro ao cadastrar página!');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Cadastrar Página de Venda
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="produto-label">Selecione o Produto</InputLabel>
        <Select
          labelId="produto-label"
          value={produtoId}
          onChange={(e) => setProdutoId(e.target.value)}
          label="Selecione o Produto"
        >
          {produtos.map((produto) => (
            <MenuItem key={produto.id} value={produto.id}>
              {produto.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Nome da Página"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </Box>
  );
};

export default CadastroPagina;
