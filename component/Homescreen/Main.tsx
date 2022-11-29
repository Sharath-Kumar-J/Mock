import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MainScreen = ({ navigation }) => {
    return (
        <View>
            <View >
                <TouchableOpacity style={{ borderWidth: 1,borderRadius:10, margin: 15, padding: 10 }}
                    onPress={() => { navigation.navigate("HomeScreen") }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center', }}>
                        Airlines
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={{ borderWidth: 1,borderRadius:10, margin: 15, padding: 10 }}
                    onPress={() => { navigation.navigate("Searchscreen") }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center', }}>
                        SearchScreen
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={{ borderWidth: 1,borderRadius:10, margin: 15, padding: 10 }}
                    onPress={() => { navigation.navigate("Museumscreen") }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center', }}>
                        Museum
                    </Text>



                </TouchableOpacity>

                <TouchableOpacity style={{ borderWidth: 1,borderRadius:10, margin: 15, padding: 10 }}
                    onPress={() => { navigation.navigate("Earthquakehome") }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center', }}>
                        EarthQuake
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={{ borderWidth: 1,borderRadius:10, margin: 15, padding: 10 }}
                    onPress={() => { navigation.navigate("Coronamain") }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center', }}>
                        Corona
                    </Text>

                </TouchableOpacity>

            </View>
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({})