import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../styles/allDataCard.Styles";
import degreesToCardinal from "../../utils/degreesToCardinal";
import unixToTime from "../../utils/unixToTime";
import mpsToKph from "../../utils/mpsTokps";
import mtsToKm from "../../utils/mtsToKm";
import MapView from "react-native-maps";
import colorByTemp from "../../utils/colorsTemp";
import capitalizedWord from "../../utils/capitalizedWord";

const AllDataCard = (props) => {
  const map = () => {
    return (
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: props.lat,
          longitude: props.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="hybrid"
        showsUserLocation={true}
        showsMyLocationButton={false}
        zoomEnabled={false}
        rotateEnabled={false}
        scrollEnabled={false}
      />
    );
  };
  
  return (
    <View
      style={[
        styles.containerCenter,
        { backgroundColor: colorByTemp(props.temp) },
      ]}
    >
      <View style={styles.childContainers}>
        <View>
          <Text style={styles.title}>{props.name}, {props.country}</Text>
          <Text>{capitalizedWord(props.weather)}</Text>
          <Text>Current {props.temp}ºC</Text>
          <Text>Feels Like {props.feelsLike}ºC</Text>
          <Text>Humidity {props.humidity}%</Text>
          <Text>Cloudiness {props.clouds}%</Text>
        </View>

        <View>
          <Image
            style={styles.icon}
            source={{
              uri: `http://openweathermap.org/img/wn/${props.img}@4x.png`,
            }}
          />
        </View>
      </View>

      <View>
        <View style={styles.viewSubtitle}>
          <Text style={styles.subTitle}>Temperature</Text>
        </View>
        <View style={styles.childContainers}>
          <Text>Minimal</Text>
          <Text>Maximum</Text>
        </View>
        <View style={styles.childContainers}>
          <Text>{props.tempMin}ºC</Text>
          <Text>{props.tempMax}ºC</Text>
        </View>
      </View>

      <View>
        <View style={styles.viewSubtitle}>
          <Text style={styles.subTitle}>Atmospheric pressure</Text>
        </View>
        <View style={styles.childContainers}>
          <Text>Above sea level</Text>
          <Text>⬇</Text>
          <Text>At ground level</Text>
        </View>
        <View style={styles.childContainers}>
          <Text>{props.seaLevel} /hPa</Text>
          <Text>{props.pressure} /hPa</Text>
          <Text>{props.grndLevel} /hPa</Text>
        </View>
      </View>

      <View>
        <View style={styles.viewSubtitle}>
          <Text style={styles.subTitle}>Wind</Text>
        </View>
        <View style={styles.childContainers}>
          <Text>Visibility</Text>
          <Text>Direction</Text>
          <Text>Gusts</Text>
        </View>
        <View style={styles.childContainers}>
          <Text>{mtsToKm(props.visibility)}</Text>
          <Text>{degreesToCardinal(props.windDeg)}</Text>
          <Text>{mpsToKph(props.windGust)}</Text>
        </View>
      </View>

      <View style={styles.childContainers}>
        <Text>Sunrise: {unixToTime(props.sunrise)}</Text>
        <Text>Sunset: {unixToTime(props.sunset)}</Text>
      </View>
      <View style={styles.containerMap}>{props !== null ? map() : null}</View>
      <View style={styles.childContainers}>
        <Text style={styles.normalTextI}>
          Last update {unixToTime(props.timeDataUnix)}
        </Text>
      </View>
    </View>
  );
};

export default AllDataCard;
