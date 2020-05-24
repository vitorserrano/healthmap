import React from "react";

import { useRoute } from "@react-navigation/native";

import {
  Wrapper,
  Container,
  Navbar,
  Content,
  BadgeGroup,
  Badge,
  BadgeText,
  Title,
  Attendance,
  Card,
  CardGroup,
  CardTextBold,
  CardText,
} from "./styles";

import NavigateToBack from "../../components/NavigateToBack";

export default Detail = () => {
  const route = useRoute();

  const { place } = route.params;

  return (
    <Wrapper>
      <Container>
        <Navbar>
          <NavigateToBack />
        </Navbar>

        <Content>
          <BadgeGroup>
            <Badge>
              <BadgeText>{place.categoriaUnidade}</BadgeText>
            </Badge>

            <Badge>
              <BadgeText>{`${place.cidade} / ${place.uf}`}</BadgeText>
            </Badge>
          </BadgeGroup>

          <Title>{place.nomeFantasia}</Title>
          <Attendance>{place.turnoAtendimento}</Attendance>

          <Card>
            <CardGroup>
                <CardTextBold>Endereço</CardTextBold>
              <CardText>{`${place.logradouro}, ${place.numero} - ${place.bairro}`}</CardText>
            </CardGroup>

            <CardGroup>
              <CardTextBold>Telefone</CardTextBold>
              <CardText>{place.telefone}</CardText>
            </CardGroup>

            <CardGroup>
              <CardTextBold>SUS</CardTextBold>
              <CardText>{place.vinculoSus}</CardText>
            </CardGroup>

            <CardGroup>
              <CardTextBold>Esfera Administrativa</CardTextBold>
              <CardText>{place.esferaAdministrativa}</CardText>
            </CardGroup>

            <CardGroup>
              <CardTextBold>Descrição Completa</CardTextBold>
              <CardText>{place.descricaoCompleta}</CardText>
            </CardGroup>
          </Card>
        </Content>
      </Container>
    </Wrapper>
  );
};
