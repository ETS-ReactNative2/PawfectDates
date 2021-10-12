import * as React from "react";
import { KeyboardAvoidingView, Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import {auth} from '../firebase'
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

const RegisterScreen = () => {

    return ( 
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="First Name"/>
                <TextInput
                style={styles.input}
                placeholder="Last Name"/>
                
            </View>

            <View
            style={styles.buttonContainer}>
                <TouchableOpacity
              style={styles.button}
              >
                  <Text style={styles.buttonText} onPress={() => navigation.navigate("Home")}>Finish Profile</Text>
              </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
     );
}
 
export default RegisterScreen;

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
    
})