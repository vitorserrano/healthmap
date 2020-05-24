import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  navBar: {
    position: "absolute",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 40,
    left: 20,
    right: 20,
    zIndex: 5,
    height: 50,
    backgroundColor: "#FFF",
    color: "#333",
    borderRadius: 25,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 3
  },

  category: {
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#666',
  },

  mapStyle: {
    width: width,
    height: height,
  },

  callout: {
    width: 350,
    paddingVertical: 5,
  },

  placeName: {
    color: '#333',
    fontWeight: 'bold',
  },

  placeAttendance: {
    color: '#666',
    marginTop: 2,
  },

  placeAdress: {
    marginTop: 10,
    flexDirection: 'row',
  },

  placeAdressTextBold: {
    color: '#333',
    fontWeight: 'bold',
  },

  placeAdressText: {
    color: '#333',
    marginLeft: 5,
    textTransform: 'capitalize',
  },

  placeTelephone: {
    marginTop: 5,
    flexDirection: 'row',
  },

  placeTelephoneTextBold: {
    color: '#333',
    fontWeight: 'bold',
  },

  placeTelephoneText: {
    color: '#333',
    marginLeft: 5,
  },

});

export default styles;
