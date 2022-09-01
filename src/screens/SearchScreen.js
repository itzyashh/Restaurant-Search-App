import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../../services/yelp";
import useRestaurants from "../hooks/useRestaurants";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, error, restaurants] = useRestaurants()
    const filterRestaurantsByPrice = (price) => {
        return restaurants.filter(restaurant => {
            return restaurant.price === price
        })
    }

    return (
        <View>
            <View style={styles.searchBarStyle}>
                <SearchBar
                    value={term}
                    onTermChange={setTerm}
                    onSubmit={() => searchApi(term)}
                />
                {error && <Text>{error}</Text>}
            </View>
            <ResultList title={'Cost Effective'} restaurants={filterRestaurantsByPrice('$')} />
            <ResultList title={'Bit Pricier'} restaurants={filterRestaurantsByPrice('$$')} />
            <ResultList title={'Big Spender'} restaurants={filterRestaurantsByPrice('$$$')} />
            <ResultList title={'Lap of Luxury'} restaurants={filterRestaurantsByPrice('$$$$')} />
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    searchBarStyle: {
        marginVertical: 15,
    },
});
