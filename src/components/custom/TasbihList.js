import React from 'react';
import { View } from 'react-native';
import { Text, Button } from '../ui';
import { styles } from '../../style/styles';

export default function TasbihList({ items, increment, decrement }) {
  return (
    <View style={styles.tasbihContainer}>
      <Text style={styles.teacherHeading}>Tasbih Counter</Text>

      {items.length === 0 ? (
        <Text style={styles.resultText}>No results found</Text>
      ) : (
        items.map((item) => (
          <View key={item.id} style={styles.tasbihItem}>
            <Text style={styles.tasbihText}>{item.phrase}</Text>
            <Text style={styles.tasbihCount}>{item.count}</Text>
            <View style={styles.buttonRow}>
              <Button title="+" onPress={() => increment(item.id)} />
              <Button title="-" onPress={() => decrement(item.id)} />
            </View>
          </View>
        ))
      )}
    </View>
  );
}
