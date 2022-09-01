import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from 'react-native-vector-icons'

const RestaurantDetail = ({ restaurantData }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imgStyle} source={{ uri: restaurantData.image_url }} />
            <Text style={styles.nameStyle}>{restaurantData.name}</Text>
            <View style={styles.stats}>
                <Text>{restaurantData.rating}</Text><MaterialIcons style={styles.icon} name="star-outline" />
                <Text style={styles.review}>{restaurantData.review_count} Reviews</Text>
            </View>
        </View>

    )
}

export default RestaurantDetail

const styles = StyleSheet.create({
    container: {
        marginLeft: 12,

    },
    imgStyle: {
        width: 220,
        height: 120,
        marginBottom: 5, borderRadius: 5
    },
    nameStyle: { fontWeight: 'bold' },
    stats: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 3,
        fontSize: 15,
        color: '#bdb32d',
        alignSelf: 'center',

    },
    review: {
        left: 10
    }
})