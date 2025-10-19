import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from '../ui';
import { styles } from '../../style/styles';
import { initialAzkaar } from '../../data/azkaar';

export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  const increment = (id) => {
    setItems(items.map(it => it.id === id ? { ...it, count: it.count + 1 } : it));
  };

  const decrement = (id) => {
    setItems(items.map(it => it.id === id && it.count > 0 ? { ...it, count: it.count - 1 } : it));
  };

  return (
    <View style={styles.tasbihContainer}>
      <Text style={styles.teacherHeading}>Tasbih Counter</Text>

      {items.map((item, i) => (
        <View key={i} style={styles.tasbihItem}>
          <Text style={styles.tasbihText}>{item.phrase}</Text>
          <Text style={styles.tasbihCount}>{item.count}</Text>

          <View style={styles.buttonRow}>
            <Button title="+" onPress={() => increment(item.id)} />
            <Button title="-" onPress={() => decrement(item.id)} />
          </View>
        </View>
      ))}
    </View>
  );
}
