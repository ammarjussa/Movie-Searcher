import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight, TextInput, FlatList, Image, ScrollView} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import {fetchSearch} from '../api' 
import {SearchView} from './view'

export class HomeScreen extends Component {
    state = {
        text: '',
        displaying: []
    }
    

    textChecker = async(text) => {
        this.setState({text});
        count = 0;
        let todisplay = await fetchSearch(text);
        if(todisplay.Response==='False') {
        }

        else {
            todis = todisplay.Search;
            if(todis.length > 10) {
                todis = todis.slice(0,11);
            }
    
            
            this.setState({displaying: todis});
        }


        
    }

    render() {   
        
        return (
            <View style={{flex:1}}>
                <TextInput 
                    style={styles.input}
                    onChangeText={this.textChecker}

                />
                <ScrollView style={{flex:1}}>
                    <FlatList data={this.state.displaying} renderItem={({item})=> {
                        if (this.state.text) {
                            return (
                                <TouchableHighlight onPress={()=> {
                                    this.props.navigation.navigate('Movie', {item:item.Title})
                                }}>

                                    <SearchView item={item} />

                                </TouchableHighlight>
                            )
                        }
                    }} keyExtractor={(item, index) => 'key'+index}/>
                </ScrollView>
            </View>            
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 30, 
        width: 325,
        margin: 15,
        borderColor: 'black', 
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default HomeScreen
