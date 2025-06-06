import * as React from "react"
import '../styles/global.css'
import Navigation from "../components/navigation/Navigation"

const Design = () => {
  return (
    <>
    <Navigation/>
    <main className="">
      <h1 className="bg-igem-white">Design</h1>
    </main>
    </>
  )
}

export default Design

export const Head = () => <title>Design</title>
