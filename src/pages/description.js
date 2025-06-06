import * as React from "react"
import '../styles/global.css'
import Navigation from "../components/navigation/Navigation"

const Description = () => {
  return (
    <>
    <Navigation/>
    <main className="">
      <h1 className="bg-igem-white">Description</h1>
    </main>
    </>
  )
}

export default Description

export const Head = () => <title>Description</title>
