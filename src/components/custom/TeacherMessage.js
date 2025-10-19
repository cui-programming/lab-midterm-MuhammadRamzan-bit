// import React from 'react';
// import { View, Text, Button } from '../ui';
// import styles from '../../style/styles';

// export default function TeacherMessage() {
//   const handlePress = () => alert("Message sent to teacher!");

//   return (
//     <View style={styles.teacherBox}>
//       <Text style={styles.teacherHeading}>Message from Teacher</Text>
//       <Text style={styles.teacherText}>
//         Dear student, make sure to complete all tasks before submission time.
//       </Text>
//       <Button title="Send Acknowledgment" onPress={handlePress} />
//     </View>
//   );
// }


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
