import React, { useState } from 'react';
import { View, Text, TextInput, Button } from '../ui';
import { styles } from '../../style/styles';

export default function SearchAndAdd({ items, addTasbih }) {
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');

  const filteredItems = items.filter((item) =>
    item.phrase.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.searchContainer}>
      <Text style={styles.teacherHeading}>Search & Add Tasbih</Text>

      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
      />

      <TextInput
        style={styles.input}
        placeholder="Add new phrase"
        value={newItem}
        onChangeText={setNewItem}
      />

      <Button
        title="Add"
        onPress={() => {
          addTasbih(newItem);
          setNewItem('');
        }}
      />
    </View>
  );
}
