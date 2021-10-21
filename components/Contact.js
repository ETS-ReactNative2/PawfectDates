import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Contact = (props) => {
    return (
        <View>
            <Image source={{uri: props.image}} />
            <View>
                <Text>{props.dog}</Text>
                <Text>{props.person}</Text>
                <Text>{props.city}</Text>
            </View>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({})
