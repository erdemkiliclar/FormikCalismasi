import { View, Text,StyleSheet,Dimensions,Image, TextInput, TouchableOpacity,Button } from 'react-native'
import React from 'react'
import {Formik} from "formik"
import * as Yup from "yup"
import { ImageComponent } from '../components/ImageComponent';
import { useNavigation } from "@react-navigation/native"
import { Home } from './Home';




const screenWidth = Dimensions.get("window").width

export const SingUp = () => {
    const navigation = useNavigation()

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string()
        .email('Invalid email')
        .required('Required'),
        password:Yup.string()
        .min(8)
        .required("Required")
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Parola çok basit"),
        confirmPassword:Yup.string()
        .min(8)
        .oneOf([Yup.ref("password")],"şifreler uyuşmuyor")
        .required('Required')
      });

  return (
  

        <Formik initialValues={{
            username:"",
            email:"",
            password:"",
            confirmPassword:""
        }}
        
        validationSchema={SignupSchema}
        onSubmit={values => {
            console.log(values)
        }}
        >
            {({values,touched,errors,handleChange,setFieldTouched,isValid,handleSubmit})=>(
                <View style={styles.container}>

                <Image style={styles.logo} source={{uri:"https://mediaserver.goepson.com/ImConvServlet/imconv/08aea9a09fd1563a068f07dc07f511a663e26632/original?use=banner"}}/>
                <View style={styles.signupContainer}>

                    <View style={styles.inputWraffer}>
                        <Text style={styles.text}>Username</Text>
                        <TextInput
                            style={styles.inputStyle} 
                            autoCapitalize='false'
                            value={values.username}
                            onChangeText={handleChange("username")}
                            onBlur={()=>setFieldTouched("username")}
                            />
                        {touched.username && errors.username && (
                            <Text style={styles.errorText}>{errors.username}</Text>
                        )}
                    </View>
                    <View style={styles.inputWraffer}>
                    <Text style={styles.text}>Email</Text>
                        <TextInput
                            style={styles.inputStyle} 
                            autoCapitalize='false'
                            value={values.email}
                            onChangeText={handleChange("email")}
                            onBlur={()=>setFieldTouched("email")}
                            />
                        {touched.email && errors.email && (
                            <Text style={styles.errorText}>{errors.email}</Text>
                        )}
                    </View>
                    <View style={styles.inputWraffer}>
                    <Text style={styles.text}>Password</Text>
                        <TextInput
                            style={styles.inputStyle} 
                            autoCapitalize='false'
                            value={values.password}
                            onChangeText={handleChange("password")}
                            onBlur={()=>setFieldTouched("password")}
                            />
                        {touched.password && errors.password && (
                            <Text style={styles.errorText}>{errors.password}</Text>
                        )}
                    </View>
                    <View style={styles.inputWraffer}>
                    <Text style={styles.text}>Confirm Password</Text>
                        <TextInput
                            style={styles.inputStyle} 
                            autoCapitalize='false'
                            value={values.confirmPassword}
                            onChangeText={handleChange("confirmPassword")}
                            onBlur={()=>setFieldTouched("confirmPassword")}
                            />
                        {touched.confirmPassword && errors.confirmPassword && (
                            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                        )}
                    </View>
                    <TouchableOpacity
                    onPress={handleSubmit} 
                    style={[styles.submitButton,{backgroundColor: isValid ? "#395B64" : "#A5C9CA"}]} 
                    disabled={!isValid}
                    
                    >
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
            )}
        </Formik>
  )
}


const styles=StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    signupContainer:{
        padding:20,
        width:"100%", 
        height:"50%",
        backgroundColor:"#00A19B",
        borderRadius:15,
        justifyContent:"center",
        top:-50,
    },
    logo:{
        width:screenWidth-14,
        height:120,
        resizeMode:"contain",
        marginBottom:16,
        alignSelf:"center",
    },
    inputStyle:{
        borderColor:"black",
        borderWidth:1,
        borderRadius:10,
        padding:10,
        borderWidth:3
      },
      inputWraffer:{
        marginBottom:15
      },
      errorText:{
        fontSize:12,
        color:"#FF0D10"
      },
      submitButton:{
        backgroundColor:"#395B64",
        padding:10,
        borderRadius:15,
        justifyContent:"center",
        width:"50%",
        alignSelf:"center"
      },
      submitButtonText:{
        color:"#fff",
        textAlign:"center",
        fontSize:18,
        fontWeight:"700"
      },
      text:{
        paddingLeft:10,
        fontSize:15,
        fontStyle:"italic"
      }
})
