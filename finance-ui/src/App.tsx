
import Container from '@mui/material/Container';
import { CompanyContainer } from './company/companyContainer';
import { QueryClient, QueryClientProvider } from 'react-query'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Box } from '@mui/material';

const queryClient = new QueryClient()

const mdTheme = createTheme();

function App() {
  return (
    <QueryClientProvider client={queryClient}> 
        <ThemeProvider theme={mdTheme}>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <CompanyContainer />
            </Container>
          </Box>
        </ThemeProvider> 
    </QueryClientProvider>

  );
}

export default App;
