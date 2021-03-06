import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { FirebaseContext } from "../Firebase"
import styled from "styled-components"
import { push as Menu } from 'react-burger-menu'

const LogoutLink = styled.span`
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const HeaderWrapper = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;

  > h1 {
    margin: 0;
    flex-grow: 1;

    > a {
      color: white;
      text-decoration: none;
    }
  }
  > div {
    margin: auto 0;
  }
`

const UserInfo = styled.div`
  text-align: right;
  color: white;
`

const LoginLink = styled.div`
  margin: auto 0;
  a {
    color: white;
  }
`

const Divider = styled.span`
  margin: 0 8px;
  padding-right: 1px;
  background: #ddd;
`

const AdminLink = styled.span`
  a {
    color: white;
  }
`

const Header = ({ siteTitle }) => {
  const { firebase, user } = useContext(FirebaseContext)
  
  //const image = app.storage().ref(`images/${user.uid}`);
  //console.log('current User data ', image)
  //image.getDownloadURL().then((url) => console.log('My Profile Image ',url));

  function handleLogoutClick() {
    firebase.logout().then(() => navigate("/"))
  }

  return (
    <HeaderWrapper id="outer-container">
      <Menu width={ '280px' } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
      <HeaderContent id="page-wrap">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div>
          {!!user && !!user.email && (
            <UserInfo>
              Hello, {user.username || user.email}
              <div>
                {!!user.isAdmin && (
                  <>
                    <AdminLink>
                      <Link to="/add-author">Add author</Link>
                    </AdminLink>
                    <Divider />
                    <AdminLink>
                      <Link to="/add-book">Add book</Link>
                    </AdminLink>
                    <Divider />
                  </>
                )}
                <LogoutLink onClick={handleLogoutClick}>Logout</LogoutLink>
              </div>
            </UserInfo>
          )}
          {(!user || !user.email) && (
            <LoginLink>
              <Link to="/login">Login</Link>
              <Divider />
              <Link to="/register">Register</Link>
            </LoginLink>
          )}
        </div>
      </HeaderContent>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
