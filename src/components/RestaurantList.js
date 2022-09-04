import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RestaurantDetail from './RestaurantDetail';
import { useNavigation } from '@react-navigation/native';


const RestaurantList = ({ title, restaurants }) => {
    const navigation = useNavigation();

    if (!restaurants.length) {
        return null
    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={restaurant => restaurant.id}
                data={restaurants}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('RestaurantPage', { id: item.id })} >

                            <RestaurantDetail restaurantData={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default RestaurantList

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        // backgroundColor: 'rgba(179, 255, 180,.1)'
    },
    title: {
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 18,
        fontWeight: '500'
    }
})