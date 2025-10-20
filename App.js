import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './src/style/styles';

import AboutMe from './src/component/custom/AboutMe';
import TeacherMessage from './src/component/custom/TeacherMessage';
import TasbihList from './src/component/custom/TasbihList';
import SearchAndAdd from './src/component/custom/SearchAndAdd';

export default function App() {
  //  Shared tasbih list
  const [tasbihItems, setTasbihItems] = useState([
    { id: 1, phrase: 'SubhanAllah', count: 0 },
    { id: 2, phrase: 'Alhamdulillah', count: 0 },
    { id: 3, phrase: 'Allahu Akbar', count: 0 },
    { id: 4, phrase: 'Lā ilāha illā Allāh', count: 0 },
  ]);

  // ➕ Add new phrase
  const addTasbih = (newPhrase) => {
    if (
      newPhrase.trim() &&
      !tasbihItems.some((item) => item.phrase.toLowerCase() === newPhrase.toLowerCase())
    ) {
      setTasbihItems([
        ...tasbihItems,
        { id: Date.now(), phrase: newPhrase.trim(), count: 0 },
      ]);
    } else {
      alert('Already exists or invalid input!');
    }
  };

  //  Increment &  Decrement functions
  const increment = (id) => {
    setTasbihItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, count: it.count + 1 } : it))
    );
  };

  const decrement = (id) => {
    setTasbihItems((prev) =>
      prev.map((it) => (it.id === id && it.count > 0 ? { ...it, count: it.count - 1 } : it))
    );
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
        {/* Pass items + increment/decrement */}
        <TasbihList
          items={tasbihItems}
          increment={increment}
          decrement={decrement}
        />
      </View>

      <View style={styles.section}>
        {/*  Pass items + addTasbih */}
        <SearchAndAdd items={tasbihItems} addTasbih={addTasbih} />
      </View>
    </ScrollView>
  );
}
