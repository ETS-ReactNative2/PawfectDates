import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { auth, db } from '../firebase';


const ProfileScreen = () => {

    const [userDetails, setUserDetails] = useState("");
    db.collection("users").doc(auth.currentUser.uid).get()
    .then(snapshot => {
        setUserDetails(snapshot.data());
    });

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
        <Image source={{uri: userDetails.pic}} style={styles.thumbnail}/>
        <Text>Hi I'm {userDetails.dogName}!</Text>
        <Text>I live in {userDetails.city}.</Text>
        <Text>The person I'm obssesed with is {userDetails.personName}.</Text>
        <Text>You can contact me here: {auth.currentUser.email}</Text>

        <TouchableOpacity
            style={styles.button}
             onPress={handleSignOut}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
            
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
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain"
      }
})