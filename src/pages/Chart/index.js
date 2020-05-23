import React, { useState, useEffect } from "react";

import { SafeAreaView, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { useRoute } from "@react-navigation/native";

import styles from "./styles";

import api from "../../services/api";

export default Chart = () => {
  const route = useRoute();

  const [data, setData] = useState([]);

  const { userLocation } = route.params;
  const { latitude, longitude } = userLocation;
  const raio = 30;

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await api.get(
          `/rest/estabelecimentos/latitude/${latitude}/longitude/${longitude}/raio/${raio}`
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
        <MapView
          region={{
            ...userLocation,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}
          showsUserLocation
          style={styles.mapStyle}
        >
          <Marker 
            title="Você" 
            pinColor="#04D361" 
            coordinate={userLocation} 
          />

          {data.map((place) => {
            return (
              <Marker
                coordinate={{ latitude: place.lat, longitude: place.long }}
                title={place.nomeFantasia}
                description={place.turnoAtendimento}
                pinColor="#7159C1"
              />
            );
          })}
        </MapView>
      </SafeAreaView>
    </>
  );
};
