import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Header } from "./shared/components/Header";
import { Footer } from "./shared/components/Footer";
import { LoginProvider } from "./shared/context/useAuth";


export const App = () => {
  return (

    <BrowserRouter>
      <LoginProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </LoginProvider>
    </BrowserRouter>
  );
};
