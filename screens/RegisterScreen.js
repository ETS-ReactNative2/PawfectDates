import * as React from "react";
import { KeyboardAvoidingView, Text, TextInput, View, StyleSheet, TouchableOpacity, Button } from "react-native";
import {auth, db} from '../firebase'
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Formik } from "formik";
import { collection, addDoc } from "firebase/firestore";

const RegisterScreen = () => {
    // saving data
    

    return ( 
        <Formik
        initialValues={{ 
            dogName: "",
            personName: "",
            email: "",
            city: "",
            about: "",
            likes: "",
            dislikes: ""
             }}
        onSubmit={ async (values) => await db.collection("users").add(values)}>
     {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
       <View style={styles.inputContainer}>
       <Text>My Name is:</Text>
         <TextInput
           onChangeText={handleChange('dogName')}
           onBlur={handleBlur('dogName')}
           value={values.dogName}
           style={styles.input}
         />
         <Text>My Person's Name is:</Text>
         <TextInput
           onChangeText={handleChange('personName')}
           onBlur={handleBlur('personName')}
           value={values.personName}
           style={styles.input}
         />
         <Text>My Email:</Text>
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           style={styles.input}
         />
         <Text>You Can Find Me Here:</Text>
         <TextInput
           onChangeText={handleChange('city')}
           onBlur={handleBlur('city')}
           value={values.city}
           style={styles.input}
         />
         <Text>A Little Bit About Me:</Text>
         <TextInput
           onChangeText={handleChange('about')}
           onBlur={handleBlur('about')}
           value={values.about}
           style={styles.input}
         />
         <Text>Things I Like:</Text>
         <TextInput
           onChangeText={handleChange('likes')}
           onBlur={handleBlur('likes')}
           value={values.likes}
           style={styles.input}
         />
         <Text>Things I Don't Like:</Text>
         <TextInput
           onChangeText={handleChange('dislikes')}
           onBlur={handleBlur('dislikes')}
           value={values.dislikes}
           style={styles.input}
         />
         <TouchableOpacity style={styles.button} onPress={handleSubmit} title="Submit">
             <Text style={styles.buttonText}>Register</Text>
         </TouchableOpacity>
       </View>
       </View>
     )}
   </Formik>





        // <KeyboardAvoidingView
        // style={styles.container}
        // behavior="padding">
        //     <View style={styles.inputContainer}>
        //         <TextInput
        //         style={styles.input}
        //         placeholder="First Name"/>
        //         <TextInput
        //         style={styles.input}
        //         placeholder="Last Name"/>
                
        //     </View>

        //     <View
        //     style={styles.buttonContainer}>
        //         <TouchableOpacity
        //       style={styles.button}
        //       >
        //           <Text style={styles.buttonText} onPress={() => navigation.navigate("Home")}>Finish Profile</Text>
        //       </TouchableOpacity>
        //     </View>
        // </KeyboardAvoidingView>
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