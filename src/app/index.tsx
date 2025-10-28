import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function Home() {
    return(
        <View style={style.container}>
            <Text>Home</Text>
            <Link href={"/../src/app/profile"}>Ir para o Perfil</Link>
        </View>

    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'f0f8f7',
        alignItems: 'center',
        justifyContent: 'center',
    }
    Link:{
        color:;
    }

});