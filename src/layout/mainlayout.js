import React from "react"
import PropTypes from "prop-types"
import {FirebaseContext, useAuth} from '../components/Firebase';
import 'bootstrap/dist/css/bootstrap.css';
import './layout.css'

const MainLayout = ({ children }) => {
  const {user, firebase, loading} = useAuth();
  return (
    <FirebaseContext.Provider value={{user, firebase, loading}}>
      {children}
    </FirebaseContext.Provider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
