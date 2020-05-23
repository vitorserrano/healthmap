import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #7159C1;
`;

export const Container = styled.ScrollView`
  padding: 40px 20px;
`;

export const Navbar = styled.View`
  flex-direction: row;
  align-items: center;
  background: #664fb3;
  padding: 8px 0px;
  width: 180px;
  justify-content: center;
  border-radius: 20px;
`;

export const Logo = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-left: 8px;
`;

export const Header = styled.View`
  padding: 60px 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.View``;

export const DescriptionText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;

export const DescriptionBold = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #04D361;
`;

export const Img = styled.Image.attrs(() => ({
  resizeMode: "contain",
}))`
  width: 120px;
  height: 120px;
`;

export const Content = styled.View`
  padding: 30px 30px;
  background: #fff;
  height: 500px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #333;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
`;

export const OptionGroup = styled.View``;

export const Option = styled.TouchableOpacity`
  background: #7159C1;
  padding: 25px 20px;
  margin-top: 30px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OptionInfo = styled.View`
  flex-direction: row;
`;

export const OptionText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
`;