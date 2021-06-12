import React, { useContext } from "react"
import Authentication from '../components/Authentication'
import Application from '../components/Application'

import { FirebaseContext } from "../components/Firebase"
const IndexPage = props => {
  const { user } = useContext(FirebaseContext)
  return (
    <>
    {(!user || !user.email) && (
          <Authentication/>
    )}
    {!!user && !!user.email && (
            <Application/>
    )}    
    </>
  )
}


export default IndexPage
