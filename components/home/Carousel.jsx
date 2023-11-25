import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import{COLORS ,SIZES} from "../../constants";

const Carousel = () => {
    const slides=[
      "https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://buffer.com/library/content/images/2023/10/free-images.jpg",
"https://images.unsplash.com/photo-1486663845017-3eedaa78617f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHx8fDA%3D",
      ]
  return (

    <View style={styles.carouselContainer}>
      <SliderBox images={slides}
          dotColor={COLORS.primary}
         inactiveDotColor= {COLORS.secondary}
          ImageComponentStyle ={{borderRadius: 12 ,width:"90%",marginTop: 10}}
          containerCustomStyle={{ overflow: 'visible' }}
          autoplay
          circleloop   />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
carouselContainer:{
fex:1,
overflow: 'visible' ,
alignItems:"center",}


})