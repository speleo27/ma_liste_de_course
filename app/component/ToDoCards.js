import React from "react";


import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

import Ionicons from"react-native-vector-icons/Ionicons";

import Delete from "./UI/Delete";
export default function ToDoCards({title, description, handleDelete,checked, handleCheckedChange}){

    return(
        <View style={styles.container1}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.checkBox} onPress={handleCheckedChange}>
                    {checked && <Ionicons name="checkmark" size={36} color="green"/>}
                </TouchableOpacity>
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
            <Delete onPress={handleDelete}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container1:{
        flexDirection:"row",
        marginRight:5,
    },
    container: {
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:"rgba(60,60,67,0.6)",
        width:"100%",
        paddingBottom:16,
        marginBottom:16,
       },
    checkBox:{
        width:40,
        height:40,
        marginRight:12,
        borderWidth:1,
        borderColor:"rgba(60,60,67,0.6)",
        borderRadius:4,
        justifyContent:"center",
        alignItems:"center",
    },
    content:{
        flexDirection:"row",
    },
    title:{
        fontWeight:"600",
        marginBottom:4,
        fontSize:18,
    },
    description:{color: "red", marginLeft:40, fontWeight:"600",fontSize:16},
    delete:{
        alignItems:"flex-end",
        justifyContent:"flex-end",
    },
    update:{
        color:"blue",
        fontSize:16,
        marginLeft:20,

    }

});