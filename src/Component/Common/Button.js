import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity,Text } from "react-native";

export const CustomButton=({btnPress,btnlabel})=>{
    return(
        <TouchableOpacity onPress={btnPress} style={styles.btnStyle}>
           <Text style={styles.txtLabel}>{btnlabel}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        marginVertical:10,
       borderRadius: 100,
       alignItems:"center",
       width: 200,
       paddingVertical:5,
       backgroundColor: "#21608D",
       
    },
    txtLabel: {
        fontSize:16,
        fontWeight:"bold",
        padding: 10,
        color: "#fff"
    }
})