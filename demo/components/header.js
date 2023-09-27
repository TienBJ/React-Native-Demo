import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const navigation = useNavigation();

    return (
        <NavigationContainer>
            <TouchableOpacity
                id="hamburger-icon"
                onPress={toggleMobileMenu}
            >
                <View style={styles.bar}></View>
                <View style={styles.bar}></View>
                <View style={styles.bar}></View>
            </TouchableOpacity>

            {menuVisible && (
                <View style={styles.mobileMenu}>
                    <TouchableOpacity>
                        <Button onPress={() => {
                            navigation.navigate('/demo')
                        }}>
                            Home
                        </Button>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Products</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Signup</Text>
                    </TouchableOpacity>
                </View>
            )}
        </NavigationContainer>
    );
};

const styles = {
    bar: {
        width: 20,
        height: 3,
        backgroundColor: 'black',
        marginVertical: 2,
    },
    mobileMenu: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 50,
        right: 10,
        padding: 10,
        zIndex: 1,
    },
};

export default Header;
