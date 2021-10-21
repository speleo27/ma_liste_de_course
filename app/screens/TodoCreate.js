import React from "react";
import {StyleSheet, View,Text} from "react-native";

import Input from '@component/UI/Input';
import Button from '@component/UI/Button';
import useNewToDoManage from '@hook/useNewToDoManage';
import Title from "@component/UI/Title";

export default function TodoCreate({navigation}) {
    const {fieldsTab, handleSubmit} = useNewToDoManage();
    function handlePress(){
        navigation.navigate("Home")
    }
    return(
    <View style={styles.container} presentation="modal">
        <Title>Ajouter un produit </Title>
        {fieldsTab.map(({value, onChange, placeholder})=>{
            return(
            <Input key={placeholder}
            placeholder={placeholder}
            value={value}
            onChange={onChange}/>)
        })}
        <Button onPress={handleSubmit}>Ajouter un produit</Button>
    </View>)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:16,
        backgroundColor:"#f7f3e9"
    },
});