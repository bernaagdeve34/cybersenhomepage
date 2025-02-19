import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  background-color: ${props => props.theme.bgColor};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.primaryColor};
  
  svg {
    font-size: 2rem;
  }
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: ${props => props.theme.bgColor};
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    gap: 1rem;
  }
`;

const NavLink = styled(HashLink)`
  color: ${props => props.theme.textColor};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: ${props => props.theme.secondaryColor};
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const LoginButton = styled(Link)`
  padding: 0.5rem 1.2rem;
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 5px;
  color: ${props => props.theme.primaryColor};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primaryColor};
    color: white;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const RegisterButton = styled(Link)`
  padding: 0.5rem 1.2rem;
  background: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 5px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.secondaryColor};
    border-color: ${props => props.theme.secondaryColor};
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.textColor};
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;

  &:hover {
    color: ${props => props.theme.secondaryColor};
  }
`;

const MobileMenu = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.textColor};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  };

  return (
    <Nav>
      <NavContainer>
        <Logo>
          <FontAwesomeIcon icon={faShieldAlt} />
          <LogoText>CyberSen</LogoText>
        </Logo>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
          >
            Ana Sayfa
          </NavLink>
          <NavLink 
            to="/#services" 
            scroll={scrollWithOffset}
            onClick={() => setIsMenuOpen(false)}
          >
            Hizmetler
          </NavLink>
          <NavLink 
            to="/#contact" 
            scroll={scrollWithOffset}
            onClick={() => setIsMenuOpen(false)}
          >
            İletişim
          </NavLink>
          <AuthButtons>
            <LoginButton to="#">Giriş Yap</LoginButton>
            <RegisterButton to="#">Kayıt Ol</RegisterButton>
          </AuthButtons>
          <ThemeToggle onClick={toggleTheme}>
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </ThemeToggle>
        </NavLinks>
        
        <MobileMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 