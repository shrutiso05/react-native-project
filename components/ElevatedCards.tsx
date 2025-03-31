import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
      </ScrollView>
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
       card:{

       },
       cardElevated: {},
       container: {}
       
})