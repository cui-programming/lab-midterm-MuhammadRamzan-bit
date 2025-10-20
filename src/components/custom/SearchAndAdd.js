import React, { useState } from 'react';
import { View, Text, TextInput, Button } from '../ui';
import { styles } from '../../style/styles'; 

export default function SearchAndAdd({ onAdd, search, setSearch }) {
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    onAdd(newItem);
    setNewItem('');
  };

  return (
    <View style={styles.searchContainer}>
      <Text style={styles.teacherHeading}>Search & Add Tasbih</Text>

      <TextInput
        style={styles.input}
        placeholder="Search Tasbih..."
        value={search}
        onChangeText={setSearch}
      />

      <TextInput
        style={styles.input}
        placeholder="Add new phrase"
        value={newItem}
        onChangeText={setNewItem}
      />

      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}
