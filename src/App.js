// Desc: Main App component
import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route path="/" element={<h1>Home Page Hello, world!</h1>} />
          <Route path="/signin" element={<h1>Sign In Page Hello, world!</h1>} />
          <Route path="/signup" element={<h1>Sign Up Page Hello, world!</h1>} />
          <Route path="*" element={<h3>Page Not Found!</h3>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
