import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react/cjs/react.development';
import Card from '../components/Card';
import { auth, db, storage } from '../firebase';


const ProfileScreen = () => {

    const [userDetails, setUserDetails] = useState("");
    db.collection("users").doc(auth.currentUser.uid).get()
    .then(snapshot => {
        setUserDetails(snapshot.data());
    });

    return ( 
        <View style={styles.container}>
        <Card
        key={userDetails.dogName}
        name={userDetails.dogName}
        bio={userDetails.about}
        image={userDetails.pic}/> 
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