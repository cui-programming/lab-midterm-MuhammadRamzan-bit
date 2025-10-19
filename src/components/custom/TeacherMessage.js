import React from 'react';
import { View, Text } from '../ui';
import { styles } from '../../style/styles';

export default function TeacherMessage() {
  return (
    <View style={styles.aboutBox}>
      <Text style={styles.aboutHeading}>Message from Teacher</Text>
      <Text style={styles.aboutText}>
        Remember, coding is a skill — practice every day and stay consistent!
      </Text>
    </View>
  );
}

