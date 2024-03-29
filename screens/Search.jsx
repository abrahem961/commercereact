import {Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {COLORS,SIZES} from "../constants";
import { TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import  styles from "./search.style";
const Search = () => {
  return (
    <SafeAreaView>
        <View style={styles.searchContainer}> 
<TouchableOpacity>
<Ionicons name="camera-outline" size={SIZES.xxLarge -14} style={styles.searchIcon} paddingTop={7}   />
  
</TouchableOpacity>
<View style={styles.searchWrapper}>
<TextInput
style={styles.searchInput}
value=""
onPressIn={()=>{}}
placeholder="what are you looking for"
/>
</View>
<View>
        <TouchableOpacity style={styles.searchBtn}>
        <Feather name="search" size={24} style={styles.searchIcon} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
      </View>
     
   
    </SafeAreaView>
  )
}

export default Search

