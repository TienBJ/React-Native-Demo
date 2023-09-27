import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

export const SignUp = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        console.log(`${name} was SignUp ourPage!`);
    }

    return (
        <View style={styles.container}>
            <Text>Sign Up to connect with us!</Text>
            <TouchableOpacity style={styles.button}>
                <Button
                    title='Sign Up with Google'
                    onPress={() => {
                        // Handle Google sign-up here
                    }}
                />
            </TouchableOpacity>
            <Text style={styles.h5}>Or connect with email</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your name'
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter your userName'
                    onChangeText={text => setUserName(text)}
                    value={userName}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter your email'
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter your password'
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true} // To invisible pass
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },

    button: {
        marginTop: 20,
    },

    h5: {
        marginTop: 20,
        marginBottom: 10,
    },

    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
});

