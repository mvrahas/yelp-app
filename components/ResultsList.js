import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native'
import Card from './Card'


const ResultsList = function (props) {

    return (
        <View>
            <Text style={styles.textStyle}>{props.title}</Text>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true} style={styles.sectionStyle} keyExtractor={item => item.id} data={props.data} renderItem={({item}) => {return <Card navigateTo={() => {props.toDetail({id:item.id,name:item.name})}} name={item.name} image_url={item.image_url} rating={item.rating} reviews={item.review_count}/>}}></FlatList>
        </View>
    )
}


const styles = StyleSheet.create({
    sectionStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    textStyle : {
        marginTop : 24,
        marginLeft : 15,
        fontSize : 20,
        fontWeight : 'bold',
    }
})

export default ResultsList