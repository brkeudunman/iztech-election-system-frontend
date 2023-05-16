import { QueryClient, QueryClientProvider } from "react-query";

import AppLicationRoutes from "./pages/index";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppLicationRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
