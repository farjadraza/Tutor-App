import React, {useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    ImageBackground,
    useColorScheme,
    Image,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {useTogglePasswordVisibility} from '../Component/UseTogglePasswordVisibility'
const Login = ({ navigation }) => {

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

    return (
        <View style={{ width: '100%',height:'100%',backgroundColor:'#18095A' }}>
                <ScrollView >
                <View style={{ width: '100%', height:'25%',backgroundColor:'white' }}>
                    <Image source={require('../assets/Group131.png')} style={{ width: 200, height: 125, resizeMode: 'contain', alignSelf: 'center' }} />
                </View>
                <View style={{ width: '100%', height:'80%', backgroundColor: '#18095A', borderTopRightRadius: 35, borderTopLeftRadius: 35, justifyContent: 'center', alignItems: 'center',marginBottom:'auto',overflow:'hidden',marginTop:-40 }}>
                    <View style={{ width: '85%', height: '100%' }}>
                        <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white',marginTop:15 }}>
                            Sign in
                        </Text>
                        <Text style={{ fontSize: 15, color: '#AAAAAA', marginTop: 5 }}>
                            Sign in with your information
                        </Text>

                        <View style={{ marginTop: 25 }}>
                            <Text style={{ fontSize: 20, marginLeft: 5, color: 'white' }}>
                                Email/Username
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                                <TextInput style={{ width: '100%', height: 40, backgroundColor: '#2E2169', marginTop: 5, borderRadius: 7, paddingLeft: 10, color:'white' }}
                                // onChangeText={newText => setEmail(newText)}
                                // defaultValue={email}
                                >
                                </TextInput>


                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 20, marginLeft: 5, color: 'white' }}>
                                Password
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '100%',height:40, backgroundColor: '#2E2169', borderRadius: 7, marginTop: 5 }}>
                                <TextInput style={{ width: '90%', height: 40, marginTop: 5, paddingLeft: 15,color:'white', }}
                                    secureTextEntry={passwordVisibility}
                                // onChangeText={newText => setEmail(newText)}
                                // defaultValue={email}
                                >
                                </TextInput>

                                <View style={{ width: '10%', alignItems: 'center', marginRight: 5 }}>
                                    <TouchableOpacity onPress={handlePasswordVisibility}>
                                    <Icon name={rightIcon} size={22} color="#E7502B" />
                                    {/* <Image source={require('../assets/Vector(12).png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} >
                                        </Image> */}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 5, marginTop: 5 }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, color: 'white' }}>
                                    Forgot Password ?
                                </Text>
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity style={{ width: '100%', height: 45, borderRadius: 7, backgroundColor: '#ED5126', justifyContent: 'center', marginTop: 40 }} onPress={() => navigation.navigate('Home')} >
                            <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}>
                                Submit
                            </Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 'auto', marginRight: 5 }}>
                            <Text style={{ fontSize: 15, color: '#AAAAAA', textAlign: 'center' }}>
                                Don't have an account ?
                            </Text>
                            <TouchableOpacity style={{ alignContent: 'center' }} onPress={() => navigation.navigate('SignUp')}>
                                <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '100%', flexDirection: 'row', marginTop: 55 }}>
                            <View style={{ width: '35%', borderTopWidth: 1, borderTopColor: '#AAAAAA' }}>

                            </View>

                            <View style={{ width: '30%', }}>
                                <Text style={{ fontSize: 25, textAlign: 'center', marginTop: -13, color: '#AAAAAA' }}>
                                    or with
                                </Text>
                            </View>
                            <View style={{ width: '35%', borderTopWidth: 1, borderTopColor: '#AAAAAA' }}>

                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20,paddingBottom:60 }}>
                            <TouchableOpacity>
                                <View style={{ width: 50, height: 50, borderRadius: 30, borderColor: '#AAAAAA', borderWidth: 1, justifyContent: 'center' }}>
                                    <Image source={require('../assets/Vector(10).png')} style={{ width: 30, height: 30, resizeMode: 'contain', alignSelf: 'center' }} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{ width: 50, height: 50, borderRadius: 30, borderColor: '#AAAAAA', borderWidth: 1, justifyContent: 'center', marginLeft: 15 }}>
                                    <Image source={require('../assets/Vector(11).png')} style={{ width: 30, height: 30, resizeMode: 'contain', alignSelf: 'center' }} />
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>



                </View>
        </ScrollView>
            </View>
    )
}
export default Login