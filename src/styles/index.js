// src/styles/principalStyles

import { StyleSheet } from 'react-native';

const Colors = {
  color1: '#00783e',
  color2: '#368f3f',
  color3: '#00b44f',
  color4: '#82bc00',
  gray: '#3c3c3b',
  red: '#F55E64',
  white: '#ffffff',
  white1: '#E6E6EA',
  darker: '#3c3c3b',
  lighter: '#E6E6EA',
  background: '#3c3c3b',
};

const PrincipalStyles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center'
  },
  header: {
    height: 60,
    backgroundColor: Colors.color2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: null,
    resizeMode: 'contain',
    height: 300
  },
  title1: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.gray
  },
  title2: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.gray
  },
  title3: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.gray
  },
  inputContainerLogin: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      minHeight: 50,
      flexDirection: "row"
  },
  inputContainerButton: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    flexDirection: "row"
  },
  inputContainerForm: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      minHeight: 50,
      flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  modalView: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

export { PrincipalStyles, Colors };
