import { StyleSheet } from "react-native";
import{COLORS ,SIZES} from "../constants/index";

const styles = StyleSheet.create({
textStyle:{
    fontFamily:"bold",
    fontSize:40,
},
appBarWrapper:{
   marginHorizontal:22,
   marginTop:SIZES.small,
  
},
appBar:{
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"right"
},
location:{
    fontFamily: "medium",
    fontSize:SIZES.medium,
    color:COLORS.grey,
},
cartCount:{
position:"absolute",
bottom:16,

},
cartNumber:{
    fontFamily:"reguler",
    fontWeight:"600",
    fontSize:10,
    color:COLORS.lightWhite
}

})

export default styles