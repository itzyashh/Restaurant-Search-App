import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const SearchBar = (props) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput style={styles.textStyle} onEndEditing={props.onTermSubmit}
            autoCapitalize='none' autoCorrect={false}
             placeholder="Search" value={props.term} onChangeText={props.onTermChange} />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: '#c4c2c2',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',

    },
    textStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})