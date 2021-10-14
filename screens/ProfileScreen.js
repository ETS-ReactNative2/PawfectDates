import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { auth, db } from '../firebase';

const ProfileScreen = () => {
    const [userDetails, setUserDetails] = useState("");
    db.collection("users").doc(auth.currentUser.uid).get()
    .then(snapshot => setUserDetails(snapshot.data()));

    return ( 
        <View style={styles.container}>
            <Text>{userDetails.about} Profile Screen</Text>
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