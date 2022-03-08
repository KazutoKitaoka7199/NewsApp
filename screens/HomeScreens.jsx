import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Alert } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import ListItem from '../components/ListItem';

export default function HomeScreens() {
  const [articles, setArticles] = useState();
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      Alert.alert('データの読み取りに失敗しました。しばらく経ってから再度お試しください');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        // FlatListで表示したいデータ
        data={articles}
        // itemにはarticlesの１項目のarticleが入ってくる
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            auther={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
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
