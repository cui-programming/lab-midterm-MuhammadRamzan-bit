import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './src/style/styles';

import AboutMe from './src/component/custom/AboutMe';
import TeacherMessage from './src/component/custom/TeacherMessage';
import TasbihList from './src/component/custom/TasbihList';
import SearchAndAdd from './src/component/custom/SearchAndAdd';
import { initialAzkaar } from './src/data/azkaar';

export default function App() {
  const [tasbihItems, setTasbihItems] = useState(initialAzkaar);
  const [searchQuery, setSearchQuery] = useState('');

  const increment = (id) => {
    setTasbihItems(items =>
      items.map(it => it.id === id ? { ...it, count: it.count + 1 } : it)
    );
  };

  const decrement = (id) => {
    setTasbihItems(items =>
      items.map(it =>
        it.id === id && it.count > 0 ? { ...it, count: it.count - 1 } : it
      )
    );
  };

  const addTasbih = (newPhrase) => {
    if (!newPhrase.trim()) return alert('Invalid input!');
    if (tasbihItems.some(it => it.phrase.toLowerCase() === newPhrase.toLowerCase())) {
      return alert('Already exists!');
    }

    const newItem = {
      id: (tasbihItems.length + 1).toString(),
      phrase: newPhrase,
      count: 0,
    };

    setTasbihItems([...tasbihItems, newItem]);
  };

  // Filter items by search
  const filteredItems = tasbihItems.filter(it =>
    it.phrase.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <AboutMe />
      </View>

      <View style={styles.section}>
        <TeacherMessage />
      </View>

      <View style={styles.section}>
        <SearchAndAdd
          onAdd={addTasbih}
          search={searchQuery}
          setSearch={setSearchQuery}
        />
      </View>

      <View style={styles.section}>
        <TasbihList
          items={filteredItems}
          increment={increment}
          decrement={decrement}
        />
      </View>
    </ScrollView>
  );
}
