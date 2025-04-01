import { StyleSheet, Text, View, Switch, useWindowDimensions, StatusBar, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const { width, height } = useWindowDimensions(); // Dynamically get width of the screen
    // Retrieve theme from AsyncStorage on component mount
    useEffect(() => {
        const getTheme = async () => {
            try {
                const theme = await AsyncStorage.getItem('darkMode');
                if (theme !== null) {
                    setDarkMode(JSON.parse(theme));
                }
            } catch (error) {
                console.error('Error retrieving theme:', error);
            }
        };
        getTheme();
    }, []);

    // Store darkMode in AsyncStorage whenever it changes
    useEffect(() => {
        const setTheme = async () => {
            try {
                await AsyncStorage.setItem('darkMode', JSON.stringify(darkMode));
            } catch (error) {
                console.error('Error saving theme:', error);
            }
        };
        if (darkMode !== null) { // Ensure it doesn't trigger unnecessarily
            setTheme();
        }
    }, [darkMode]);

    return (
        <SafeAreaView style={[styles.container, { width: width, height: height, backgroundColor: darkMode ? 'gray' : '#fff' }]}>
            <StatusBar backgroundColor={darkMode ? 'gray' : '#F3F4F6'} barStyle={darkMode ? 'light-content' : 'dark-content'} />
            <Text style={styles.title}>Settings</Text>
            <View style={styles.option}>
                <Text style={styles.optionText}>🔔 Enable Notifications</Text>
                <Switch
                    value={notificationsEnabled}
                    onValueChange={setNotificationsEnabled}
                />
            </View>
            <View style={styles.option}>
                <Text style={styles.optionText}>🌙 Dark Mode</Text>
                <Switch
                    value={darkMode}
                    onValueChange={setDarkMode}
                />
            </View>
            <TouchableOpacity
                onPress={() => Alert.alert('Log Out', 'Are you sure you want to log out?', [{ text: 'Cancel', onPress: () => console.log('Cancel Pressed') }, { text: 'OK', onPress: () => console.log('OK Pressed') }])}
                style={styles.option}>
                <Text style={styles.optionText}>📴 Log Out</Text>

            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',  // Shadow color
        textShadowOffset: { width: 2, height: 2 }, // Horizontal & Vertical shadow
        textShadowRadius: 5,  // Shadow blur effect
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        // for ios
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        // for android
        elevation: 5,
        marginBottom: 15,
    },
    optionText: {
        fontSize: 16,
        color: '#333',

    },
});
