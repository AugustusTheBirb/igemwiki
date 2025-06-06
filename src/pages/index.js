import * as React from "react"
import '../styles/global.css'
import Navigation from "../components/navigation/Navigation"
import Footer from "../components/footer/Footer"
import Hero from "../components/Hero"
import backgroundImg from "../images/background.png"
import Paper from "../components/paper"

const IndexPage = () => {
  return (
    <body className="overflow-x-hidden">
    <Navigation/>
    
    <div className="h-screen bg-cover bg-center bg-no-repeat w-full" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <Hero title="Home"/>
      <Paper>
        <h1>yoyooy</h1>
        <p>testukai</p>
      </Paper>
    </div>
    <Footer></Footer>
    </body>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
