import React from 'react'
import { StyleSheet, Dimensions, StatusBar, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/stack';

import cartLogin from '../../../assets/cart-login.png'

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width

export default function Login() {

    const navigation = useNavigation<StackTypes>();

    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.containerLogo}>
                <Text style={styles.title}>MARKET</Text>

                <Image source={cartLogin} />
            </View>

            <View style={styles.containerForm}>
                <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'#B5B2A2'} />

                <TextInput style={styles.input} placeholder='Password' placeholderTextColor={'#B5B2A2'} />

                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.textButton}>Log In</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 200,
        flexDirection: 'column',
        height: height,
        width: width,
        backgroundColor: '#EAEBEC',
        gap: 30
    },
    title: {
        fontSize: 40,
        fontWeight: '800'
    },
    input: {
        width: 320,
        height: 56,
        borderRadius: 30,
        backgroundColor: '#F5DF9F',
        fontSize: 24,
        paddingLeft: 15
    },
    colorPlace: {
        color: '#B5B2A2'
    },
    containerForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30
    },
    containerLogo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    buttonLogin: {
        display: 'flex',
        justifyContent: 'center',
        width: 322,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#FFD634',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 1.00,

        elevation: 12,
    },
    textButton: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center'
    }
})