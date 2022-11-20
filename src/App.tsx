import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Header } from "./shared/components/Header";
import { Footer } from "./shared/components/Footer";


export const App = () => {
  return (
    <BrowserRouter>
      <Header />
     
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  );
};
