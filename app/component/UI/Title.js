import React from "react";


import {StyleSheet,  Text, TouchableOpacity} from "react-native";


export default function Title({children}){

    return(

            <Text style = {styles.title}>{children}</Text>
     )

}
const styles = StyleSheet.create({

    title:{fontWeight:"600",
    fontSize:32,
    marginBottom:42,}
});