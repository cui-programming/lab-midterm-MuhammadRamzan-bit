import React from 'react';
import { View, Text } from '../ui';
import { styles } from '../../style/styles'; 
import student from '../../config/student';

export default function AboutMe() {
  return (
    <View style={styles.aboutBox}>
      <Text style={styles.aboutHeading}>About Me</Text>
      <Text style={styles.aboutText}>Name: {student.name}</Text>
      <Text style={styles.aboutText}>Registration No: {student.regNo}</Text>
      <Text style={styles.aboutText}>
        Course: Mobile Application Development
      </Text>
    </View>
  );
}




