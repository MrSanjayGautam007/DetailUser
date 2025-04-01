import { StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const HomePage = () => {
    const { height, width } = useWindowDimensions();
    return (
        <LinearGradient
            colors={['#ffffff', '#3a506b',]} // Gradient Colors
            style={styles.linearContainer}
        >
            <SafeAreaView style={[styles.container, { width: width, height: height }]}>
            <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent />
                <View style={styles.card}>
                    <Text style={styles.title}>🚀 Welcome to User Details App</Text>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    linearContainer: {
        flex: 1,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F3F4F6', // Light gray background
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 4 },
        // shadowOpacity: 0.1,
        // shadowRadius: 10,
        elevation: 5,
        alignItems: 'center',
        width: '90%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        // textShadowColor: 'rgba(0, 0, 0, 0.3)',  // Shadow color
        // textShadowOffset: { width: 2, height: 2 }, // Horizontal & Vertical shadow
        // textShadowRadius: 5,  // Shadow blur effect
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
        textAlign: 'center',
    },
});
