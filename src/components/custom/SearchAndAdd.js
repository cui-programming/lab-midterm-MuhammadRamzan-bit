import React from 'react';
import { View } from 'react-native';
import { styles } from '../../styles/styles';

/**
 * Custom/SearchAndAdd
 * Students implement:
 *  - a text box to add a new zikr (phrase only, count starts at 0)
 *  - a search box to filter existing azkaar by phrase
 *  - use only components from 'ui' for inputs and buttons
 *  - lifting state up if needed
 */
export default function SearchAndAdd() {
  const [items, setItems] = useState(['SubhanAllah', 'Alhamdulillah', 'Allahu Akbar']);
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (newItem.trim() && !items.includes(newItem.trim())) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    } else {
      alert('Already exists or invalid input!');
    }
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
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

      <Button title="Add" onPress={handleAdd} />

      {filteredItems.map((item, index) => (
        <Text key={index} style={styles.resultText}>{item}</Text>
      ))}
    </View>
  );
}

