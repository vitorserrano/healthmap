import React from "react";

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

import ButtonOptions from "../../components/ButtonOptions";

export default Home = () => {
  return (
    <Wrapper>
      <Container>
        <Navbar>
          <MaterialCommunityIcons name="hospital-marker" size={26} color="#fff" />
          <Logo> Healthmap </Logo>
        </Navbar>
        <Header>
          <Description>
            <DescriptionText> Encontre </DescriptionText>
            <DescriptionText> órgãos de sáude </DescriptionText>
            <DescriptionBold> próximos a você! </DescriptionBold>
          </Description>

          <Img source={ImgMap} />
        </Header>
      </Container>

      <Content>
        <Title> Órgãos de saúde </Title>

        <OptionGroup>
          <Option>
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
      </Content>
    </Wrapper>
  );
};
