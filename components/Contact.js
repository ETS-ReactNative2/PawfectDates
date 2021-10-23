import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const Contact = (props) => {
    return (
        <View style={styles.container}>
        <View style={styles.innerContact}>
            <Image source={{uri: props.image}} style={styles.img}/>
            <View style={styles.contactInfo}>
                <Text>Hi! My name is {props.dog}.</Text>
                <Text>I love my person, {props.person}.</Text>
                <Text>I live in {props.city}.</Text>
            </View>
            </View>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 10,
        alignItems: "flex-start",
        marginBottom: 7
    },
    innerContact:{
        flexDirection: "row",
        width: Dimensions.get("screen").width,
        shadowOffset:{  width: 2,  height: 2,  },
        shadowColor: 'salmon',
        shadowOpacity: .3,
        shadowRadius: 8,
        borderRadius: 20,
        backgroundColor: "white",
    },
    img: {
        borderRadius: 50,
        height: 75,
        width: 75,
        
    },
    contactInfo: {
        flexDirection: "column",
        marginLeft: 15,
    }
})
