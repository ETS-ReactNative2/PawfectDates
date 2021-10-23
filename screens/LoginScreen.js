import { useNavigation } from '@react-navigation/native';
import * as React from 'react'
import { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image } from 'react-native';
import { auth } from '../firebase';


const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation()
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            } 
        })
        return unsubscribe
    }, [])


    const handleLogIn = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
          <View style={styles.inputContainer}>
          <View style={styles.imgContainer}>
          <Image source={require("../assets/icon.png")} style={styles.logo}/>
          </View>
              <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
              />
              <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry
              />
          </View>

          <View style={styles.buttonContainer}>
              <TouchableOpacity
              onPress={handleLogIn}
              style={styles.button}
              >
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <Button
              title="Don't Have An Account? Sign Up!"
              onPress={() => navigation.navigate("Register")}
              />
          </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: "80%",
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    button: {
        backgroundColor: "salmon",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "salmon",
        borderWidth: 2,
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16
    },
    buttonOutlineText: {
        color: "salmon",
        fontWeight: "700",
        fontSize: 16
    },
    logo: {
        borderRadius: 50,
        width: 200,
        height: 200,
        marginBottom: "25%",
    },
    imgContainer: {
        alignItems: "center"
    }
    
})
