import * as React from 'react';
import { Text, View, StyleSheet } from "react-native";

const MessagesScreen = () => {
    return ( 
        <View style={styles.container}>
            <Text>Dispaly messages here.</Text>
        </View>
     );
}
 
export default MessagesScreen;

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