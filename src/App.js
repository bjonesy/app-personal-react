import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./containers/About";
import Contact from "./containers/Contact";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import PageNotFound from "./components/PageNotFound";
import { styled } from "@mui/material/styles";

const AppContainer = styled("div")(() => ({
  background: "white",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
