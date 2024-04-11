import { View,StyleSheet, Dimensions,Button } from "react-native"
import { ImageComponent } from "../components/ImageComponent"
import { useNavigation } from "@react-navigation/native"


export const Home = () =>{

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <ImageComponent/>
            <View>
                <Button style={styles.button} title="SignUp" onPress={()=>navigation.navigate("SignUp")}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent:"space-evenly",
        flex:1,
        backgroundColor:"black",
    },
    
})