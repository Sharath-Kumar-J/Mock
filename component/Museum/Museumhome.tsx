import { StyleSheet, TouchableOpacity,ActivityIndicator, Text, View, FlatList } from 'react-native'
import React,{} from 'react'
import MuseumAPIdata from '../../hooks/Museum/MuseumAPIdata'

const Museumscreen = ({ navigation }) => {
const { state }= MuseumAPIdata();
const rendermuseumItemAPI = ({ item }) => {
  return (

      <View>
          <TouchableOpacity
          activeOpacity={0.7}
          onPress = {()=>{navigation.navigate("Museummainsrn",{item:item});}}
          >
          <Text>
              {item.id}
          </Text>
          </TouchableOpacity>
      </View>
  );
};
  if (state.loading) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>

    )
}
if (state.error) {
    console.log(state.post.error)
}
return (
    <View>

        <View>
            <FlatList
                data={state.post.slice(0, 100)}
                renderItem = {rendermuseumItemAPI}
                keyExtractor={item => item.id}
            />
        </View>
    </View>
)
}
export default Museumscreen;

const styles = StyleSheet.create({})