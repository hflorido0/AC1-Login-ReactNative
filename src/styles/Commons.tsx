import {StyleSheet} from "react-native";

const Commons = StyleSheet.create({
    mainColor: {
        backgroundColor: "coral",
    },
    secondaryColor: {
        backgroundColor: "lightgreen",
    },
    thirdColor: {
        backgroundColor: "light",
    },
    mainTextColor: {
        color: "orange",
    },
    secondaryTextColor: {
        color: "green",
    },
    filex1: {
        flex:1, 
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
      flex: 1,  
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
        width: 150,
        height: 150,
    },
    flexDirectionColumn: {
        flexDirection: "column"
    },
    input: {
        height: 40,
        width: 260,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
  });
  
  export default Commons;