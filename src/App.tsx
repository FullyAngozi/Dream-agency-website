import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </>
  );
}

export default App;
