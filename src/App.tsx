import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import './index.css'

export const App = () => {
  return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  );
};
