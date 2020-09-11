import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import axios from 'axios';
import PeopleList from './src/components/PeopleList';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: []
    }
  };

  componentDidMount() {
    axios
      .get(`https://randomuser.me/api?nat=br&results=5`)
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        })

      })
  }

  render() {
    return (
      <View>
        <StatusBar style="auto" />
        <Header title="People" />
        <PeopleList peoples={this.state.peoples}/>
      </View>
    );
  }
}