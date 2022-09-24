import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'



const Card = function (props) {
    return (
        <TouchableOpacity style={styles.card} onPress={props.navigateTo}>
            <Image style={styles.img} source={{uri: props.image_url}}></Image>
            <Text style={styles.bold}>{props.name}</Text>
            <Text style={styles.reg}>{props.rating} Stars, {props.reviews} Reviews</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card : {
        width: 260,
        marginVertical: 20,
        marginLeft: 15
    },
    img : {
        width: 260,
        height: 130,
        borderRadius:10
    },
    bold : {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop:5
    },
    reg : {
        fontSize: 14,
        color: 'grey'
    }
})

export default Card