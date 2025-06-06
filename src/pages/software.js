import * as React from "react"
import '../styles/global.css'
import Navigation from "../components/navigation/Navigation"

const Software = () => {
  return (
    <>
    <Navigation/>
    <main className="">
      <h1 className="bg-igem-white">Software</h1>
    </main>
    </>
  )
}

export default Software

export const Head = () => <title>Software</title>
