import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react/cjs/react.development';
import Card from '../components/Card';
import { auth, db, storage } from '../firebase';


const ProfileScreen = () => {

    const [userDetails, setUserDetails] = useState("");
    const [key, setKey] = useState("");
    db.collection("users").doc(auth.currentUser.uid).get()
    .then(snapshot => {
        setUserDetails(snapshot.data());
        setKey(snapshot.id);
    });


    const [profilePic, setProfilePic] = useState();

    // useEffect(() => {
    //     storage
    //       .ref('/' + auth.currentUser.uid) //name in storage in firebase console
    //       .getDownloadURL()
    //       .then((url) => {
    //             setProfilePic(url);
    //           }
    //       )
    //       .catch((e) => console.log('Errors while downloading => ', e));
    //   }, []);

    return ( 
        <View style={styles.container}>
        <Text>Profile Page</Text>
        {/* <Card
        key={userDetails.dogName}
        name={userDetails.dogName}
        bio={userDetails.about}
        image={"https://www.pngitem.com/pimgs/m/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png"}/>  */}
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