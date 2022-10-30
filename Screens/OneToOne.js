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

const OneToOne = ({navigation}) => {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <View style={{ width: '100%', height: '55%', backgroundColor: 'white' }}>
                <Image source={require('../assets/pana.png')} style={{ width: 350, height: 350, resizeMode: 'contain', alignSelf: 'center' }} />
            </View>
            <View style={{ width: '100%', height: '45%', backgroundColor: '#18095A', borderTopRightRadius: 35, borderTopLeftRadius: 35, justifyContent: 'center' }}>
                <View style={{ width: '85%', alignSelf: 'center', height: '85%', alignContent: 'center',marginBottom:'5%', }}>
                    <View style={{ alignSelf: 'center', width: '90%', marginTop:20 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 35, fontWeight:'bold', }}>
                        One-to-One Personalized Tution
                        </Text>
                    </View>

                    <View style={{ alignSelf: 'center', width: '60%', marginTop: 40 }}>
                        <Text style={{ textAlign: 'center', fontSize:15,color:'#AAAAAA'}}>
                            Discover the Best Tutor from across 1000+ Choices
                        </Text>

                    </View>

                    <View style={{ width: '100%', height: '10%', flexDirection: 'row', marginTop:'auto',marginBottom:0 }}>
                        <View style={{ width: '20%', height: '100%',justifyContent:'center' }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                                <Text style={{textAlign:'center',color:'white'}}>
                                    Skip
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '60%', height: '100%',flexDirection:'row',justifyContent:'center',alignItems:'center' }}>
                        <Image source={require('../assets/dot.png')} style={{ width: 5, height:5, resizeMode: 'contain', }} />
                        <Image source={require('../assets/Rectangle.png')} style={{ width: 25, height:10, resizeMode: 'contain',marginLeft:10 }} />
                        <Image source={require('../assets/dot.png')} style={{ width: 5, height:5, resizeMode: 'contain',marginLeft:10 }} />
                           
                        </View>

                        <View style={{ width: '20%', height: '100%',justifyContent:'center' }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Examination')}>
                                <Text style={{textAlign:'center',color:'white'}}>
                                    Next
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default OneToOne