import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${props => props.theme.bgColor};
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.textColor};
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  i {
    font-size: 1.5rem;
    color: ${props => props.theme.secondaryColor};
  }
`;

const InfoIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.secondaryColor};
  font-size: 1.5rem;
`;

const InfoContent = styled.div`
  h3 {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.textColor};
  }

  p {
    color: ${props => props.theme.textColor};
  }
`;

const ContactForm = styled.form`
  background-color: ${props => props.theme.cardBg};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 2rem;

  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      border-color: ${props => props.theme.secondaryColor};
      outline: none;
    }

    &:focus + label,
    &:valid + label {
      top: -0.5rem;
      left: 0.5rem;
      font-size: 0.8rem;
      background-color: ${props => props.theme.bgColor};
      padding: 0 0.5rem;
      color: ${props => props.theme.secondaryColor};
    }
  }

  textarea {
    height: 150px;
    resize: none;
  }

  label {
    position: absolute;
    left: 1rem;
    top: 0.8rem;
    color: #666;
    transition: all 0.3s ease;
    pointer-events: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${props => props.theme.secondaryColor};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.primaryColor};
  }
`;

const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 450px;
    border: 0;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <ContactSection id="contact">
      <Title>İletişime Geçin</Title>
      <ContactContainer>
        <ContactInfo>
          <InfoItem>
            <InfoIcon icon={faMapMarkerAlt} />
            <InfoContent>
              <h3>Adres</h3>
              <p>Teknoloji Caddesi No:123</p>
              <p>İstanbul, Türkiye</p>
            </InfoContent>
          </InfoItem>
          <InfoItem>
            <InfoIcon icon={faPhone} />
            <InfoContent>
              <h3>Telefon</h3>
              <p>+90 (212) 555 0123</p>
            </InfoContent>
          </InfoItem>
          <InfoItem>
            <InfoIcon icon={faEnvelope} />
            <InfoContent>
              <h3>E-posta</h3>
              <p>info@cybersen.com</p>
            </InfoContent>
          </InfoItem>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="name">Adınız</label>
          </FormGroup>
          <FormGroup>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">E-posta Adresiniz</label>
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <label htmlFor="subject">Konu</label>
          </FormGroup>
          <FormGroup>
            <textarea
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <label htmlFor="message">Mesajınız</label>
          </FormGroup>
          <SubmitButton type="submit">Gönder</SubmitButton>
        </ContactForm>
      </ContactContainer>

      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.6203914633!2d28.847223!3d41.015137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1648226144574!5m2!1str!2str"
          title="Google Maps"
          allowFullScreen=""
          loading="lazy"
        />
      </MapContainer>
    </ContactSection>
  );
};

export default Contact; 