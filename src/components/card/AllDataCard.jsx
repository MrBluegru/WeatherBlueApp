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
import handlerLanguage from "../../utils/language";

const AllDataCard = (props) => {
  const nA = handlerLanguage("na");
  
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
          <Text style={styles.title}>
            {props.name}, {props.country}
          </Text>
          <Text>{capitalizedWord(props.weather)}</Text>

          <Text>
            {handlerLanguage("feelsLike")} {props.feelsLike}ºC
          </Text>
          <Text>
            {handlerLanguage("humidity")} {props.humidity}%
          </Text>
          <Text>
            {handlerLanguage("clouds")} {props.clouds}%
          </Text>
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
          <Text style={styles.subTitle}>{handlerLanguage("temperature")}</Text>
        </View>
        <View style={styles.childContainers}>
          <Text>{handlerLanguage("minimal")}</Text>
          <Text>{handlerLanguage("current")}</Text>
          <Text>{handlerLanguage("maximum")}</Text>
        </View>
        <View style={styles.childContainers}>
          <Text>{props.tempMin}ºC</Text>
          <Text>{props.temp}ºC</Text>
          <Text>{props.tempMax}ºC</Text>
        </View>
      </View>

      <View>
        <View style={styles.viewSubtitle}>
          <Text style={styles.subTitle}>
            {handlerLanguage("atmosphericTitle")}
          </Text>
        </View>
        <View style={styles.childContainers}>
          <Text>{handlerLanguage("aboveSeaL")}</Text>
          <Text>{handlerLanguage("overall")}</Text>
          <Text>{handlerLanguage("atGroundL")}</Text>
        </View>
        <View style={styles.childContainers}>
          <Text>{props.seaLevel ? `${props.seaLevel} /hPa` : nA} </Text>
          <Text>{props.pressure ? `${props.pressure} /hPa` : nA} </Text>
          <Text>{props.grndLevel ? `${props.grndLevel} /hPa` : nA} </Text>
        </View>
      </View>

      <View>
        <View style={styles.viewSubtitle}>
          <Text style={styles.subTitle}>{handlerLanguage("wind")}</Text>
        </View>
        <View style={styles.childContainers}>
          <Text>{handlerLanguage("visibility")}</Text>
          <Text>{handlerLanguage("direction")}</Text>
          <Text>{handlerLanguage("gusts")}</Text>
        </View>
        <View style={styles.childContainers}>
          <Text>{mtsToKm(props.visibility)}</Text>
          <Text>{degreesToCardinal(props.windDeg)}</Text>
          <Text>{mpsToKph(props.windGust)}</Text>
        </View>
      </View>

      <View style={styles.childContainers}>
        <Text>
          {handlerLanguage("sunrise")}: {unixToTime(props.sunrise)}
        </Text>
        <Text>
          {handlerLanguage("sunset")}: {unixToTime(props.sunset)}
        </Text>
      </View>
      <View style={styles.containerMap}>{props !== null ? map() : null}</View>
      <View style={styles.childContainers}>
        <Text style={styles.normalTextI}>
          {handlerLanguage("lastUpdate")} {unixToTime(props.timeDataUnix)}
        </Text>
      </View>
    </View>
  );
};

export default AllDataCard;
