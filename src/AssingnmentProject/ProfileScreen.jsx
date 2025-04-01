import { StyleSheet, Text, View, Image, StatusBar, useWindowDimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const ProfileScreen = () => {
    const { height, width } = useWindowDimensions();
    return (
        <LinearGradient
            colors={['#ffffff', '#3a506b',]} // Gradient Colors
            style={{ flex: 1 }}
        >
            <SafeAreaView style={[styles.mainView, { width: width, height: height }]}>
                <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent />
                <View style={styles.card}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg' }}
                        style={styles.avatar}
                        resizeMode='cover'
                    />
                    <Text style={styles.name}>Name : Tony Stark</Text>

                    <Text style={styles.bio}>🦾 Genius | 💰 Billionaire | 💘 Playboy | 🤲 Philanthropist</Text>

                    <Text style={styles.description}>
                        Inventor of Iron Man suit and CEO of Stark Industries.
                        Always thinking ahead, pushing boundaries, and saving the world—one suit at a time.
                    </Text>

                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F3F4F6',
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'center',
        width: '90%',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
        elevation: 30,
        borderColor: 'red',
        borderWidth: 0.5
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',  // Shadow color
        textShadowOffset: { width: 2, height: 2 }, // Horizontal & Vertical shadow
        textShadowRadius: 5,  // Shadow blur effect
    },
    bio: {
        fontSize: 18,
        fontWeight: '600',
        color: '#555',
        marginTop: 5,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',  // Shadow color
        textShadowOffset: { width: 2, height: 2 }, // Horizontal & Vertical shadow
        textShadowRadius: 5,  // Shadow blur effect
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
        textAlign: 'center',
        paddingHorizontal: 10,

    },
});
