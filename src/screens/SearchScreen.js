import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../../services/yelp";

const SearchScreen = () => {


    return (
        <View>
            <View style={styles.searchBarStyle}>
                <SearchBar />
            </View>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    searchBarStyle: {
        marginVertical: 15,
    },
});
