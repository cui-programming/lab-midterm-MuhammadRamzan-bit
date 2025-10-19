import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native'; // You may switch Text to ui/Text later
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

/**
 * Custom/TasbihList
 * Renders a FlatList of azkaar with their counts.
 * NOTE: Increment/Decrement buttons are intentionally NOT implemented.
 * Students will add + and - controls using UI/Button and update state accordingly.
 */
export default function TasbihList() {
  const [tasbihList, setTasbihList] = useState([
    { phrase: 'SubhanAllah', count: 0 },
    { phrase: 'Alhamdulillah', count: 0 },
    { phrase: 'Allahu Akbar', count: 0 },
  ]);

  const increment = (i) => {
    setTasbihList(list =>
      list.map((item, index) =>
        index === i ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrement = (i) => {
    setTasbihList(list =>
      list.map((item, index) =>
        index === i && item.count > 0 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  return (
    <View style={styles.tasbihContainer}>
      <Text style={styles.teacherHeading}>Tasbih List</Text>
      {tasbihList.map((item, i) => (
        <View key={i} style={styles.tasbihItem}>
          <Text style={styles.tasbihText}>{item.phrase}</Text>
          <Text style={styles.tasbihCount}>{item.count}</Text>
          <View style={styles.buttonRow}>
            <Button title="+" onPress={() => increment(i)} />
            <Button title="-" onPress={() => decrement(i)} />
          </View>
        </View>
      ))}
    </View>
  );
}
