import React, {useState} from 'react'
import {Text, Button, View, SectionList, StyleSheet} from 'react-native'
import axios from 'axios'
import Card from '../components/Card'
import { TextInput } from 'react-native-gesture-handler'



// How do I debug in react native?

// Why does the setState() funtion trigger repeatedly when it is only run once.



const searchData = function (term) {

    const options = {
      method: 'GET',
      url: 'https://api.yelp.com/v3/businesses/search?location='+term+'&limit=10',
      headers: {
        'Authorization' : 'Bearer MMMQuWnLGwlTYdSMtKujs774rvSF8-g78jwHgo35nIoahZ1df13ph_HxFOTGIpGD-_CVpb--RMaPA2clqd8koS8x58EPk6H9fkhW791Uws_LRizh44UyVyGh4feNX3Yx' 
      }
    }

    return axios(options).then((response)=>{

        return response.data.businesses.reduce((acc, curr)=>{
            function pushData(i) {
                let newVal = acc
                newVal[i].data = newVal[i].data.concat([curr.name, curr.image_url, curr.rating, curr.review_count])
                return acc
            }
            switch(curr.price) {
                case '$':
                case undefined:
                    return pushData(0)
                case '$$':
                case '$$$':
                    return pushData(1)
                case '$$$$':
                    return pushData(2)
            }

        }, [
            {title: "Cost Effective", data: []},
            {title: "Bit Pricier", data: []},
            {title: "Big Spender", data: []}
        ])

    }).catch((err)=>console.log(err))
  
}



const MainScreen = function (props) {

    let [data, updateData] = useState([])
    let [input, updateInput] = useState('New York')


    //searchData(input).then((data)=> updateData(data))

    return (
        <View>
            <Text>Main Screen</Text>
            <TextInput style={styles.inputStyle} value={input} onChangeText={(val)=>{console.log(val)}}></TextInput>
            <Button onPress={()=>{props.navigation.navigate('Details')}} title={'Detail Screen'}></Button>
            <SectionList keyExtractor={(item, index) => item + index} sections={data} renderItem={({ item }) => <Card title={item}/>} renderSectionHeader={({section : {title}}) => {return <Text>{title}</Text>}}></SectionList>
        </View>
    )
}


const styles = StyleSheet.create({
    inputStyle: {
        width: 200,
        height: 40,
        backgroundColor: 'grey'
    }
})

export default MainScreen