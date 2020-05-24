import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.ScrollView`
  padding: 40px 20px;
`;

export const Navbar = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  padding: 20px 0;
`;

export const BadgeGroup = styled.View`
  flex-direction: row;
`;

export const Badge = styled.View`
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #7159C1;
  margin-right: 10px;
`;

export const BadgeText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-top: 20px;
`;

export const Attendance = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  color: #666;
`;

export const Card = styled.ScrollView`
  margin-top: 30px;
  margin-bottom: 60px;
  padding: 20px;
  background: #fff;
`;

export const CardGroup = styled.View`
  padding: 6px 0; 
`;

export const CardTextBold = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const CardText = styled.Text`
  color: #333;
  margin-top: 5px;
  text-transform: capitalize;
`;
