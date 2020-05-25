import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

import NavigateToBack from '../../components/NavigateToBack';

export default Chart = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [data, setData] = useState([]);

  const { userLocation, category, icon } = route.params;
  const { latitude, longitude } = userLocation;
  const raio = 30;

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await api.get(
          `/rest/estabelecimentos/latitude/${latitude}/longitude/${longitude}/raio/${raio}?categoria=${category}`
        );

        setData(response.data);
      } catch (error) {
        alert(error.message);
      }
    };

    loadData();
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor="#7159C1"
        translucent
        barStyle="ligh-content"
      />

      <SafeAreaView style={styles.wrapper}>

        <View style={styles.navBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <NavigateToBack />
            <Text style={styles.category}>{category}</Text>
          </View>

          <MaterialCommunityIcons name={icon} size={28} color="#04D361" />
        </View>
        
        <MapView
          region={{
            ...userLocation,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation
          style={styles.mapStyle}
        >
          <Marker 
            title="Você" 
            pinColor="#7159C1" 
            coordinate={userLocation} 
          />

          {data.map((place) => {
            return (
              <Marker
                key={place.codUnidade}
                coordinate={{ latitude: place.lat, longitude: place.long }}
                pinColor="#04D361"
              >
              <Callout onPress={() =>  {
                navigation.navigate('Detail', { place: place });
              }}
              >
                <View style={styles.callout}>
                  <Text style={styles.placeName}>{place.nomeFantasia}</Text>
                  <Text style={styles.placeAttendance}>{place.turnoAtendimento}</Text>
                  
                  <View style={styles.placeAdress}>
                    <Text style={styles.placeAdressTextBold}>Endereço: </Text>
                    <Text style={styles.placeAdressText}>{`${place.logradouro}, ${place.numero}`}</Text>
                  </View>

                  <View style={styles.placeTelephone}>
                    <Text style={styles.placeTelephoneTextBold}>Telefone: </Text>
                    <Text style={styles.placeTelephoneText}>{place.telefone}</Text>
                  </View>
                </View>
              </Callout>
              
              </Marker>
            );
          })}
        </MapView>
      </SafeAreaView>
    </>
  );
};
