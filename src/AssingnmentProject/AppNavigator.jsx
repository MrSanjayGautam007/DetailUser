import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
import HomePage from './HomePage'
import ProfileScreen from './ProfileScreen'
import SettingsScreen from './SettingsScreen'
const BottomTab = createBottomTabNavigator()
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator screenOptions={
                {
                    headerShown: false,
                    // animation: 'shift',
                    // tabBarShowLabel: false, // Hides tab names
                    tabBarStyle: {
                        backgroundColor: '#fff',
                    },
                }
            }
            >
                <BottomTab.Screen name="HomePage" component={HomePage}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="home" color={color} size={size} />
                        ),
                    }} />
                <BottomTab.Screen name="ProfileScreen" component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="user" color={color} size={size} />
                        ),
                    }}
                />
                <BottomTab.Screen name="SettingScreen" component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="settings" color={color} size={size} />
                        ),
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator
const styles = StyleSheet.create({})