import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import{createStackNavigator} from "@react-navigation/stack";
import Home from "@screens/Home";
import TodoCreate from "@screens/TodoCreate";

export default function Navigation(){
    const RootStack= createStackNavigator();
return <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="Ma Liste de courses" component={Home}/>
                <RootStack.Screen name="Ajouter un article " component={TodoCreate}/>
            </RootStack.Navigator>

       </NavigationContainer>;
}