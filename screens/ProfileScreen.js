import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react/cjs/react.development';
import { auth, db, storage } from '../firebase';

const ProfileScreen = () => {
    const [userDetails, setUserDetails] = useState("");
    db.collection("users").doc(auth.currentUser.uid).get()
    .then(snapshot => setUserDetails(snapshot.data()));

    const [profilePic, setProfilePic] = useState(null);
    useEffect(() => {
        storage
          .ref('/' + auth.currentUser.uid) //name in storage in firebase console
          .getDownloadURL()
          .then((url) => {
            setProfilePic(url);
          })
          .catch((e) => console.log('Errors while downloading => ', e));
      }, []);

    return ( 
        <View style={styles.container}>
            <Image
            source={{ uri: profilePic}}
            style={styles.thumbnail}
            />
            <Text>About {userDetails.dogName}:</Text>
            <Text>{userDetails.about}</Text>
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