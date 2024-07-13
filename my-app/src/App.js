import React from 'react'
import GlobalStyles from "./Global.jsx";
import { ThemeProvider } from 'styled-components'
import { Header } from "./components/Header.jsx"
import Aos from "aos";
import "aos/dist/aos.css"

function App (){
  return (
    <>
        <GlobalStyles></GlobalStyles>
        <Header />
    </>
  )
};

export default App;