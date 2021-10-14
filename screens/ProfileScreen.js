import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { auth, db } from '../firebase';

console.log(auth.currentUser)
const ProfileScreen = () => {

    const currentUser = auth.currentUser.uid;
    const userAbout = db.collection("users").doc(currentUser).about;
    return ( 
        <View style={styles.container}>
            <Text>{userAbout} Profile Screen</Text>
        </View>
     );
}
 
export default ProfileScreen;

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