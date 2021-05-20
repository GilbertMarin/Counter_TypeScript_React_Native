import React from 'react';
import { View, Text } from 'react-native';


export const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,     
            justifyContent: 'center'
          }}>
              <Text style={{fontSize: 45, 
                color: 'white',
                textAlign: 'center'}}>Hola Mundo!</Text>  
          </View>
    );
};
