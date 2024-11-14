import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const CadastroProduto = () => {
  const [nome, setNome] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://sua-api.com/produtos', { nome });
      alert('Produto cadastrado com sucesso!');
      setNome('');
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      alert('Erro ao cadastrar produto!');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Cadastrar Produto
      </Typography>
      <TextField
        fullWidth
        label="Nome do Produto"
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

export default CadastroProduto;
