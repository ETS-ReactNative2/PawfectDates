import * as React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import {auth, db, storage} from '../firebase'
import { useState } from "react";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as ImagePicker from "expo-image-picker";


const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
          }
          setImage({ localUri: pickerResult.uri });
        };

        const uploadImage = async (uri, imgName) => {
            const res = await fetch(uri);
            const blob = await res.blob();
            const ref = storage.ref().child(imgName);
            return ref.put(blob).then(snapshot => {
                snapshot.ref.getDownloadURL().then(url => {
                    db.collection("users").doc(imgName).set({
                        "uid": imgName,
                        "pic": url
                    }, {merge: true})
                })
            });
        }
        
      

    return (
        <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
        >
          <View style={styles.inputContainer}>

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
              <Formik
                initialValues={{ 
                dogName: "",
                personName: "",
                city: "",
                about: "",
                }}
            onSubmit={ (values) => {
                auth
                .createUserWithEmailAndPassword(email, password)
                .then(userCredential => {
                   db.collection("users").doc(userCredential.user.uid).set(values);
                  if (image !== null) {
                        uploadImage(image.localUri, userCredential.user.uid)
                    }})
            }}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
            <TextInput
                placeholder="My Name"
                onChangeText={handleChange('dogName')}
                onBlur={handleBlur('dogName')}
                value={values.dogName}
                style={styles.input}
            />
            <TextInput
                placeholder="My Person's Name"
                onChangeText={handleChange('personName')}
                onBlur={handleBlur('personName')}
                value={values.personName}
                style={styles.input}
            />
            <TextInput
                placeholder="Location"
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
                style={styles.input}
            />
            <TextInput
                placeholder="About Me"
                onChangeText={handleChange('about')}
                onBlur={handleBlur('about')}
                value={values.about}
                style={styles.input}
            />
            <TouchableOpacity style={styles.buttonOutline} onPress={openImagePickerAsync}><Text style={styles.buttonOutlineText}>Add Picture</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSubmit} title="Submit">
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </View>
            )}
  </Formik>
          </View>
          </KeyboardAwareScrollView>
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
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        borderColor: "salmon",
        margin: 5,
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