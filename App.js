import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './src/style/styles';

import AboutMe from './src/component/custom/AboutMe';
import TeacherMessage from './src/component/custom/TeacherMessage';
import TasbihList from './src/component/custom/TasbihList';
import SearchAndAdd from './src/component/custom/SearchAndAdd';
import { initialAzkaar } from './src/data/azkaar'; //  Imported azkaar data

export default function App() {
  //  Shared tasbih state (used by both components)
  const [tasbihItems, setTasbihItems] = useState(initialAzkaar);

  //  Increment tasbih count
  const increment = (id) => {
    setTasbihItems(items =>
      items.map(it =>
        it.id === id ? { ...it, count: it.count + 1 } : it
      )
    );
  };

  //  Decrement tasbih count
  const decrement = (id) => {
    setTasbihItems(items =>
      items.map(it =>
        it.id === id && it.count > 0 ? { ...it, count: it.count - 1 } : it
      )
    );
  };

  //  Add new tasbih phrase
  const addTasbih = (phrase) => {
    if (!phrase.trim()) return alert('Invalid input!');
    const exists = tasbihItems.some(it => it.phrase.toLowerCase() === phrase.toLowerCase());
    if (exists) return alert('Already exists!');
    setTasbihItems([
      ...tasbihItems,
      { id: Date.now().toString(), phrase: phrase.trim(), count: 0 }
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <AboutMe />
      </View>

      <View style={styles.section}>
        <TeacherMessage />
      </View>

      <View style={styles.section}>
        <TasbihList
          items={tasbihItems}
          onIncrement={increment}
          onDecrement={decrement}
        />
      </View>

      <View style={styles.section}>
        <SearchAndAdd onAdd={addTasbih} />
      </View>
    </ScrollView>
  );
}
