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
} from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import ImgMap from "../../assets/map.png";

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
      </Content>
    </Wrapper>
  );
};
