import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CircularProgress,
  Box,
  Typography,
  IconButton,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SectionIcon from '@mui/icons-material/ViewWeek';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AddIcon from '@mui/icons-material/Add'; // Ícone para adicionar nova seção

const ListaDeSecoes = () => {
  const { pageId } = useParams();
  const [secoes, setSecoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [editingSecao, setEditingSecao] = useState(null);
  const [nome, setNome] = useState('');
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [posicao, setPosicao] = useState(0);
  const [promptBase, setPromptBase] = useState('');
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    if (pageId) {
      axios
        .get('http://vps-40d69db1.vps.ovh.ca:23101/api/PaginaVendaAbertaSecaos', {
          params: {
            filter: JSON.stringify({ where: { paginaVendaAbertaId: Number(pageId) }, order: ['posicao ASC'] }),
          },
        })
        .then((response) => {
          setSecoes(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError('Erro ao buscar as seções.');
          setLoading(false);
        });
    }
  }, [pageId]);

  // Função para copiar HTML para a área de transferência
  const copiarHtml = (htmlContent) => {
    navigator.clipboard.writeText(htmlContent).then(
      () => alert('HTML copiado para a área de transferência!'),
      (err) => alert('Erro ao copiar HTML: ', err)
    );
  };

  // Função para copiar CSS para a área de transferência
  const copiarCss = (cssContent) => {
    navigator.clipboard.writeText(cssContent).then(
      () => alert('CSS copiado para a área de transferência!'),
      (err) => alert('Erro ao copiar CSS: ', err)
    );
  };

  // Função para trocar a posição das seções
  const trocarPosicao = async (secaoId, novaPosicao) => {
    const secao = secoes.find((s) => s.id === secaoId);
    if (!secao) return;

    try {
      await axios.put(`http://vps-40d69db1.vps.ovh.ca:23101/api/PaginaVendaAbertaSecaos/${secaoId}`, {
        ...secao,
        posicao: novaPosicao,
      });
      // Reordenar as seções no frontend após atualizar
      setSecoes((prevSecoes) =>
        prevSecoes.map((s) =>
          s.id === secaoId ? { ...s, posicao: novaPosicao } : s
        ).sort((a, b) => a.posicao - b.posicao)
      );
    } catch (error) {
      console.error('Erro ao alterar a posição da seção:', error);
    }
  };

  // Função para mover uma seção para cima
  const moverParaCima = (secao) => {
    if (secao.posicao <= 1) return; // Não mover se estiver no topo
    const secaoAcima = secoes.find((s) => s.posicao === secao.posicao - 1);
    if (secaoAcima) {
      trocarPosicao(secaoAcima.id, secaoAcima.posicao + 1); // Move a seção de cima para baixo
      trocarPosicao(secao.id, secao.posicao - 1); // Move a seção atual para cima
    }
  };

  // Função para mover uma seção para baixo
  const moverParaBaixo = (secao) => {
    if (secao.posicao >= secoes.length) return; // Não mover se estiver no final
    const secaoAbaixo = secoes.find((s) => s.posicao === secao.posicao + 1);
    if (secaoAbaixo) {
      trocarPosicao(secaoAbaixo.id, secaoAbaixo.posicao - 1); // Move a seção de baixo para cima
      trocarPosicao(secao.id, secao.posicao + 1); // Move a seção atual para baixo
    }
  };

  const handleOpen = (secao = null) => {
    if (secao) {
      setEditingSecao(secao);
      setNome(secao.nome);
      setHtml(secao.html);
      setCss(secao.css);
      setPosicao(secao.posicao);
      setPromptBase(secao.promptBase);
      setAtivo(secao.ativo === 1);
    } else {
      setEditingSecao(null);
      setNome('');
      setHtml('');
      setCss('');
      setPosicao(secoes.length + 1);
      setPromptBase('');
      setAtivo(false);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingSecao(null);
    setNome('');
    setHtml('');
    setCss('');
    setPosicao(0);
    setPromptBase('');
    setAtivo(false);
  };

  const handleSave = async () => {
    const updatedSecao = {
      nome,
      html,
      css,
      posicao,
      promptBase,
      ativo: ativo ? 1 : 0,
      paginaVendaAbertaId: Number(pageId),
    };

    try {
      if (editingSecao) {
        await axios.put(`http://vps-40d69db1.vps.ovh.ca:23101/api/PaginaVendaAbertaSecaos/${editingSecao.id}`, updatedSecao);
      } else {
        await axios.post('http://vps-40d69db1.vps.ovh.ca:23101/api/PaginaVendaAbertaSecaos', updatedSecao);
      }
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error('Erro ao salvar a seção:', error);
    }
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
        Seções da Página
      </Typography>

      {/* Botão para criar uma nova seção */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Nova Seção
        </Button>
      </Box>

      <List sx={{ marginTop: 2 }}>
        {secoes.map((secao, index) => (
          <ListItem
            key={secao.id}
            sx={{ marginBottom: 2, backgroundColor: '#f4f4f4', borderRadius: '10px' }}
          >
            <ListItemAvatar>
              <Avatar>
                <SectionIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={secao.nome}
              secondary={
                <>
                  <Chip
                    label={secao.ativo === 1 ? 'Ativo' : 'Inativo'}
                    icon={secao.ativo === 1 ? <CheckCircleIcon /> : <CancelIcon />}
                    color={secao.ativo === 1 ? 'success' : 'default'}
                    sx={{ marginRight: 2 }}
                  />
                  {`Posição: ${secao.posicao}`}
                </>
              }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mr: 2 }}>
              <IconButton onClick={() => moverParaCima(secao)} disabled={index === 0}>
                <ArrowUpwardIcon />
              </IconButton>
              <IconButton onClick={() => moverParaBaixo(secao)} disabled={index === secoes.length - 1}>
                <ArrowDownwardIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mr: 2 }}>
              <Tooltip title="Copiar HTML">
                <IconButton onClick={() => copiarHtml(secao.html)}>
                  <FileCopyIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copiar CSS">
                <IconButton onClick={() => copiarCss(secao.css)}>
                  <FileCopyIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <IconButton edge="end" aria-label="edit" onClick={() => handleOpen(secao)}>
              <EditIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{editingSecao ? 'Editar Seção' : 'Nova Seção'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome da Seção"
            fullWidth
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            margin="dense"
            label="HTML"
            fullWidth
            multiline
            rows={4}
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          />
          <TextField
            margin="dense"
            label="CSS"
            fullWidth
            multiline
            rows={4}
            value={css}
            onChange={(e) => setCss(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Posição"
            type="number"
            fullWidth
            value={posicao}
            onChange={(e) => setPosicao(Number(e.target.value))}
          />
          <TextField
            margin="dense"
            label="Prompt Base"
            fullWidth
            value={promptBase}
            onChange={(e) => setPromptBase(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={ativo}
                onChange={(e) => setAtivo(e.target.checked)}
              />
            }
            label="Ativo"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ListaDeSecoes;
