import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

const Card = function (props) {
    return (
        <View>
            <Image></Image>
            <Text>{props.title}</Text>
            <Text></Text>
        </View>
    )
}

export default Card