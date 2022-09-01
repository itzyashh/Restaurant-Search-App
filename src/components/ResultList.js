import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultList = ({ title, restaurants }) => {
    console.log(restaurants);

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                keyExtractor={restaurant => restaurant.id}
                data={restaurants}
                horizontal
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    )
}

export default ResultList

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: '500'
    }
})