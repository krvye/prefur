import React from 'react';
import { View, Button, Text, StyleSheet, } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome to My App</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.contentText}>
                This is the content section of the homepage.
                You can add your content here.
                </Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Footer</Text>
            </View>

            <View  style = {styles.buttonContainer}>
                <Button
                    title="Add Pet Here"
                    onPress={() => navigation.navigate('Add Pet')}
            />

                <Button
                    title="Go to Contact"
                    onPress={() => navigation.navigate('Contact')}
            />

                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}

                />
            </View>
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#77B0AA',
        alignItems: 'center',
        justifyContent: 'center',
      },
    header: {
        backgroundColor: '#3498db',
        padding: 20,
        alignItems: 'center',
      },
    headerText: {
        fontSize: 24,
        color: '#fff',
      },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
    contentText: {
        fontSize: 18,
        textAlign: 'center',
      },
    footer: {
        backgroundColor: '#34495e',
        padding: 10,
        alignItems: 'center',
      },
    footerText: {
        fontSize: 16,
        color: '#fff',
      },

    buttonContainer: {
        flexDirection: 'row',
    },
});
