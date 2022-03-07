import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Alert } from 'react-native';
import ListItem from './components/ListItem';
import dammyArticles from './dummies/articles.json';

export default function App() {
  const [articles, setArticles] = useState();
  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(dammyArticles);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: 30,
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
