import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from '../../../components/Icon'

const width = Dimensions.get('screen').width

interface props {
    name: string
}

export default function FriendContainer({ name }: props) {
    return (
        <View style={styles.containerAll}>
            <View style={styles.containerUserInfo}>
                <View style={styles.userWindow}></View>
                <Text style={styles.userName}>{name}</Text>
            </View>
            <TouchableOpacity activeOpacity={.5} style={styles.icon}>
                <Icons  name='ellipsis-v' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({ 
    containerAll: {
        display: 'flex',
        flexDirection: 'row',
        width: width,
        paddingHorizontal: 50,
        paddingVertical: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',        
        borderWidth: 1,
        borderColor: '#000000'
    },
    userWindow: {
        width: 60,
        height: 60,
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 40
    },
    containerUserInfo: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    userName: {
        fontSize: 20,
        fontWeight: '600',

    },
    icon: {
        position: 'absolute',
        right: 50
    }
})