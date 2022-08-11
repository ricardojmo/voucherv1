import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../const/colors';



const width = Dimensions.get('window').width;

const Detailscreen = ({navigation,route}) =>{
    const item = route.params;
   
    return(
       <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}>
            <View style={style.header}>
        <Icon name="arrow-back-outline" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={style.imageContainer}>
        <Image source ={{uri: `https://cdn.alista2022.pt/Imagens/Storage/Associados/${item.id}/${item.thumbnail}` }} 
        style={{resizeMode: 'contain', flex: 1, width}} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
        </View>
          <View>
          <Text style={{marginLeft:75, fontSize: 23, fontWeight: 'bold'}}>{item.nome}</Text>
          
          <Text style={{marginLeft:20,fontSize: 20, fontWeight: 'bold'}}>{item.codeVoucher}</Text>

        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>           
        </View>     
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
              <Text
                  style={{
                      color: 'grey',
                      fontSize: 16,
                      lineHeight: 22,
                      marginTop: 1,
                  }}>
                  {item.morada}{"\n"}
                  {item.localidade}{"\n"}
                  {item.validadeVoucher}{"\n"}
                  {item.contato_empresa} {"\n"}
                  {item.descricaoVoucher} 
            </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    header: {
      paddingHorizontal: 20,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    imageContainer: {
      flex: 0.45,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,
    },
    detailsContainer: {
      flex: 0.90,
      backgroundColor: COLORS.light,
      marginHorizontal: 7,
      marginBottom:-50,
      borderRadius: 20,
      marginTop: 30,
      paddingTop: 30,
      shadowColor: COLORS.black,
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 1.5,
      shadowRadius: 18.00,
      
      elevation: 20,
    },
    

  });



export default Detailscreen;