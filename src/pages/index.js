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
      <Paper className="text-justify">
        <h2 className="text-4xl font-bold mb-4">Heading one</h2>
        <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2 className="text-4xl font-bold mb-4">Heading two</h2>
        <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2 className="text-4xl font-bold mb-4">Heading two</h2>
        <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Paper>
    </div>
    <Footer></Footer>
    </body>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
