import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../../services/yelp'
import { ImageSlider } from "react-native-image-slider-banner"

const ShowRestaurantScreen = ({ route }) => {
    const [restaurant, setRestaurant] = useState(null)
    const id = route.params.id

    const getRestaurant = async id => {
        const res = await yelp.get(`/${id}`)
        setRestaurant(res.data)
    }
    useEffect(() => {
        getRestaurant(id)
    }, [])
    // setImages({ img: restaurant.photos })
    if (!restaurant) {
        return null
    }

    return (
        <View>
            <Text>{restaurant.name}</Text>
            {/* <ImageSlider
                // data={ }
                autoPlay={false}
                // onItemChanged={(item) => console.log("item", item)}
                closeIconColor="#fff"
            /> */}
            <FlatList
                keyExtractor={id => id}
                data={restaurant.photos}
                renderItem={({ item }) => {
                    return (<Image
                        source={{ uri: item }}
                        style={styles.img}
                    />)
                }}
            />
        </View>
    )
}

export default ShowRestaurantScreen

const styles = StyleSheet.create({
    img: {
        height: 200,
        width: 400,
        borderWidth: 4,
        borderColor: 'violet'
    }
})