import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/globalStyles";
import Routes from "./routes";


function App() {
  return (
    <div>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    
    </div>
  );
}

export default App;
