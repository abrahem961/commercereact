import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Fontisto, Ionicons} from "@expo/vector-icons";
import styles from "./home.style";
import { ScrollView } from "react-native";
import Welcome from "../components/home/Welcome"
const Home = () => {
  return (
    <SafeAreaView>
     <View style={styles.appBarWrapper}>
      <View style={styles.appBar}>
<Ionicons
   name="location"  size={24} />
         <Text style={styles.location}>syria tartous</Text>
               <View style={{ alignItems:"flex-end"}}>
                  <View style={styles.cartCount}>
                      <Text style={styles.cartNumber}>888</Text>

  </View>
  <TouchableOpacity>
   
<Fontisto name="shopping-bag"   size={24}/>
 </TouchableOpacity>
  </View>
</View>
     </View>
    <ScrollView>
      <Welcome />
    </ScrollView>
    </SafeAreaView>
  )
}
 
export default Home

