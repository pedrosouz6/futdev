import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import 'react-tooltip/dist/react-tooltip.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { queryClient } from './service/queryClient';

import GlobalStyle from './styles/globalStyle';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './styles/variables';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
)
