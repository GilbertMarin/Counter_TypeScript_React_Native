/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Fab } from '../Components/Fab';

export const CounterScreen = () => {
    const [contador, setContador] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{contador}</Text>

            <Fab
            title = "+1"
            onPress={()=>setContador(contador + 1)}/>

            <Fab
            title = "-1"
            position="bl"
            onPress={()=>setContador(contador - 1)}/>   

        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }, 
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
        top: -15
    }, 
})