import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/globalStyles";
import Routes from "./routes";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
      <Footer whiteSchema={true}> <p> © 2021 Habitus. All rights reserved. </p> </Footer>
    </div>
  );
}

export default App;
