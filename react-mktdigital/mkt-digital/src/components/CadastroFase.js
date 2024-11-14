import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CadastroFase = () => {
  const [paginas, setPaginas] = useState([]);
  const [paginaId, setPaginaId] = useState('');
  const [nome, setNome] = useState('');

  // Carregar páginas disponíveis para associar a fase
  useEffect(() => {
    const fetchPaginas = async () => {
      try {
        const response = await axios.get('https://sua-api.com/paginas');
        setPaginas(response.data);
      } catch (error) {
        console.error('Erro ao buscar páginas:', error);
      }
    };
    fetchPaginas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`https://sua-api.com/paginas/${paginaId}/fases`, { nome });
      alert('Fase cadastrada com sucesso!');
      setNome('');
    } catch (error) {
      console.error('Erro ao cadastrar fase:', error);
      alert('Erro ao cadastrar fase!');
    }
  };

  return (
    <div>
      <h2>Cadastrar Fase</h2>
      <form onSubmit={handleSubmit}>
        <label>Selecione a Página de Venda:</label>
        <select value={paginaId} onChange={(e) => setPaginaId(e.target.value)}>
          <option value="">Selecione uma página</option>
          {paginas.map((pagina) => (
            <option key={pagina.id} value={pagina.id}>
              {pagina.nome}
            </option>
          ))}
        </select>

        <label>Nome da Fase:</label>
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

export default CadastroFase;
