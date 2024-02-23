import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../../components/Screen'
import TopBar from '../../components/TopBar'

const HomeScreen = () => {
    return (
        <Screen>
            <TopBar />
            <Text>HomeScreen</Text>
        </Screen>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})