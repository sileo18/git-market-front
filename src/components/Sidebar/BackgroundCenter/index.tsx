import { View, StyleSheet, Image, ImageSourcePropType, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from '../../Icon'

interface props {
    nameIcon: string
}

export default function BackgroundItemCenter({ nameIcon }: props) {
    return (
        <View style={styles.backgroundWhite}>
            <TouchableOpacity activeOpacity={.5}>
            <Icons name={nameIcon}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundWhite: {
        overflow:  'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 65,
        height: 65,
        borderRadius: 15,
        backgroundColor: '#f5f5f5'
    }
})