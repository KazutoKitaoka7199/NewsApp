import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function ListItem({ imageUrl, title, author }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        {!!imageUrl
          && (
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: imageUrl }}
          />
          )}
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3}>
          {title}
        </Text>
        <Text style={styles.subtext}>{author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.5,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flexDirection: 'column',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  subtext: {
    fontSize: 12,
    color: 'gray',
  },
});
