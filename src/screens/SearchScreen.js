import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../../services/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [restaurants, setRestaurants] = useState([])
    const [error, setError] = useState('')
    const searchApi = async () => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    term: term,
                    limit: 20,
                    location: 'san jose'
                }
            }
            )
            setRestaurants(res.data.businesses)
            setError('')
        } catch (err) {
            setError('Error in server')
        }

    }
    return (
        <View>
            <View style={styles.searchBarStyle}>
                <SearchBar
                    value={term}
                    onTermChange={setTerm}
                    onSubmit={searchApi}
                />
                {error && <Text>{error}</Text>}
            </View>
            <Text>{restaurants.length}</Text>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    searchBarStyle: {
        marginVertical: 15,
    },
});
