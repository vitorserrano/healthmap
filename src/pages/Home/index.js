import React from 'react';

import { 
  Wrapper,
  Container,
  Header,
  Logo, 
  LogoBold,
 } from './styles';
 
export default Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Logo> <LogoBold> health </LogoBold> map </Logo> 
        </Header>
      </Container>
    </Wrapper>
  );
};