import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import { auth, db, storage } from '../firebase';
import Card from '../components/Card';
import { useEffect, useState } from 'react/cjs/react.development';
import BottomBar from '../components/BottomBar';


const HomeScreen = () => {

    // put the users in an array of objects.
    const [users, setUsers] = useState([]);
    useEffect(() => {db
    .collection("users")
    .onSnapshot(snapshot => {
        setUsers(snapshot.docs.map(doc => doc.data()));
    })}, [])

          // handle likes and passes
          const [currentIndex, setCurrentIndex] = useState(0);
          const handleLike = () => {
              console.log("like")
               nextUser()
          }
          const handlePass = () => {
              console.log("pass")
               nextUser()
          }
    
        const nextUser = () => {
          console.log("Did it work?")
          const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1
          setCurrentIndex(nextIndex)
       }

    return (
 
        <View style={styles.container}>
        {users.length > 1 &&
            users.map(
                (user, i) => 
                currentIndex === i && (
            <Card
            key={user.uid}
            image={user.pic}
            name={user.dogName}
            bio={user.about}
            handleLike={handleLike}
            handlePass={handlePass}
            />
        ))}  
        </View> 
    )
}

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

export default HomeScreen


