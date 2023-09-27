import { View, Text, Button, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { Link } from '@react-navigation/native';

export const FistPage = () => {
    return (
        <ImageBackground
            source={require('../../public/images/photo.jpg')}
            style={styles.background}
        >
            <View style={styles.container}>
                <View >
                    <Text style={styles.logo}>Welcome to Shop TienBlueJay!</Text>
                    <Text style={styles.h3}>A Hub Where Whispers Echo Loudest</Text>
                </View>
                <View style={styles.bottomContent}>
                    <View style={styles.buttomRow}>
                        <Link to="../login/signUp">
                            <Pressable>
                                <Button style={styles.button} title='Sign Up' />
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.areadyContent}>
                        <Text style={styles.textAlready}>Already have an account?</Text>
                        <Pressable style={styles.buttonText}>
                            <Text>Login</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        marginTop: 50,
        marginLeft: 10,
    },

    logo: {
        fontSize: 32,
        color: '#00ffff',
        fontWeight: 'bold',
    },

    h3: {
        marginTop: 10,
        fontSize: 20,
        color: 'black',
    },

    bottomContent: {
        position: 'absolute',
        marginBottom: '20%',
    },

    button: {

    },

    areadyContent: {
    }

})