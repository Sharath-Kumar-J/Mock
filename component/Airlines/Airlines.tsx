import { StyleSheet, Text, View, FlatList, TextInput, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import fetchDatafromAPI from '../../hooks/Airlines/UseAPIdata'


const HomeScreen = () => {
    const { state } = fetchDatafromAPI();
    const [search, setSearch] = useState('')// we have to search here so we have included
    const renderItemAPI = ({ item }) => {// to render the data in the flatlist
  
      if(item.country!==undefined){//if any value in the api is not defined we use this just to handle this.
        if (item.country.includes(search)) {//search
          return (
              <View style={{ flexDirection: 'row', justifyContent: 'space-around',margin:30, }}>
                  <Text style={{ textAlign: 'center', color: '#000', alignSelf: 'center' }}>{item.name}</Text>
                  <Image style={{ height: 90, width: 90 }} source={{ uri: item.logo }} />
              </View>
          )
      }
      }
       
    }
    if (state.loading) {//for loading the data in the api we use this scenario
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>

        )
    }
    if (state.error) {//error bandre error show agutte.
        console.log(state.post.error)
    }
    return (
        <View>

            <View>
                <TextInput
                    style={{ borderWidth: 2, margin: 30, borderRadius: 10, }}
                    placeholder='Enter country'
                    onChangeText={(text) => { setSearch(text) }}
                />
            </View>
            <View style={{ alignSelf: 'center',borderWidth:2, }}>
                <FlatList
                    data={state.post.slice(0, 100)}
                    renderItem = {renderItemAPI}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default HomeScreen;
