import React, {Component} from 'react';
import { FlatList, StyleSheet, View, Dimensions, SafeAreaView,TouchableOpacity, Text } from 'react-native';

import * as Icons from "../config/IconManagers";
import FastImage from 'react-native-fast-image'
import {DataServices} from '../assets/Data'
import * as Colors from '../config/Colors';
import * as Fonts from '../config/Fonts';

const { width,height } = Dimensions.get('window')

class ItemSerVice extends Component{

    render(){
        const { item } = this.props
        console.log(item)
        return(
        <TouchableOpacity
        style={[styles.container]}
        activeOpacity={0.8}
        >
            <View
            style={[styles.header, { backgroundColor: item.brColor }]}
            >
                <Text
                numberOfLines={2} style={styles.title}
                >
                    {item.title.toUpperCase()}
                </Text>
            </View>
            <View>
            <FastImage
                    style={[styles.itemImage]}
                    source={item.img}
                />
            </View>
            <View>
            <View style={styles.info}>
                    <Text numberOfLines={3} >
                        {item.content}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
        );
    }
}

class Services extends Component {
    
    render() {
      //  console.log('???',DataServices)
        return (
            <View>
         <SafeAreaView>
             <View>
             <FlatList
             // style={styles.fcontainer}
                        data={DataServices}
                        numColumns={2}
                        ListHeaderComponent={
                            <View >
                                <FastImage
                                    source={require('../assets/imgStatic/services/anh-bia-dich-vu.png')}
                                    style={styles.image}
                                    resizeMode='cover'
                                />
                                <View style={styles.dash} />
                            </View>
                        }
                        renderItem={({item,index})=>
                        <ItemSerVice  item={item} />
                        }
                        />
             </View>
                    

                </SafeAreaView>
            </View>
       
        );
    }
}

export default Services;


const styles = StyleSheet.create({
    fcontainer: {
        flex: 1,
    },
    container: {
        backgroundColor: 'white',
        borderColor: "grey",
        borderWidth: 0.3,
        width:width/2,
    },
    header: {
        height: 45,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    image: {
        backgroundColor: Colors.silverCONMIK,
        width:width,
        height:width/2
    },
    info: {
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 5,
    },
    title: {
        fontSize: 11,
        color: 'white',
        textAlign: 'center',
    },
    itemImage:{
        backgroundColor: Colors.silverCONMIK,
        width:width/2,
        height:width/3
    },
    content: {
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: Fonts.myriadpro_regular,
        color: 'black',
        padding: 0,
    },
    dash: {
        height: 7.5,
        backgroundColor: Colors.silverCONMIK,
        width: width - 20,
        marginTop: 10,
        marginBottom: 15,
    },
});