import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigator from './src/AssingnmentProject/AppNavigator'

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator/>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})