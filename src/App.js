import logo from "./logo.svg";
import "./App.css";

import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { fetchToken } from "./firebase";
import { registerServiceWorker } from "./register-sw";

function App() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [isTokenFound, setTokenFound] = useState(false);

  registerServiceWorker();

  fetchToken(setTokenFound);

  const notif = () => {
    enqueueSnackbar("Test", { variant: "success" });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          variant="contained"
          onClick={() => {
            notif();
          }}
        >
          Show Notif
        </Button>
      </header>
    </div>
  );
}

export default App;
