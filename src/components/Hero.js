import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, 
    ${props => props.theme.primaryColor}, 
    ${props => props.theme.secondaryColor}
  );
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  animation: fadeInUp 1s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease 0.2s;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: white;
  color: ${props => props.theme.primaryColor};
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>Siber Güvenlikte Yeni Nesil Eğitim</Title>
        <Description>
          Başlangıç seviyesinden ileri düzeye kadar kapsamlı eğitimlerle 
          geleceğin siber güvenlik uzmanı olun.
        </Description>
        <CTAButton to="/#services">Eğitimleri Keşfet</CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 