import React, {useState} from 'react'
import {Text, Button, View, FlatList, StyleSheet, ScrollView} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'



// How do I debug in react native?

// Why does the setState() funtion trigger repeatedly when it is only run once.

// How do I pass into a prop into a screen object in react navigator

// How do you style a SectionList properly?

// Why do I keep getting the warning related to the virtualized keys?



const MainScreen = function (props) {

    let [input, updateInput] = useState('')
    let [data, errorMessage, searchData] = useResults()


    const filterByPrice = function (price) {
        return data.filter((datum) => {
            return datum.price == price
        })
    }

    return (
        <>
            <View style={styles.inputStyle}>
                <Feather name={"search"} style={styles.iconStyle}></Feather>
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                <TextInput autoCorrect={false} horizontal={true} returnKeyType={'search'} style={styles.textInput} value={input} onEndEditing={()=>{searchData(input)}} onChangeText={(val)=>{updateInput(val)}}></TextInput>
            </View>
            <ScrollView>
                <ResultsList title={'Cost Effective'} data={filterByPrice('$')} toDetail={(id) => {props.navigation.navigate('Details', {id})}}></ResultsList>
                <ResultsList title={'Bit Pricier'} data={filterByPrice('$$')} toDetail={(id) => {props.navigation.navigate('Details', {id})}}></ResultsList>
                <ResultsList title={'Big Spender!'} data={filterByPrice('$$$')} toDetail={(id) => {props.navigation.navigate('Details', {id})}}></ResultsList>
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    inputStyle: {
        height: 40,
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 12,
        borderRadius: 6
    },
    textInput: {
        fontSize: 16,
        flex : 1
    },
    iconStyle : {
        fontSize : 35,
        alignSelf : 'center',
        marginHorizontal : 12
    }
})

export default MainScreen