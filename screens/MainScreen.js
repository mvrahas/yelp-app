import React, {useState} from 'react'
import {Text, Button, View, FlatList, StyleSheet, ScrollView} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const MainScreen = function (props) {

    let [input, updateInput] = useState('')
    let [data, errorMessage, searchData] = useResults()
    const insets = useSafeAreaInsets();


    const filterByPrice = function (price) {
        return data.filter((datum) => {
            return datum.price == price
        })
    }

    return (
        <>
            <View style={{paddingTop:insets.top+20}}>
            <View style={styles.inputStyle}>
                <Feather name={"search"} style={styles.iconStyle}></Feather>
                <TextInput autoCorrect={false} horizontal={true} returnKeyType={'search'} style={styles.textInput} value={input} onEndEditing={()=>{searchData(input)}} onChangeText={(val)=>{updateInput(val)}} placeholder={'Search by City'}></TextInput>
            </View>
            {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
            </View>
            <ScrollView>
                <ResultsList title={'Cost Effective'} data={filterByPrice('$')} toDetail={(data) => {props.navigation.navigate('Details', data)}}></ResultsList>
                <ResultsList title={'Bit Pricier'} data={filterByPrice('$$')} toDetail={(data) => {props.navigation.navigate('Details', data)}}></ResultsList>
                <ResultsList title={'Big Spender!'} data={filterByPrice('$$$')} toDetail={(data) => {props.navigation.navigate('Details', data)}}></ResultsList>
                <View style={{height:100}}/>
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    inputStyle: {
        height: 40,
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 12,
        borderRadius: 6
    },
    textInput: {
        fontSize: 16,
        flex : 1,
    },
    iconStyle : {
        fontSize : 20,
        color:'grey',
        alignSelf : 'center',
        marginHorizontal : 12,
        marginTop:1
    },
    errorStyle:{
        marginLeft:15,
        color: 'red'
    }
})

export default MainScreen