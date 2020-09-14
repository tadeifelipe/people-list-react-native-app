import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem.js';


const PeopleList = props => {
     const { peoples } = props;

     const items = peoples.map(people => {
          return <PeopleListItem key={people.name.first} people={people} />
     })

     return (
          <View style={styles.container}>
               {items}
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          backgroundColor: '#273c75'
     },
    
})

export default PeopleList;
