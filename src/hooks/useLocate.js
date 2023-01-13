import { useState, useEffect } from "react";
import * as Location from "expo-location";

const useLocate = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const locate = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    } else {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }
  };

  useEffect(() => {
    locate();
  }, []);

  return { location: location };
};

export default useLocate;
