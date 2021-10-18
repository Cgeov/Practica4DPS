import React from 'react';
import {View,Text,Image} from 'react-native';
import Navigation from '../Navigation/Navigation';
export default function Home(){
return(
<View style={{flex: 1, flexDirection: 'column'}}>
<View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
        <Image style={{width: 150, height: 150, backgroundColor: 'powderblue'}} source={{uri:'https://t1.ea.ltmcdn.com/es/razas/5/0/2/img_205_van-turco_0_600.jpg'}}></Image>
        <View style={{width: 240, height: 150, backgroundColor: '#AAB98E'}}><Text style={{fontSize:25}}>Van turco</Text><Text style={{marginTop: 23, fontSize:20}}>Turquía</Text></View>
</View>

<View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
        <Image style={{width: 150, height: 150, backgroundColor: 'powderblue'}} source={{uri:'https://t1.ea.ltmcdn.com/es/razas/6/2/8/img_826_gato-kurilian-bobtail_0_600.jpg'}}></Image>
        <View style={{width: 240, height: 150, backgroundColor: '#AAB98E'}}><Text style={{fontSize:25}}>Gato kurilian bobtail</Text><Text style={{marginTop: 23, fontSize:20}}>Rusia</Text></View>
</View>

<View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
        <Image style={{width: 150, height: 150, backgroundColor: 'powderblue'}} source={{uri:'https://t1.ea.ltmcdn.com/es/razas/6/9/1/img_196_gato-britanico-de-pelo-largo_0_600.jpg'}}></Image>
        <View style={{width: 240, height: 150, backgroundColor: '#AAB98E'}}><Text style={{fontSize:25}}>Gato británico de pelo largo</Text><Text style={{marginTop: 23, fontSize:20}}>Reino Unido</Text></View>
</View>

<View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
        <Image style={{width: 150, height: 150, backgroundColor: 'powderblue'}} source={{uri:'https://t1.ea.ltmcdn.com/es/razas/0/9/7/img_790_gato-highland-fold_0_600.jpg'}}></Image>
        <View style={{width: 240, height: 150, backgroundColor: '#AAB98E'}}><Text style={{fontSize:25}}>Gato highland fold</Text><Text style={{marginTop: 23, fontSize:20}}>Reino Unido</Text></View>
</View>
</View>
);
}