import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Sidebar from '../../components/Sidebar'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/stack'

const height = Dimensions.get('screen').height;

export default function Home() {   

    return (
        <Sidebar />
    )
}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: height
    }
})