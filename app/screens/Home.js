import React from "react";


import {StyleSheet, View,Text} from "react-native";
import Button from "@component/UI/Button";
import useAsyncStorageCRUD from "@hook/useAsyncStorageCRUD";
export default function Home({navigation}){
    const {toDoList} = useAsyncStorageCRUD();
    function handlePress(){
        navigation.navigate("Ajouter un article ")    }
    return(
    <View style={styles.container}>
        {toDoList.map(({title, description},index)=>{
            return (
                <View key={index}>
                    <Text>{title}</Text>
                    <Text>{description}</Text>
                </View>
            );
        })}
        <Button onPress={handlePress}>+ Ajouter un produit a la liste</Button>
    </View>)

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:16,
    },
});