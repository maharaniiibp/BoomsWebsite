import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import styles from '../styles/navbar.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"  // Add fixed="top" to make the Navbar fixed at the top
        style={{
          background: scrolling ? '#E7F9FF' : '#E7F9FF',
          transition: 'background 0.3s',
          marginTop:'25px'
        }}
        variant="dark"
      >
        <Container className={styles['cover-navbar']}>
          <Navbar.Brand className={styles['navbar-logo']} href="#home">
            <img src="../../asset/navbar-logo.png" alt="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle className={styles['responsive-navbar']} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles['navbar-menu'] + ' mx-auto gap-3 align-items-center gap-lg-5'}>
              {/* Adjusted anchor tag usage */}
              <a href="/" style={{ color: '#00688D', cursor: 'pointer', textDecoration: 'none' }}>Home</a>
              <a href="/product" style={{ color: '#00688D', cursor: 'pointer', textDecoration: 'none' }}>Product</a>
              <a href="/galeri" style={{ color: '#00688D', cursor: 'pointer', textDecoration: 'none' }}>About Us</a>
              <a href="/artikel" style={{ color: '#00688D', cursor: 'pointer', textDecoration: 'none' }}>Contact</a>
            </Nav>

            <Nav className={styles['icon-navbar']}>
              <Nav.Link href="#">
                <img className={styles['search']} src='../../asset/search.png'></img>
              </Nav.Link>
              <Nav.Link href="#">
                <img className={styles['like']} src='../../asset/like.png'></img>
              </Nav.Link>
              <Nav.Link href="#">
                <img className={styles['user']} src='../../asset/user.png'></img>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
