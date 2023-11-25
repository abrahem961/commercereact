import { Image, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import styles from './productDetails.style'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const ProductDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
<TouchableOpacity onPress={()=>navigation.goBack()}>
  <Ionicons name="chevron-back-circle" size={30} />
</TouchableOpacity>
<TouchableOpacity onPress={()=>{}}>
  <Ionicons name="heart" size={30} />
</TouchableOpacity>
      </View>
      <Image  source={{uri :"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"}} />
    </View>
  )
}

export default ProductDetails

