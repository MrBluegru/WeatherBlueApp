import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "../../styles/allDataCard.Styles";
import degreesToCardinal from "../../utils/degreesToCardinal";
import unixToTime from "../../utils/unixToTime";
import mpsToKph from "../../utils/mpsTokps";
import mtsToKm from "../../utils/mtsToKm";
import MapView from "react-native-maps";
import colorByTemp from "../../utils/colorsTemp";
import capitalizedWord from "../../utils/capitalizedWord";
import handlerLanguage from "../../utils/language";
import { useTheme } from "../../hooks/useTheme";

const AllDataCard = (props) => {
  const nA = handlerLanguage("na");
  const isDarkTheme = useTheme();
  const handlerTheme = isDarkTheme
    ? [styles.childContainer, styles.darkThemeChildCont]
    : [styles.childContainer, styles.lightThemeChildCont];
  const handlerSubtTextChild = isDarkTheme
    ? [styles.subTitle, styles.darkText]
    : [styles.subTitle, styles.lightText];
  const handlerTextChild = isDarkTheme ? [styles.darkText] : [styles.lightText];

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
      <View style={handlerTheme}>
        <View>
          <Text
            style={
              isDarkTheme
                ? [styles.title, styles.darkText]
                : [styles.title, styles.lightText]
            }
          >
            {props.name}, {props.country}
          </Text>
          <Text style={handlerTextChild}>{capitalizedWord(props.weather)}</Text>

          <Text style={handlerTextChild}>
            {handlerLanguage("clouds")} {props.clouds}%
          </Text>
          <Text style={handlerTextChild}>
            {handlerLanguage("humidity")} {props.humidity}%
          </Text>
          <Text style={handlerTextChild}>
            {handlerLanguage("feelsLike")} {props.feelsLike}ºC
          </Text>
        </View>

        <View style={{ position: "absolute", bottom: 1, right: 1 }}>
          <Image
            style={styles.icon}
            source={{
              uri: `http://openweathermap.org/img/wn/${props.img}@4x.png`,
            }}
          />
        </View>
      </View>

      <View>
        <View style={styles.subContainer}>
          <Text style={handlerSubtTextChild}>
            {handlerLanguage("temperature")}
          </Text>
        </View>
        <View style={handlerTheme}>
          <Text style={handlerSubtTextChild}>{handlerLanguage("minimal")}</Text>
          <Text style={handlerSubtTextChild}>{handlerLanguage("current")}</Text>
          <Text style={handlerSubtTextChild}>{handlerLanguage("maximum")}</Text>
        </View>
        <View style={handlerTheme}>
          <Text style={handlerTextChild}>{props.tempMin}ºC</Text>
          <Text style={handlerTextChild}>{props.temp}ºC</Text>
          <Text style={handlerTextChild}>{props.tempMax}ºC</Text>
        </View>
      </View>

      <View>
        <View style={styles.subContainer}>
          <Text style={handlerSubtTextChild}>
            {handlerLanguage("atmosphericTitle")}
          </Text>
        </View>
        <View style={handlerTheme}>
          <Text style={handlerSubtTextChild}>AMSL</Text>
          <Text style={handlerSubtTextChild}>{handlerLanguage("overall")}</Text>
          <Text style={handlerSubtTextChild}>AGL</Text>
        </View>
        <View style={handlerTheme}>
          <Text style={handlerTextChild}>
            {props.seaLevel ? `${props.seaLevel} /hPa` : nA}{" "}
          </Text>
          <Text style={handlerTextChild}>
            {props.pressure ? `${props.pressure} /hPa` : nA}{" "}
          </Text>
          <Text style={handlerTextChild}>
            {props.grndLevel ? `${props.grndLevel} /hPa` : nA}{" "}
          </Text>
        </View>
      </View>

      <View>
        <View style={styles.subContainer}>
          <Text style={handlerSubtTextChild}>{handlerLanguage("wind")}</Text>
        </View>
        <View style={handlerTheme}>
          <Text style={handlerSubtTextChild}>
            {handlerLanguage("visibility")}
          </Text>
          <Text style={handlerSubtTextChild}>
            {handlerLanguage("direction")}
          </Text>
          <Text style={handlerSubtTextChild}>{handlerLanguage("gusts")}</Text>
        </View>
        <View style={handlerTheme}>
          <Text style={handlerTextChild}>{mtsToKm(props.visibility)}</Text>
          <Text style={handlerTextChild}>
            {degreesToCardinal(props.windDeg)}
          </Text>
          <Text style={handlerTextChild}>{mpsToKph(props.windGust)}</Text>
        </View>
      </View>

      <View>
        <View style={handlerTheme}>
          <Text style={handlerSubtTextChild}>{handlerLanguage("sunrise")}</Text>
          <Text style={handlerSubtTextChild}>{handlerLanguage("sunset")}</Text>
        </View>
        <View style={handlerTheme}>
          <Text style={handlerSubtTextChild}>
            🌅 {unixToTime(props.sunrise)}
          </Text>
          <Text style={handlerSubtTextChild}>
            {" "}
            {unixToTime(props.sunset)} 🌇
          </Text>
        </View>
      </View>
      <View style={styles.containerMap}>{props !== null ? map() : null}</View>
      <View style={[handlerTheme, { justifyContent: "center" }]}>
        <Text style={handlerSubtTextChild}>
          {handlerLanguage("lastUpdate")} {unixToTime(props.timeDataUnix)}
        </Text>
      </View>
    </View>
  );
};

export default AllDataCard;
