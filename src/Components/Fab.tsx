/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

interface Props {
    // eslint-disable-next-line prettier/prettier
    title: string, 
    position?: 'br' | 'bl',
    onPress: () => void
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {

    const ios = ()=> {
        return (
            <TouchableOpacity
            onPress={onPress}
            activeOpacity={ 0.8 }
            style={(position === 'bl')
                    ? styles.fabLocationBL
                    : styles.fabLocationBR}>
                    <View
                    style={styles.fab}
                    >
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
       
                
                </TouchableOpacity>
            
        );
    }

    const android = ()=>{
        return (
            <View
            style={(position === 'bl')
                    ? styles.fabLocationBL
                    : styles.fabLocationBR}>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('black', false, 30)}
                >
                    <View
                    style={styles.fab}
                    >
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
                
            </View>
            
        );
    }

    return (Platform.OS === 'ios')? ios() : android();
    
};


const styles = StyleSheet.create({
    fabLocationBR:{
        position: 'absolute',
        bottom: 25,
        right: 25 

    },
    fabLocationBL:{
        position: 'absolute',
        bottom: 25,
        left: 25 

    },
    fab:{
        backgroundColor: '#5856D6', 
        width: 60, 
        height: 60, 
        borderRadius: 100, 
        justifyContent:'center',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
    }, 
    fabText: {
        color: 'white', 
        fontSize:25, 
        fontWeight: 'bold', 
        alignSelf:'center'

    }
});