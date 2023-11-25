import { StyleSheet } from "react-native";
import {COLOR,COLORS,SIZES} from "../../constants";

const styles =StyleSheet.create({
container:{
  width:182,
  height:240,
  marginEnd:22,
  borderRadius:SIZES.medium,
  backgroundColor:COLORS.secondary,
},
imageContainer:{
  flex:1,
  width:"100%",
  marginleft:SIZES.small/2,
  marginTop:SIZES.small/2,
  borderRadius:SIZES.small,
  overflow:"hidden"
},
image:{
aspectRatio:1,
resizeMode:'cover'
},
details:{
  padding:SIZES.small,

},
title:{
fontFamily: "bold",
fontSize:SIZES.large,
marginBottom:1,
paddingLeft:26

},
supplier:{
fontFamily:"light",
fontSize:SIZES.small,
color:COLORS.gray,
paddingLeft:26

},
price:{
  fontFamily:"bold",
  fontSize:SIZES.medium,
  paddingLeft:26
},
addBtn:{

  position: "absolute",
  bottom:SIZES.xSmall,
  right:SIZES.xSmall,
  marginRight:-5
}

})
export default styles;