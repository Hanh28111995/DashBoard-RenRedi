// import logo from "./logo.svg";
import "../src/assets/css/main.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { Suspense } from "react";
// import { LoadingProvider } from "./contexts/loading.context";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        {/* <LoadingProvider> */}
          <Router />
        {/* </LoadingProvider> */}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;