import { StyleSheet } from "react-native";
import{COLORS ,SIZES} from "../../constants";

const styles=StyleSheet.create({
    container:{
        width:"100%"
    },
    welcomeTxt:(color,top)=>({
fontFamily:"bold",
fontSize:SIZES.xxLarge -6,
marginTop:top,
color:color,
margenHorizontal:SIZES.small,

    }),
    searchContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
        height:50,

    },
    searchIcon:{
        marginHorizontal:10,
        color:COLORS.gray
    },
    searchWrapper:{
        flex:1,
        backgroundColor:COLORS.secondary,
        marginTop:SIZES.small,
        borderRadius:SIZES.small,
    },
    searchInput:{
fontFamily: "reguler",
width:"100%",
height:"100%",
        paddingHorizontal:SIZES.small,
        paddingBottom:15
    },
    searchBtn:{
        width:50,
        height:"100%",
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.medium,
        justifyContent:"center",
        alignContent:"center",
        

    }

})

export default styles