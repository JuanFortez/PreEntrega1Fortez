import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContanier from "./components/ItemListContainer/ItemListContanier";


function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContanier greeting="Bienvenidos a mi tienda"/>
    </ChakraProvider>
  );
}

export default App;