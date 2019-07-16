import React from 'react'
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native'

const styles = StyleSheet.create({
    search1: {
        flexDirection: 'row',
        paddingLeft:10,
        paddingTop:5,
    },

    title1: {
        fontWeight: 'bold',
    },
    title2: {
        fontWeight: 'bold',
        fontSize: 20,
    },
})

export const SearchView = props => (
        <View style={styles.search1}>
            <Image style={{width: 50, height: 50}} source={{uri: props.item.Poster}} />

            <View style={{paddingLeft: 20}}>
                <Text style={styles.title}>{props.item.Title}</Text>
                <Text>{`${props.item.Year} (${props.item.Type})\n\n`}</Text>
            </View>
        </View>
)



export const MovieView = props => (
    <View>
        <Image style={{width: 400, height: 400, paddingTop: 20}} source={{uri: props.item.Poster}} />
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.title2}>{props.item.Title}</Text>
            <Text style={{paddingTop: 2}}>{`    (${props.item.Year})`}</Text> 
        </View>
        <View style={{paddingTop: 5}}>
            <Text>{`${props.item.Rated}, ${props.item.Runtime}`}</Text>
        </View>
        <View style={{paddingTop: 5}}>
            <Text style={{fontStyle: 'italic'}}>{props.item.Plot}</Text>
        </View>
    </View>
)

