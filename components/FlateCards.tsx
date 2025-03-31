import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlateCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Flate Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>First</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Second</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Thrid</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 35,
    padding: 5,
    backgroundColor: '#de7e64',
    borderRadius: 5,
    paddingHorizontal: 10,
   },
   container: {
    flex :1,
    flexDirection: 'row',
    padding: 8,
   },
   card:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 5,

   },
   cardOne: {
    backgroundColor: '#a882c2',
  },
   cardTwo: {
    backgroundColor: '#50DBB4',
  },
   cardThree: {
    backgroundColor: '#5DA3FA',
  },
})