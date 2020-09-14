import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function PeopleListItem(props) {
     const { people } = props;
     const { title, first, last, picture } = people.name;

     return (
          <View style={styles.line}>
               <Image style={styles.avatar} source={people.thumbnail} />
               <Text style={styles.lineText}>
                    {`${title} ${first}  ${last}`}
               </Text>
          </View>
     );
}

const styles = StyleSheet.create({
     line: {
          height: 60,
          borderBottomWidth: 1,
          borderBottomColor: '#bbb',
          alignItems: 'center',
          flexDirection: 'row'
     },
     lineText: {
          fontSize: 20,
          paddingLeft: 20,
          color: '#fff'
     },
     avatar: {
          aspectRatio: 1,
          width: 40
     }
});

export default PeopleListItem;