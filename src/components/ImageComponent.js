import { View,Image,Text,StyleSheet,Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width

export const ImageComponent = () =>{
    return(
        <View>
            <Image style={styles.logo} source={{uri:"https://mediaserver.goepson.com/ImConvServlet/imconv/08aea9a09fd1563a068f07dc07f511a663e26632/original?use=banner"}}/>
            <Image style={styles.image} source={{uri:"https://cdn.motor1.com/images/mgl/ZnGQbN/s1/mercedes-amg-gt-gt2-pro.jpg"}}/>
            <Text style={styles.text}>GT2 Pro, mevcut Mercedes-AMG GT2 modelinden yola çıkıyor, ancak önemli yeniliklerle donatılmış durumda. Aracın çift turbolu 4.0 litre V8 motoru, Push2Pass sistemi adı verilen özel bir teknoloji ile güçlendirilmiş. Bu sistem sayesinde normal sürüşte 697 beygir gücünden (520 kW) geçici olarak 739 beygir gücüne (551 kW) çıkabiliyor. Altı vitesli şanzımanın dişli oranları da özel olarak ayarlanmış.</Text> 
        </View>
    )
}

const styles=StyleSheet.create({
    text:{
        fontSize:12,
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
        width:"90%",
        alignSelf:"center"
    },
    image:{
        width:screenWidth-14,
        height:235,
        resizeMode:"contain",
        borderWidth:1,
        borderRadius:18,
        marginBottom:16,
        borderColor:"#00A19B",
        alignSelf:"center"
    },
    logo:{
        width:screenWidth-14,
        height:120,
        resizeMode:"contain",
        marginBottom:16,
        alignSelf:"center"
    },
})