import { View, StyleSheet, Image, ImageSourcePropType, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from '../../Icon'

interface props {
    nameIcon: string
}

export default function BackgroundItemEnd({ nameIcon }: props) {
    return (
        <View style={styles.backgroundWhite}>
            <Icons name={nameIcon} />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundWhite: {
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 65,
        height: 65,
        borderRadius: 15,
        backgroundColor: '#f5f5f5'
    },
    icon: {
        marginTop: 20
    }
})