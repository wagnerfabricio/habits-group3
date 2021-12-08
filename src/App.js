import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes />
    </div>
  );
}

export default App;
