import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
    return (
        <View>
        <Text>Home</Text>
    </View>
    )
    

    // const navigation = useNavigation()
    // const handleSignOut = () => {
    //     auth
    //     .signOut()
    //     .then(() => {
    //         navigation.replace("Login")
    //     })
    //     .catch(error => alert(error.message))
    // }

    // return (
    //     <View style={styles.container}>
    //         <Text>Email: {auth.currentUser?.email}</Text>
    //         <TouchableOpacity
    //         style={styles.button}
    //         onPress={handleSignOut}>
    //             <Text style={styles.buttonText}>Sign Out</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //         style={styles.button}
    //         onPress={() => navigation.navigate("Messages")}>
    //             <Text style={styles.buttonText}>Messages</Text>
    //         </TouchableOpacity>
    //         <NavTabs></NavTabs>
    //     </View>
    // )
}

export default HomeScreen

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
