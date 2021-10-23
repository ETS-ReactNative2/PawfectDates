import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, FlatList, Image, Dimensions } from "react-native";
import { auth, db } from '../firebase';
import { useState, useEffect } from 'react';
import Contact from '../components/Contact';
import { SafeAreaView } from 'react-native-safe-area-context';


let userDetails = new Array()

const MessagesScreen = () => {
   
    const [likedUsers, setLikedUsers] = useState([])
    const [likedDetails, setLikedDetails] = useState([])
    const [isBusy, setIsBusy] = useState(true)

// grab the liked users array from database
    useEffect(() => {
         db.collection("users").doc(auth.currentUser.uid)
        .get()
        .then(doc => {
            if (doc.exists) {
                setLikedUsers(doc.data().likes)
            }
            return likedUsers       
        }).then(() => {
     // copy the array to work with and store in a new array to use for display
            let details = [...likedUsers]
            details.map(id => {
                db.collection("users").where("uid", "==", id)
                .get()
                .then( querySnapshot => {
                    querySnapshot.forEach(doc => {
                        userDetails.push(doc.data())
                         setLikedDetails([...userDetails], querySnapshot)
                    })
                })
            })
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
        <View style={{alignContent: "center"}}>
        <Image source={require("../assets/messages.png")} style={styles.image} />
        </View>
        <FlatList 
            keyExtractor={(item) => item.uid}
            data={likedDetails}
            renderItem={({ item }) => (
                <Contact
                 image={item.pic}
                 dog={item.dogName}
                 person={item.personName}
                 city={item.city}
                 />
            )}
        />
        </SafeAreaView>
        
     );
}
 
export default MessagesScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 25
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
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
    image: {
        width: Dimensions.get("screen").width,
        resizeMode: "contain",
        borderRadius: 40
    },
})