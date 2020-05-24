import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { AntDesign } from "@expo/vector-icons";
import { ButtonBack } from './styles';

export default NavigateToBack =() => {
  const navigation = useNavigation();

  const navigateToBack = () => {
    navigation.goBack();
  }

  return (
    <>
      <ButtonBack onPress={navigateToBack}>
        <AntDesign name="arrowleft" size={28} color="#04D361" />
      </ButtonBack>
    </>
  );
};