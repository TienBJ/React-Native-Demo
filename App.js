import React, { useState, useEffect } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORS from './src/constants/colors';
import Button from './src/components/Button';
import { GrSettingsOption } from 'react-icons/gr'

const Stack = createNativeStackNavigator();
const API_PRODUCTS = 'https://63a571e42a73744b008e23ee.mockapi.io/products';

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='SignIn' component={SignIn} />
                <Stack.Screen name='SignUp' component={SigUp} />
                <Stack.Screen name='FlashCardApp' component={FlashCardApp} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

const Home = ({ navigation }) => {
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("./public/images/hero1.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("./public/images/hero3.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: -30,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("./public/images/hero1.jpg")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -50,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("./public/images/hero2.jpg")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                </View>

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Let's Get</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Started</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            marginVertical: 4
                        }}>Connect with each other with chatting</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                        }}>Calling, Enjoy Safe and private texting</Text>
                    </View>

                    <Button
                        title="Sign Up"
                        onPress={() => navigation.navigate("FlashCardApp")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("SignIn")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

const SigUp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textSignUp}>SignUp now!</Text>
            <Pressable style={styles.buttonGoogle}>
                <Image source={require('./public/images/google.png')}
                    style={{
                        width: 20,
                        height: 20,
                    }} />
                <Text style={styles.textButtonGoogle}>
                    Sign Up with Google
                </Text>
            </Pressable>
            <Text>Or continue with Email</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
            /><TextInput
                style={styles.input}
                placeholder='Enter username'
            /><TextInput
                style={styles.input}
                placeholder='Enter email'
            /><TextInput
                style={styles.input}
                placeholder='Enter password'
            />
            <TouchableOpacity>
                <Text style={styles.buttonCreateAccount}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const SignIn = ({ navigation }) => {
    return (
        <View>
            <Text>Sign Page</Text>
            <View>
                <Text>Don't have account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const FlashCardApp = () => {

    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch(API_PRODUCTS)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < products.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const currentProduct = products[currentIndex];

    return (

        <View style={styles.container}>
            <View style={styles.quantityProduct}>
                <Text>Play ({products.length}) Cards</Text>
            </View>
            <View style={styles.cardProduct}>
                {currentProduct ? (
                    <>
                        <Image source={{ uri: currentProduct.image }} style={styles.productImage} />
                    </>
                ) : null}
            </View>
            <View style={styles.actionProduct}>
                <Pressable style={styles.actionButton} onPress={handlePrevious}>
                    <Text style={styles.textButtonAction}>Previous</Text>
                </Pressable>
                <Pressable style={styles.actionButton} onPress={handleNext}>
                    <Text style={styles.textButtonAction}>Next</Text>
                </Pressable>
            </View>
            <View style={styles.centerAction}>
                <Pressable style={styles.acctionCenter}>
                    <Text style={styles.textCenter}>Remove From Deck</Text>
                </Pressable>
                <Pressable style={styles.acctionCenter}>
                    <Text style={styles.textCenter}>Reset Deck</Text>
                </Pressable>
            </View>
            <View style={styles.bottomAction}>
                <Pressable>
                    
                    <Text>Play</Text>
                </Pressable>
                <Pressable>
                    {/*<GrSettingsOption/>*/}
                    <Text>Setting</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#d8bfd8',
    },

    buttonGoogle: {
        flexDirection: 'row',
        backgroundColor: 'black',
        width: '70%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        gap: 10,
    },

    textButtonGoogle: {
        color: 'white',
    },

    textSignUp: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
    },

    input: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    quantityProduct: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    cardProduct: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImage: {
        width: 300,
        height: 340,
        resizeMode: 'cover',
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
    },
    actionProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    actionButton: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        width: '35%',
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#4682b4',
    },
    textButtonAction: {
        color: '#40e0d0',
        fontWeight: 'bold',
        fontSize: 16,
    },
    centerAction: {
        flexDirection: 'row',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    acctionCenter: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#FFF',
        height: 35,
        borderRadius: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCenter: {
        color: '#ff0000',
    },
    bottomAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff5ee',
        position: 'absolute',
        paddingBottom: '0%',
    },
})

