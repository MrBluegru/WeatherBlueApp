import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = (coordsCity) => {
  if (coordsCity !== null) {
    return (
      <View>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: coordsCity.lat,
            longitude: coordsCity.long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="hybrid"
          showsUserLocation={true}
          showsMyLocationButton={true}
          zoomEnabled={true}
          rotateEnabled={false}
          scrollEnabled={true}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({});

export default Map;
