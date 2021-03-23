import React, {useState, useEffect} from 'react'
import {FlatList, StyleSheet, Image, Button, View} from 'react-native'
import yelp from '../api/yelp'




const DetailScreen = function (props) {

    let [photoArray, updatePhotoArray] = useState(['1','2','3'])

    const getDetails = async function (id) {
        let response = await yelp.get(`/${id}`)
        updatePhotoArray(response.data.photos)
    }

    useEffect(() => {getDetails(props.route.params.id)}, [])

    return(
        <View>
            <FlatList data={photoArray} keyExtractor={photo => photo} renderItem={({item})=>{return <Image style={styles.img} source={{uri:item}}></Image>}}></FlatList>
        </View>
        )
}

const styles = StyleSheet.create({
    img : {
        width : 260,
        height : 120,
        margin: 20
    }
})


export default DetailScreen