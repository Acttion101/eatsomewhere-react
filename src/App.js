import React from 'react';
import "./index.css";
import Navbar from "./components/Navbar"
import ContainerLayout from "./components/ContainerLayout"
// import "./sass/main.scss"
function App() {
  return (
    <ContainerLayout>
     <Navbar />
    </ContainerLayout>
  );
}

export default App;
