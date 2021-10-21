import React from "react";


import {StyleSheet, } from "react-native";
import Button from "@component/UI/Button";
import useAsyncStorageCRUD from "@hook/useAsyncStorageCRUD";

import ToDoCards from "@component/ToDoCards";
import Title from "@component/UI/Title";
import {ScrollView} from "react-native-gesture-handler";

export default function Home({navigation}){
    const {toDoList, toDoDelete,toDoUpdate} = useAsyncStorageCRUD();
    function handlePress(){
        navigation.navigate("Ajouter un article ")    }
    return(
       
    <ScrollView contentContainerStyle={styles.container}>
        <Title>Ma liste de course</Title>
        {toDoList.map(({title, description,checked},index)=>{
            function handleDelete(){
                toDoDelete(index);
            }
            function handleCheckedChange(){
                toDoUpdate(index,{title,description, checked:!checked});
            }
            return (
                <ToDoCards
                    key={index}
                    title={title}
                    description={description}
                    checked={checked}
                    handleDelete={handleDelete}
                    handleCheckedChange={handleCheckedChange}
                />

            );
        })}
        <Button onPress={handlePress}>+ Ajouter un produit a la liste</Button>
    </ScrollView>)

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