 
import Container from '@mui/material/Container'; 
import { CompanyContainer } from './company/companyContainer';
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}> 
    <Container maxWidth="sm">
      <CompanyContainer/>
    </Container>
    </QueryClientProvider>

  );
}

export default App;
