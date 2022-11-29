import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Museummainsrn = ({ route }) => {
    const { params } = route;
    const { item } = params;
    const { title } = item;
    return (
        <View>
            <Text style={{ fontSize: 25, }}>{title}</Text>
       
        </View>
    )
}


export default Museummainsrn;

const styles = StyleSheet.create({})