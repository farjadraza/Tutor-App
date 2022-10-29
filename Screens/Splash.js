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

const Splash = ({navigation}) => {

    setTimeout(() => {
        navigation.navigate('SearchForBest')
        }, 3000);


return (
        <View style={{width:'100%',height:'100%',backgroundColor: '#18095A'}}>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:150}}>
             <Image source={require('../assets/Group233.png')} style={{ width: 150, height:150, resizeMode: 'contain' }} />
             <View style={{flexDirection:'row'}}>
                <Text style={{color:'#898989',fontSize:65, fontFamily:'SF-PRO-DISPLAY-BOLD'}}>
                    Sif
                </Text>
                <Text style={{color:'white',fontSize:65,fontFamily:'SF-PRO-DISPLAY-BOLD'}}>
                    Tutor
                </Text>
             </View>
             </View>
        </View>
    )
}
export default Splash