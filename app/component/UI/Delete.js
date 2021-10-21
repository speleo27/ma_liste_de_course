import React from "react";
import {StyleSheet,TouchableOpacity} from "react-native";
import Ionicons from"react-native-vector-icons/Ionicons";
import {View} from "react-native-web";

export default function Delete({onPress}){
    return(

            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Ionicons style={styles.icons} name="trash-outline" size={36} color="red" />
            </TouchableOpacity>

    );

}
const styles = StyleSheet.create({
    container: {
        width:40,
        height:40,
        borderWidth:1,
        borderRadius:4,
        borderColor:"red",
        alignItems:"center",
        justifyContent:"center"




    },
    icons:{

    }
});