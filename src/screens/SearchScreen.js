import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../../services/yelp";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantList from "../components/RestaurantList";
const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, error, restaurants] = useRestaurants()
    const filterRestaurantsByPrice = (price) => {
        return restaurants.filter(restaurant => {
            return restaurant.price === price
        })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchBarStyle}>
                <SearchBar
                    value={term}
                    onTermChange={setTerm}
                    onSubmit={() => searchApi(term)}
                />
                {error && <Text>{error}</Text>}
            </View>
            <RestaurantList title={'Cost Effective'} restaurants={filterRestaurantsByPrice('$')} />
            <RestaurantList title={'Bit Pricier'} restaurants={filterRestaurantsByPrice('$$')} />
            <RestaurantList title={'Big Spender'} restaurants={filterRestaurantsByPrice('$$$')} />
            <RestaurantList title={'Lap of Luxury'} restaurants={filterRestaurantsByPrice('$$$$')} />


        </ScrollView>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(179, 255, 180,.1)',
        flex: 1
    },
    searchBarStyle: {
        marginVertical: 15,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
