import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Typography, Box } from '@mui/material';
import ListaDeProdutos from './components/ListaDeProdutos';
import ListaDePaginas from './components/ListaDePaginas';
import ListaDeSecoes from './components/ListaDeSecoes';
import ListaDeEntregaveis from './components/ListaDeEntregaveis';
import ProdutoDetalhes from './components/ProdutoDetalhes';
import ListaDeCapitulos from './components/ListaDeCapitulos';
import ListaDeCapituloDetalhes from './components/ListaDeCapituloDetalhes';
import ListaDeElementosPaginaCheckout from './components/ListaDeElementosPaginaCheckout';
import ListaDePerguntasPublicoAlvo from './components/ListaDePerguntasPublicoAlvo'; // Importe o novo componente

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sistema de Cadastro
            </Typography>
            <Button color="inherit" component={Link} to="/produtos">
              Lista de Produtos
            </Button>
            <Button color="inherit" component={Link} to="/elementos-checkout">
              Elementos da Página de Checkout
            </Button>
            <Button color="inherit" component={Link} to="/perguntas-publico-alvo">
              Perguntas Público Alvo
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/produtos" element={<ListaDeProdutos />} />
          <Route path="/produtos/:produtoId" element={<ProdutoDetalhes />} />
          <Route path="/produtos/:produtoId/paginas" element={<ListaDePaginas />} />
          <Route path="/produtos/:produtoId/entregaveis" element={<ListaDeEntregaveis />} />
          <Route path="/paginas/:pageId/secoes" element={<ListaDeSecoes />} />
          <Route path="/entregaveis/:entregavelId/capitulos" element={<ListaDeCapitulos />} />
          <Route path="/capitulos/:capituloId/detalhes" element={<ListaDeCapituloDetalhes />} />
          <Route path="/elementos-checkout" element={<ListaDeElementosPaginaCheckout />} />
          <Route path="/perguntas-publico-alvo" element={<ListaDePerguntasPublicoAlvo />} /> {/* Rota para Perguntas Público Alvo */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
