import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLaptopCode, faBrain } from '@fortawesome/free-solid-svg-icons';

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  color: ${props => props.theme.textColor};
  margin-bottom: 3rem;
`;

const ServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto;
`;

const ServiceCard = styled.div`
  background-color: ${props => props.theme.cardBg};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: ${props => props.theme.secondaryColor};
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: ${props => props.theme.textColor};
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: ${props => props.theme.textColor};
  margin-bottom: 1.5rem;
`;

const DetailsButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: ${props => props.theme.secondaryColor};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.primaryColor};
  }
`;

const Services = () => {
  const services = [
    {
      icon: faShieldAlt,
      title: 'Temel Seviye',
      description: 'Siber güvenliğin temellerini öğrenin ve kariyerinize sağlam bir başlangıç yapın.'
    },
    {
      icon: faLaptopCode,
      title: 'Simülasyon Eğitimi',
      description: 'Gerçek dünya senaryolarıyla pratik yapın ve deneyim kazanın.'
    },
    {
      icon: faBrain,
      title: 'İleri Seviye',
      description: 'Uzmanlaşın ve profesyonel siber güvenlik kariyerinizi oluşturun.'
    }
  ];

  const handleDetails = () => {
    alert('Eğitim detayları yakında eklenecek!');
  };

  return (
    <ServicesSection id="services">
      <Title>Eğitim Programlarımız</Title>
      <ServiceCards>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <Icon icon={service.icon} />
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
            <DetailsButton onClick={handleDetails}>Detaylar</DetailsButton>
          </ServiceCard>
        ))}
      </ServiceCards>
    </ServicesSection>
  );
};

export default Services; 