import React from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './src/style/styles';

import AboutMe from './src/component/custom/AboutMe';
import TeacherMessage from './src/component/custom/TeacherMessage';
import TasbihList from './src/component/custom/TasbihList';
import SearchAndAdd from './src/component/custom/SearchAndAdd';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <AboutMe />
      </View>

      <View style={styles.section}>
        <TeacherMessage />
      </View>

      <View style={styles.section}>
        <TasbihList />
      </View>

      <View style={styles.section}>
        <SearchAndAdd />
      </View>
    </ScrollView>
  );
}



