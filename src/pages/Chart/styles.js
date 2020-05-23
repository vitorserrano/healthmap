import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  mapStyle: {
    width: width,
    height: height,
  },
});

export default styles;
