import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icons from '../../components/Icon'
import FriendContainer from './FriendContainer'

export default function Friend() {
  return (
    <View style={{paddingVertical: 20}}>
      <View style={styles.containerTop}>
        <Icons name='user-friends' />
        <Text style={styles.title}>FRIENDS</Text>
      </View>

      <FriendContainer name={"Lucas Sileo"}/>
      <FriendContainer name={"Ana Clara"}/>
      <FriendContainer name={"Gustavo Moreno"}/>
      <FriendContainer name={"Gabriele Dias"}/>
    </View>
  )
}

const styles =  StyleSheet.create({
  containerTop: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold'
  }
})