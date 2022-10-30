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

const SplashNew = ({navigation}) => {

    setTimeout(() => {
        navigation.navigate('SearchForBest')
        }, 3000);


return (
<View style={{width:'100%', height:'100%'}}>
<Image source={require('../assets/Splash(1).png')} style={{ width:'100%', height:'100%', resizeMode: 'cover', }} />
           
</View>
)
}
export default SplashNew