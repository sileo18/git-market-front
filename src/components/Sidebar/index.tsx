import React from 'react'
import { StyleSheet, SafeAreaView, Image, Dimensions, StatusBar, View, Text, TouchableOpacity } from 'react-native'


import logo from '../../../assets/logo.png'
import configurationIcon from '../../../assets/ConfigurationIcon.png'
import BackgroundItemEnd from './BackgroundsEnd';
import BackgroundItemCenter from './BackgroundCenter';
import Icons from '../Icon';



const height = Dimensions.get('screen').height;



export default function Sidebar() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={logo} />
            <View style={styles.containerItems}>
                <BackgroundItemEnd nameIcon={'user-alt'} />
                <BackgroundItemEnd nameIcon={'user-friends'} />
                <BackgroundItemCenter nameIcon={'plus'} />
            </View>
            <TouchableOpacity activeOpacity={.5}>
                <Icons name='wrench' />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 105,
        height: height,
        backgroundColor: '#FFD634',
        // alignSelf: 'flex-start',
        paddingVertical: 35
    },
    image: {
        width: 40,
        height: 38
    },
    configurationIcon: {
        width: 41,
        height: 41
    },
    containerItems: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 35,
        marginTop: -100
    }
})