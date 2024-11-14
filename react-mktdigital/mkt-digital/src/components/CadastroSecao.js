import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CadastroSecao = () => {
  const [fases, setFases] = useState([]);
  const [faseId, setFaseId] = useState('');
  const [nome, setNome] = useState('');

  // Carregar fases disponíveis para associar à seção
  useEffect(() => {
    const fetchFases = async () => {
      try {
        const response = await axios.get('https://sua-api.com/fases');
        setFases(response.data);
      } catch (error) {
        console.error('Erro ao buscar fases:', error);
      }
    };
    fetchFases();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`https://sua-api.com/fases/${faseId}/secoes`, { nome });
      alert('Seção cadastrada com sucesso!');
      setNome('');
    } catch (error) {
      console.error('Erro ao cadastrar seção:', error);
      alert('Erro ao cadastrar seção!');
    }
  };

  return (
    <div>
      <h2>Cadastrar Seção</h2>
      <form onSubmit={handleSubmit}>
        <label>Selecione a Fase:</label>
        <select value={faseId} onChange={(e) => setFaseId(e.target.value)}>
          <option value="">Selecione uma fase</option>
          {fases.map((fase) => (
            <option key={fase.id} value={fase.id}>
              {fase.nome}
            </option>
          ))}
        </select>

        <label>Nome da Seção:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroSecao;
