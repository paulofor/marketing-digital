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
import ListaDePerguntasPublicoAlvo from './components/ListaDePerguntasPublicoAlvo';
import ListaDeMercadosPotenciais from './components/ListaDeMercadosPotenciais';
import PerguntasRespostas from './components/PerguntasRespostas'; // Importe o novo componente
import RespostaElementoCheckout from './components/RespostaElementoCheckout'; // Ajuste o caminho conforme necessário

import { createTheme, ThemeProvider } from '@mui/material/styles';

// Criação do tema personalizado
const theme = createTheme({
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff', // Fundo branco
                    border: '1px solid #d1d5db', // Borda sutil
                    borderRadius: '6px', // Bordas arredondadas
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra leve
                    marginBottom: '10px', // Espaçamento entre itens
                    '&:hover': {
                        backgroundColor: '#f9f9f9', // Fundo levemente cinza no hover
                    },
                },
            },
        },
    },
});

function App() {
  return (
    // Envolvendo toda a aplicação no ThemeProvider
    <ThemeProvider theme={theme}>
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
              <Button color="inherit" component={Link} to="/mercados-potenciais">
                Mercados Potenciais
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
            <Route path="/perguntas-publico-alvo" element={<ListaDePerguntasPublicoAlvo />} />
            <Route path="/mercados-potenciais" element={<ListaDeMercadosPotenciais />} />
            <Route path="/produtos/:produtoId/perguntas-respostas" element={<PerguntasRespostas />} /> {/* Nova rota */}
            <Route path="/produtos/:produtoId/checkout" element={<RespostaElementoCheckout />} />
           </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
