import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.cardBg};
  padding: 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterInfo = styled.div`
  h3 {
    color: ${props => props.theme.textColor};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.textColor};
  }
`;

const FooterLinks = styled.div`
  @media (max-width: 768px) {
    margin-top: 1rem;
  }

  a {
    color: ${props => props.theme.textColor};
    text-decoration: none;
    margin-left: 2rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.secondaryColor};
    }

    @media (max-width: 768px) {
      margin: 0 1rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterInfo>
          <h3>CyberSen</h3>
          <p>Geleceğin siber güvenlik uzmanlarını yetiştiriyoruz.</p>
        </FooterInfo>
        <FooterLinks>
          <Link to="/privacy">Gizlilik Politikası</Link>
          <Link to="/terms">Kullanım Şartları</Link>
          <Link to="/#contact">İletişim</Link>
        </FooterLinks>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer; 