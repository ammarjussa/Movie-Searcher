import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import {fetchFullMovie} from '../api'
import {MovieView} from './view'


export class MovieScreen extends Component {
    state = {
        item: {}
    }

    componentDidMount() {
        this.Displayer(this.props.navigation.getParam('item'));
    }

    Displayer = async(title) => {
        let results = await fetchFullMovie(title);
        this.setState({item: results});
        console.log(title)
    }

    render() {
        return (
            <MovieView item = {this.state.item}/>
        )
    }    
}

export default MovieScreen
