import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAppContext from "./useAppContext";

export default function useAsyncStorageCRUD(){

    const {state:{toDoList} ,dispatch} = useAppContext();
    function toDoListChange(newList){
        dispatch({type:"TO_DO_LIST_CHANGE", toDoList:newList });
    }
    React.useEffect(()=>{AsyncStorage.getItem('todoList').then((savedToDoList)=>{
        if(savedToDoList){
            toDoListChange(JSON.parse(savedToDoList))
        }
    console.log(savedToDoList);
    });
    },[]);

    async function toDoCreate(toDo){
        const newToDoList = [...toDoList];
        newToDoList.push(toDo);
        await AsyncStorage.setItem("todolist",JSON.stringify(newToDoList));
        toDoListChange(newToDoList);
    }
    async function toDoDelete(index) {
        const newToDoList = [...toDoList];
        newToDoList.splice(index,1);
        newToDoList .push(toDo);
        await AsyncStorage.setItem("todolist",JSON.stringify(newToDoList));
        toDoListChange(newToDoList);
    }
    async function toDoUpdate(index,toDo) {
        const newToDoList = [...toDoList];
        newToDoList.splice(index,1, toDo);
        newToDoList .push(toDo);
        await AsyncStorage.setItem("todolist",JSON.stringify(newToDoList));
        toDoListChange(newToDoList);
    }
    return {toDoList,toDoCreate, toDoDelete, toDoUpdate};
}