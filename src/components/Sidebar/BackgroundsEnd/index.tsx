import { View, StyleSheet, Image, ImageSourcePropType, Button, TouchableOpacity } from 'react-native'
import React from 'react'

interface props {
    Icon: ImageSourcePropType
}

export default function BackgroundItemEnd({ Icon }: props) {
    return (
        <View style={styles.backgroundWhite}>
            <TouchableOpacity >
                <Image source={Icon} style={styles.icon}/>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    backgroundWhite: {
        overflow:  'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 65,
        height: 65,
        borderRadius: 15,
        backgroundColor: '#f5f5f5'
    },
    icon : {
        marginTop: 20
    }
})