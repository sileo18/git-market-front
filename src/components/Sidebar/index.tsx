import { StyleSheet, SafeAreaView, Image, Dimensions, StatusBar, View, Text } from 'react-native'
import React from 'react'

import logo from '../../../assets/logo.png'
import configurationIcon from '../../../assets/ConfigurationIcon.png'
import BackgroundItemEnd from './BackgroundsEnd';
import BackgroundItemCenter from './BackgroundCenter';
import personIcon from '../../../assets/person.png'
import peopleIcon from '../../../assets/people.png'
import plusIcon from '../../../assets/plus.png'

const height = Dimensions.get('screen').height;



export default function Sidebar() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Image style={styles.image} source={logo} />
            <View style={styles.containerItems}>
                <BackgroundItemEnd Icon={personIcon} />
                <BackgroundItemEnd Icon={peopleIcon} />
                <BackgroundItemCenter Icon={plusIcon} />
                

            </View>
            <Image style={styles.configurationIcon} source={configurationIcon} />
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
        alignSelf: 'flex-start',
        paddingVertical: 35
    },
    image: {
        width: 36,
        height: 35
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