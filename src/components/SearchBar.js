import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Octicons } from 'react-native-vector-icons'

const SearchBar = ({ value, onTermChange, onSubmit }) => {
    return (
        <View style={styles.searchBarStyle}>
            <Octicons name="search" style={styles.iconStyle} />
            <TextInput style={styles.inputStyle}
                placeholder="Search"
                onChangeText={onTermChange}
                value={value}
                onEndEditing={onSubmit}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBarStyle: {
        backgroundColor: '#bfcde3',
        marginHorizontal: 15,
        borderRadius: 8,
        height: 50,
        flexDirection: 'row'
    },
    iconStyle: {
        fontSize: 24,
        alignSelf: 'center',
        paddingHorizontal: 20
    },
    inputStyle: {
        fontSize: 18,
        flex: 1,
    }
})