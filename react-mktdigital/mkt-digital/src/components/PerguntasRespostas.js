import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'; // Importa o ReactMarkdown para renderizar o Markdown
import {
  Box,
  Typography,
  CircularProgress,
  List,
  ListItem,
  Divider,
} from '@mui/material';
import { useParams } from 'react-router-dom';

const PerguntasRespostas = () => {
  const { produtoId } = useParams(); // Obter o ID do produto da URL
  const [perguntasRespostas, setPerguntasRespostas] = useState([]); // Estado para armazenar as perguntas e respostas
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  useEffect(() => {
    const fetchPerguntasRespostas = async () => {
      try {
        // Busca as perguntas e respostas do produto
        const perguntasResponse = await axios.get(
          `http://vps-40d69db1.vps.ovh.ca:23101/api/PerguntaPublicoAlvos`
        );
        const respostasResponse = await axios.get(
          `http://vps-40d69db1.vps.ovh.ca:23101/api/RespostaPublicoAlvos?filter[where][produtoProprioId]=${produtoId}`
        );

        // Combinar perguntas e respostas
        const perguntas = perguntasResponse.data;
        const respostas = respostasResponse.data;

        // Vincular respostas às perguntas
        const data = perguntas
          .map((pergunta) => ({
            ...pergunta,
            resposta: respostas.find(
              (resposta) =>
                resposta.perguntaPublicoAlvoId === pergunta.id
            )?.resposta || 'Sem resposta disponível',
          }))
          .sort((a, b) => a.ordenacao - b.ordenacao); // Ordenar por ordenacao

        setPerguntasRespostas(data);
      } catch (err) {
        setError('Erro ao carregar perguntas e respostas.');
      } finally {
        setLoading(false);
      }
    };

    fetchPerguntasRespostas();
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
        Perguntas e Respostas sobre o Produto
      </Typography>

      <List>
        {perguntasRespostas.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItem alignItems="flex-start">
              <Box>
                {/* Pergunta */}
                <Typography variant="h6" color="primary" gutterBottom>
                  {`${index + 1}. ${item.pergunta}`}
                </Typography>

                {/* Resposta em Markdown */}
                <Box sx={{ marginTop: 1 }}>
                  <ReactMarkdown>{item.resposta}</ReactMarkdown>
                </Box>
              </Box>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default PerguntasRespostas;
