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

const Home = ({ navigation }) => {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#F7F8F0' }}>
            <ScrollView>
                <View style={{ width: '95%', height: '100%', alignSelf: 'center', }}>
                    <View style={{ width: '100%', height: 'auto', flexDirection: 'row', marginTop: 20, }}>
                        <View style={{ width: '10%', height: 'auto', justifyContent: 'center' }}>
                            <TouchableOpacity>
                                <Image source={require('../assets/Vector.png')} style={{ width: 30, height: 30, resizeMode: 'contain', alignSelf: 'center' }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '80%', height: 'auto' }}>
                            <Text style={{ color: '#18095A', fontSize: 35, marginLeft: 40, marginTop: 1 }}>
                                Hi, John
                            </Text>
                        </View>

                        <View style={{ width: '10%', height: 'auto', justifyContent: 'center' }}>
                            <TouchableOpacity>
                                <Image source={require('../assets/Vector(1).png')} style={{ width: 30, height: 30, resizeMode: 'contain', alignSelf: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width: '100%', height: 40, flexDirection: 'row', marginTop: 20 }}>
                        <TextInput style={{ width: '83%', height: 40, backgroundColor: 'white', borderRadius: 7, paddingLeft: 10, color: 'black' }}
                            placeholder='Search here'
                            placeholderTextColor="#898989"
                        // onChangeText={newText => setEmail(newText)}
                        // defaultValue={email}
                        >
                        </TextInput>

                        <View style={{ width: 40, height: 40, borderRadius: 7, backgroundColor: '#18095A', justifyContent: 'center', marginLeft: 15 }}>
                            <TouchableOpacity>
                                <Image source={require('../assets/Vector(6).png')} style={{ width: 30, height: 30, resizeMode: 'contain', alignSelf: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width: '100%', height: 160, flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ width: '52%', height: 130, backgroundColor: '#0199DA', marginTop: 'auto', marginBottom: 0, justifyContent: 'center', borderBottomLeftRadius: 7, borderTopLeftRadius: 7 }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 10, }}>
                                Best Tutor in your town
                            </Text>
                            <Text style={{ fontSize: 13, marginTop: 10, marginLeft: 10 }}>
                                Scarlet is Well known English teacher with 2 years of experience
                            </Text>
                        </View>
                        <View style={{ width: '48%', height: 130, backgroundColor: '#0199DA', marginTop: 'auto', marginBottom: 0, borderBottomRightRadius: 7, borderTopRightRadius: 7 }}>
                            <Image source={require('../assets/lady.png')} style={{ width: 150, height: 192, resizeMode: 'contain', marginLeft: 'auto', marginRight: 0, marginTop: -45 }} />
                        </View>

                    </View>

                    <View style={{ width: '100%', height: 'auto', marginTop: 15, flexDirection: 'row', }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                                Subjects
                            </Text>
                        </View>

                        <View style={{ marginLeft: 'auto', marginRight: 0, flexDirection: 'row', marginTop: 'auto', marginBottom: 0 }}>
                            <Text style={{ color: 'black' }}>
                                See all
                            </Text>
                            <View style={{ justifyContent: 'center', marginLeft: 2 }}>
                                <Image source={require('../assets/Vector(13).png')} style={{ width: 8, height: 8, resizeMode: 'contain', }} />
                            </View>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 70, height: 80, marginTop: 15, marginRight: 10 }}>
                            <View style={{ width: 70, height: 70, backgroundColor: '#E1E0E1', justifyContent: 'center', borderRadius: 10 }}>
                                <Image source={require('../assets/Vector(2).png')} style={{ width: 40, height: 40, resizeMode: 'contain', alignSelf: 'center' }} />
                            </View>

                            <View style={{ width: 70, height: 20, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', color: 'black' }}>
                                    Biology
                                </Text>
                            </View>

                        </View>

                        <View style={{ width: 70, height: 80, marginTop: 15, marginRight: 10 }}>
                            <View style={{ width: 70, height: 70, backgroundColor: '#F6E7DB', justifyContent: 'center', borderRadius: 10 }}>
                                <Image source={require('../assets/Vector(3).png')} style={{ width: 40, height: 40, resizeMode: 'contain', alignSelf: 'center' }} />
                            </View>

                            <View style={{ width: 70, height: 20, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', color: 'black' }}>
                                    Chemistry
                                </Text>
                            </View>

                        </View>

                        <View style={{ width: 70, height: 80, marginTop: 15, marginRight: 10 }}>
                            <View style={{ width: 70, height: 70, backgroundColor: '#DEEFEE', justifyContent: 'center', borderRadius: 10 }}>
                                <Image source={require('../assets/Vector(4).png')} style={{ width: 40, height: 40, resizeMode: 'contain', alignSelf: 'center' }} />
                            </View>

                            <View style={{ width: 70, height: 20, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', color: 'black' }}>
                                    Maths
                                </Text>
                            </View>

                        </View>

                        <View style={{ width: 70, height: 80, marginTop: 15, marginRight: 10 }}>
                            <View style={{ width: 70, height: 70, backgroundColor: '#E3E7ED', justifyContent: 'center', borderRadius: 10 }}>
                                <Image source={require('../assets/Vector(5).png')} style={{ width: 40, height: 40, resizeMode: 'contain', alignSelf: 'center' }} />
                            </View>

                            <View style={{ width: 70, height: 20, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', color: 'black' }}>
                                    Physics
                                </Text>
                            </View>

                        </View>

                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                            Services we offer
                        </Text>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignSelf: 'center' }}>
                        <View style={{ width: '43%', height: 160, backgroundColor: 'white', marginRight: 10, borderRadius: 7 }}>
                            <View style={{ width: '100%', height: 100, backgroundColor: 'pink' }}>
                                <Image source={require('../assets/Rectangle49.png')} style={{ width: 150, height: 150, resizeMode: 'contain', alignSelf: 'center', marginTop: -25 }} />

                            </View>
                            <View style={{ width: '100%', height: 30, marginLeft: 10, marginTop: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                                    Pre School
                                </Text>
                                <Text style={{ fontSize: 13, color: 'black' }}>
                                    108 teachers available
                                </Text>
                            </View>
                        </View>


                        <View style={{ width: '43%', height: 160, backgroundColor: 'white', marginRight: 10, borderRadius: 7 }}>
                            <View style={{ width: '100%', height: 100, backgroundColor: 'pink' }}>
                                <Image source={require('../assets/Rectangle49(1).png')} style={{ width: 150, height: 150, resizeMode: 'contain', alignSelf: 'center', marginTop: -25 }} />

                            </View>
                            <View style={{ width: '100%', height: 30, marginLeft: 10, marginTop: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                                    Primary School
                                </Text>
                                <Text style={{ fontSize: 13, color: 'black' }}>
                                    108 teachers available
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignSelf: 'center', marginBottom: 20 }}>
                        <View style={{ width: '43%', height: 160, backgroundColor: 'white', marginRight: 10, borderRadius: 7 }}>
                            <View style={{ width: '100%', height: 100, backgroundColor: 'pink' }}>
                                <Image source={require('../assets/Rectangle49(2).png')} style={{ width: 150, height: 150, resizeMode: 'contain', alignSelf: 'center', marginTop: -25 }} />

                            </View>
                            <View style={{ width: '100%', height: 30, marginLeft: 10, marginTop: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                                    Secondary School
                                </Text>
                                <Text style={{ fontSize: 13, color: 'black' }}>
                                    108 teachers available
                                </Text>
                            </View>
                        </View>


                        <View style={{ width: '43%', height: 160, backgroundColor: 'white', marginRight: 10, borderRadius: 7 }}>
                            <View style={{ width: '100%', height: 100, backgroundColor: 'pink' }}>
                                <Image source={require('../assets/Rectangle49(3).png')} style={{ width: 150, height: 150, resizeMode: 'contain', alignSelf: 'center', marginTop: -25 }} />

                            </View>
                            <View style={{ width: '100%', height: 30, marginLeft: 10, marginTop: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                                    University
                                </Text>
                                <Text style={{ fontSize: 13, color: 'black' }}>
                                    108 teachers available
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ width: '100%', height: 50, backgroundColor: '#18095A', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                <View style={{ width: '90%', height: 50, alignSelf: 'center',flexDirection:'row' }}>
                    <View style={{ width: '25%', height: 50,justifyContent:'center' }}>
                        <Image source={require('../assets/Vector(7).png')} style={{ width: 25, height: 25, resizeMode: 'contain', alignSelf: 'center', }} />
                    </View>
                    <View style={{ width: '25%', height: 50,justifyContent:'center' }}>
                        <Image source={require('../assets/search.png')} style={{ width: 25, height: 25, resizeMode: 'contain', alignSelf: 'center' ,}} />
                    </View>
                    <View style={{ width: '25%', height: 50,justifyContent:'center' }}>
                        <Image source={require('../assets/Vector(8).png')} style={{ width: 25, height: 25, resizeMode: 'contain', alignSelf: 'center' ,}} />
                    </View>
                    <View style={{ width: '25%', height: 50,justifyContent:'center' }}>
                        <Image source={require('../assets/Vector(9).png')} style={{ width: 25, height: 25, resizeMode: 'contain', alignSelf: 'center' ,}} />
                    </View>
                </View>
            </View>
        </View>

    )
}
export default Home