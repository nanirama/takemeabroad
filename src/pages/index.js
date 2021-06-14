import React, { useContext } from "react"
import Authentication from '../components/Authentication'
import Application from '../components/Application'
// import Loading from '../components/loading'

import { FirebaseContext } from "../components/Firebase"
const IndexPage = props => {
  const { firebase,  user } = useContext(FirebaseContext)
  console.log('total firebase object ',user);
  return (
    <>    
	{/* {!user && (
	<Loading/>
	)} */}
    {!!user && !!user.email && (
            <Application/>
    )} 
	{(!user || !user.email) && (
          <Authentication/>
    )}   
    </>
  )
}


export default IndexPage
