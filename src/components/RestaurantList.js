import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RestaurantDetail from './RestaurantDetail';


const RestaurantList = ({ title, restaurants }) => {

    return (

        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                keyExtractor={restaurant => restaurant.id}
                data={restaurants}
                horizontal
                renderItem={({ item }) => {
                    return <RestaurantDetail restaurantData={item} />
                }}
            />
        </View>
    )
}

export default RestaurantList

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: 'rgba(179, 255, 180,.1)'
    },
    title: {
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 18,
        fontWeight: '500'
    }
})