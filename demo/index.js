import React from 'react';
import { View, Text, StyleSheet, AppRegistry } from 'react-native';


const HelloWorld = () => {
    return (
        <View style={style.container}>
            <Text style={style.hello}>This is Home Page</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    hello: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
});

AppRegistry.registerComponent(
    'MyReactNativeApp',
    () => HelloWorld,
);

export default HelloWorld;