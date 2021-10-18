import React from 'react';
import {View,Text,Image} from 'react-native';
export default function About(){
return(
<View style={{flex: 1, flexDirection: 'column'}}>
<View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
        <Image style={{width: 150, height: 150, backgroundColor: 'powderblue'}} source={{uri:'https://t1.ea.ltmcdn.com/es/razas/7/0/1/img_107_akita-inu-o-akita-japones_0_300_square.jpg'}}></Image>
        <View style={{width: 240, height: 150, backgroundColor: '#AAB98E'}}><Text style={{fontSize:25}}>Akita inu o akita japonés</Text><Text style={{marginTop: 23, fontSize:20}}>Japón</Text></View>
</View>

<View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
        <Image style={{width: 150, height: 150, backgroundColor: 'powderblue'}} source={{uri:'https://t2.ea.ltmcdn.com/es/razas/1/4/5/img_541_dachshund-o-teckel-estandar_1_300_square.jpg'}}></Image>
        <View style={{width: 240, height: 150, backgroundColor: '#AAB98E'}}><Text style={{fontSize:25}}>Dachshund o teckel estándar</Text><Text style={{marginTop: 23, fontSize:20}}>Europa</Text></View>
</View>

<View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
        <Image style={{width: 150, height: 150, backgroundColor: 'powderblue'}} source={{uri:'https://t2.ea.ltmcdn.com/es/razas/4/5/1/img_154_setter-irlandes-rojo_0_300_square.jpg'}}></Image>
        <View style={{width: 240, height: 150, backgroundColor: '#AAB98E'}}><Text style={{fontSize:25}}>Setter irlandés rojo</Text><Text style={{marginTop: 23, fontSize:20}}>Irlanda</Text></View>
</View>

<View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
        <Image style={{width: 150, height: 150, backgroundColor: 'powderblue'}} source={{uri:'https://t2.ea.ltmcdn.com/es/razas/8/7/5/img_578_lebrel-escoces-o-deerhound_0_300_square.jpg'}}></Image>
        <View style={{width: 240, height: 150, backgroundColor: '#AAB98E'}}><Text style={{fontSize:25}}>Lebrel escocés o deerhound</Text><Text style={{marginTop: 23, fontSize:20}}>Reino Unido</Text></View>
</View>
</View>
);
}