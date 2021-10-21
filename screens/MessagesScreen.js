import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import { auth, db } from '../firebase';
import { useState, useEffect } from 'react';
import Contact from '../components/Contact';


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
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        userDetails.push(doc.data())
                         setLikedDetails([...userDetails], querySnapshot)
                    })
                }).then(setIsBusy(false))
            })
        })
    }, [])

  console.log(likedDetails)
  console.log(isBusy)

    return ( 
        <View style={styles.container}>
         {
           likedDetails && likedDetails.map((user, i) => 
                <Text key={i}>{user.city}</Text>
                )
         }
        </View>
     );
}
 
export default MessagesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18
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