import React, {useState, useEffect} from 'react'
import {FlatList, StyleSheet, Image, Text, View,ScrollView} from 'react-native'
import yelp from '../api/yelp'
import MapView, { Marker } from 'react-native-maps'



const DataRow = ({children})=><View style={styles.line}>
    {children}
</View>


const DetailScreen = function ({route,navigation}) {

    let [data, updateData] = useState(null)

    const getDetails = async function (id) {
        let response = await yelp.get(`/${id}`)
        updateData(response.data)
    }

    useEffect(() => {
        navigation.setOptions({title: route.params.name})
        getDetails(route.params.id)
    }, [])

    return(
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
            {data ? <View>
                <MapView
                    initialRegion={{
                        ...data.coordinates,
                        latitudeDelta:.02,
                        longitudeDelta:.02
                    }}
                    style={{
                        width:'100%',
                        height:260
                    }}
                >
                    <Marker coordinate={data.coordinates}/>
                </MapView>
                    <Text style={styles.heading}>Photos</Text>
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data.photos}
                        keyExtractor={photo => photo} 
                        renderItem={({item})=>{return <Image style={styles.img} 
                        source={{uri:item}}></Image>}}
                        style={{marginLeft:15}}
                    >
                    </FlatList>
                    <Text style={styles.heading}>Info</Text>
                    <View style={{paddingHorizontal:15}}>
                        <DataRow>
                            <Text>{data.rating} Stars</Text>
                        </DataRow>
                        <DataRow>
                            <Text>{data.review_count} Reviews</Text>
                        </DataRow>
                        <DataRow>
                            {data.location.display_address.map((line,index)=><Text key={index}>{line}</Text>)}
                        </DataRow>
                        <DataRow>
                            <Text>{data.phone}</Text>
                        </DataRow>
                        <DataRow>
                            <Text>{data.transactions.length ? data.transactions.map(item=>item.charAt(0).toUpperCase()+item.slice(1).toLowerCase()).join(', ') : 'No transactions'}</Text>
                        </DataRow>
                    </View>
                    <View style={{height:40}}/>
            </View>: null}
        </ScrollView>
        )
}

const styles = StyleSheet.create({
    img : {
        width : 160,
        height : 120,
        marginRight: 10,
        borderRadius:8
    },
    heading:{
        fontSize:20,
        fontWeight:'600',
        marginBottom:10,
        marginTop:20,
        marginLeft:15
    },
    line:{
        borderTopWidth:1,
        borderColor:'lightgrey',
        paddingVertical:20
    }
})


export default DetailScreen