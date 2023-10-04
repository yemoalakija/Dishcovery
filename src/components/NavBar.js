import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Update the loggedIn state when currentUser changes
    setLoggedIn(!!currentUser);
  }, [currentUser]);

  const loggedInIcons = <span>{currentUser?.username}</span>;

  const loggedOutIcons = (
    <>
      <NavLink exact to="/signin" className={styles.NavLink}>
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink exact to="/signup" className={styles.NavLink}>
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-left">
            <NavLink exact to="/" className={styles.NavLink}>
              <i className="fas fa-home"></i>Home
            </NavLink>
            {loggedIn ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
