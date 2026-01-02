import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router';
import { YoutubeProvider } from './context/YoutubeContext.jsx';
import './App.css';
import Header from './components/Header.jsx';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <YoutubeProvider>
          <Outlet />
        </YoutubeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
