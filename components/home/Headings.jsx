import { TouchableOpacity ,Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import styles from './Headings.style';


const Headings = () => {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
          <Text style={styles.headerTitle}>new rivels</Text>
           <TouchableOpacity >
              <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
           </TouchableOpacity>
       </View>
    </View>
  )
}

export default Headings

