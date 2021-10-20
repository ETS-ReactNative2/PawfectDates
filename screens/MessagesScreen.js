import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const MessagesScreen = () => {

    const navigation = useNavigation()
    const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
        navigation.replace("Login")
    })
    .catch(error => alert(error.message))
}

    return ( 
        <View style={styles.container}>
            <Text>Dispaly messages here.</Text>
            <TouchableOpacity
            style={styles.button}
             onPress={handleSignOut}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
     );
}
 
export default MessagesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "salmon",
        width: "60%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16
    },
})