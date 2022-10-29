import React from 'react';
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

const SignUp = ({navigation}) => {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <ScrollView >
                <View style={{ width: '100%', height: 130, backgroundColor: 'white' }}>
                    <Image source={require('../assets/Group131.png')} style={{ width: 200, height: 125, resizeMode: 'contain', alignSelf: 'center' }} />
                </View>
                <View style={{ width: '100%', height: 'auto', backgroundColor: '#18095A', borderTopRightRadius: 35, borderTopLeftRadius: 35, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '85%', height: '90%', }}>
                        <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white' }}>
                            Sign Up
                        </Text>
                        <Text style={{ fontSize: 15, color: '#AAAAAA', marginTop: 5 }}>
                            Sign in with your information
                        </Text>

                        <View style={{ marginTop: 25 }}>
                            <Text style={{ fontSize: 20, marginLeft: 5 }}>
                                Full Name
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                                <TextInput style={{ width: '100%', height: 40, backgroundColor: '#2E2169', marginTop: 5, borderRadius: 7, paddingLeft: 10 }}
                                // onChangeText={newText => setEmail(newText)}
                                // defaultValue={email}
                                >
                                </TextInput>


                            </View>
                        </View>

                        <View style={{ marginTop: 25 }}>
                            <Text style={{ fontSize: 20, marginLeft: 5 }}>
                                Phone
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                                <TextInput style={{ width: '100%', height: 40, backgroundColor: '#2E2169', marginTop: 5, borderRadius: 7, paddingLeft: 10 }}
                                keyboardType='number-pad'
                                // onChangeText={newText => setEmail(newText)}
                                // defaultValue={email}
                                >
                                </TextInput>


                            </View>
                        </View>

                        <View style={{ marginTop: 25 }}>
                            <Text style={{ fontSize: 20, marginLeft: 5 }}>
                                Email
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                                <TextInput style={{ width: '100%', height: 40, backgroundColor: '#2E2169', marginTop: 5, borderRadius: 7, paddingLeft: 10 }}
                                // onChangeText={newText => setEmail(newText)}
                                // defaultValue={email}
                                >
                                </TextInput>


                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 20, marginLeft: 5 }}>
                                Password
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '100%', backgroundColor: '#2E2169', borderRadius: 7, marginTop: 5 }}>
                                <TextInput style={{ width: '90%', height: 40, marginTop: 5, paddingLeft: 10 }}
                                    secureTextEntry={true}
                                // onChangeText={newText => setEmail(newText)}
                                // defaultValue={email}
                                >
                                </TextInput>

                                <View style={{ width: '10%', alignItems: 'center', marginRight: 5 }}>
                                    <TouchableOpacity>
                                        <Image source={require('../assets/Vector(12).png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} >
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 20, marginLeft: 5 }}>
                                Confirm Password
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '100%', backgroundColor: '#2E2169', borderRadius: 7, marginTop: 5 }}>
                                <TextInput style={{ width: '90%', height: 40, marginTop: 5, paddingLeft: 10 }}
                                    secureTextEntry={true}
                                // onChangeText={newText => setEmail(newText)}
                                // defaultValue={email}
                                >
                                </TextInput>

                                <View style={{ width: '10%', alignItems: 'center', marginRight: 5 }}>
                                    <TouchableOpacity>
                                        <Image source={require('../assets/Vector(12).png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} >
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={{ width: '100%', height: 45, borderRadius: 7, backgroundColor: '#ED5126', justifyContent: 'center', marginTop: 40 }} >
                            <Text style={{ fontSize: 20, textAlign: 'center' }}>
                                Submit
                            </Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginTop: 10,justifyContent:'center' }}>
                            <Text style={{ fontSize: 15, color: '#AAAAAA', textAlign: 'center' }}>
                                Already have an account ?
                            </Text>
                            <TouchableOpacity style={{ alignContent: 'center' }} onPress={()=>navigation.navigate('Login')}>
                                <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                                    Sign In
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

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20,marginBottom:90 }}>
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
export default SignUp