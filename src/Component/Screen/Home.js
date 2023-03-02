import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { CustomButton } from "../Common/Button";

export const Home=(props)=>{

    const [count,setCount] = useState(0)

    const increment=()=>{
        setCount(count + 1)
    }

    const Decrement=()=>{
        setCount(count - 1)
    }

    return(
        <View style={styles.HomeContainer}>
            <Text style={styles.title}>Sample App</Text>
            <Text style={styles.countTxt}>{count}</Text>

            <CustomButton btnPress={increment} btnlabel="Increment" />
            <CustomButton btnPress={Decrement} btnlabel="Decrement" />
        </View>
    )
}

const styles = StyleSheet.create({
    HomeContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#4C85D8"
    },
    countTxt: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    }
})