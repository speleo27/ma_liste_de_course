import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from "@component/Hello"
import Navigation from "@navigation/Navigation";
import{AppStateProvider} from "./app/state/AppContext";



export default function App() {
 Hello();
  return (

    <AppStateProvider>
        <Navigation/>
    </AppStateProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
