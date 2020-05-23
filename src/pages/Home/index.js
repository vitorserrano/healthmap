import React, { useState, useEffect } from "react";

import * as Location from 'expo-location';

import { useNavigation } from '@react-navigation/native';

import {
  Wrapper,
  Container,
  Navbar,
  Logo,
  Header,
  Description,
  DescriptionText,
  DescriptionBold,
  Img,
  Content,
  Title,
  Subtitle,
  OptionGroup,
  Option,
  OptionInfo,
  OptionText,
} from "./styles";

import {
  MaterialCommunityIcons,
  Fontisto,
  AntDesign,
} from "@expo/vector-icons";

import ImgMap from "../../assets/map.png";

export default Home = () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState(null);
  const [message, setMessage] = useState('Carregando...');

  useEffect(() => {
    const getPosition = async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        setMessage('O usuário não autorizou o uso da geolocalização');
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      
      setMessage(JSON.stringify(location, null, 4));
      setLocation(location.coords);
    }

    getPosition();
  }, [])

  const navigateToHospital = () => {
    navigation.navigate('Chart', { userLocation: location });
  };

  return (
    <Wrapper>
      <Container>
        <Navbar>
          <MaterialCommunityIcons name="hospital-marker" size={26} color="#fff" />
          <Logo>Healthmap</Logo>
        </Navbar>
        <Header>
          <Description>
            <DescriptionText>Encontre</DescriptionText>
            <DescriptionText>órgãos de sáude</DescriptionText>
            <DescriptionBold>próximos a você!</DescriptionBold>
          </Description>

          <Img source={ImgMap} />
        </Header>
      </Container>

      <Content>
        
        {!location && (
          <>
          <Subtitle>{message}</Subtitle>
          </>
        )}

        {location && (
          <>
            <Title>Órgãos de saúde</Title>
            <Subtitle>Escolha um dos órgãos abaixo e veja os próximos a você.</Subtitle>
    
            <OptionGroup>
              <Option onPress={navigateToHospital}>
                <OptionInfo>
                  <MaterialCommunityIcons name="hospital-building" size={28} color="#fff" />
                  <OptionText> Hospitais </OptionText>
                </OptionInfo>
                <AntDesign name="arrowright" size={28} color="#04D361" />
              </Option>
    
              <Option>
                <OptionInfo>
                  <Fontisto name="injection-syringe" size={28} color="#fff" />
                  <OptionText> Postos de saúde </OptionText>
                </OptionInfo>
                <AntDesign name="arrowright" size={28} color="#04D361" />
              </Option>
    
              <Option>
                <OptionInfo>
                  <MaterialCommunityIcons name="ambulance" size={28} color="#fff" />
                  <OptionText> SAMU </OptionText>
                </OptionInfo>
                <AntDesign name="arrowright" size={28} color="#04D361" />
              </Option>
            </OptionGroup>
          </>
        )}
      </Content>
    </Wrapper>
  );
};
