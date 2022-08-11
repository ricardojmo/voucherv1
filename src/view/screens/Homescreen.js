import React, {useState, useEffect} from "react"
import { ActivityIndicator, Alert,Image,Dimensions, FlatList, Text, StyleSheet, View, TextInput,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../const/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const width = Dimensions.get('window').width / 2 - 30;



const HomeScreen = ({navigation}) => {

const [term, setTerm] = useState("");

  const [arrayholder,setArrayholder] =useState([])
  const[text, setText] = useState('')
  const[data, setData] = useState([])
  const [loading , setLoading] = useState(true)

  const fetchAPI = ()=> {
    return fetch('https://appdescontos.alista2022.pt/api/voucher/all')
    .then((response) => response.json())
    .then((responseJson) => {
        setData(responseJson)
        setLoading(false)
        setArrayholder(responseJson)
    }

    )
    .catch((error) => {
        console.error(error);
      });
}

  useEffect(() => {
    fetchAPI();
  },[])


  const searchData= (text)=>  {
    const newData = arrayholder.filter(item => {
      const itemData = item.nome.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });

      setData(newData)
      setText(text)
    };

    const showVoucherData= ({item}) =>{
      return (
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', item)}>
              <View style = {style.card}>
              <View style={{alignItems: 'flex-end'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: item.like
                      ? 'rgba(245, 42, 42,0.2)'
                      : 'rgba(0,0,0,0.2) ',
                  }}>
                    <Icon
                    name="heart-outline"
                    size={18}
                    color={item.like ? COLORS.red : COLORS.black}
                  />
              </View>
              </View>
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                  <Image 
                  source = {{uri: `https://cdn.alista2022.pt/Imagens/Storage/Associados/${item.id}/${item.thumbnail}`}}
                  style={{flex: 1, resizeMode: 'contain', height: 120, width:120}}
                  />
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
                {item.codeVoucher} 
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text style={{fontSize: 19, fontWeight: 'bold'}}>
                  {item.valorVoucher}       

                  { item.perc_num_Voucher ? <Text> % </Text> : <Text>€</Text> } 
              </Text>
    
                
                <View
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: COLORS.orange,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
            <Text
                    style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                   + 
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      };
  

  return (
    <SafeAreaView
    style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
    <View style={style.header}>
      <View>
        <Text style={{fontSize: 25, fontWeight: 'bold',marginLeft:8}}>Encontre aqui os seus Vouchers</Text>
      </View>
    </View>
  <View>
      
    <View style={{marginTop: 30, flexDirection: 'row'}}>
    <View style={style.searchContainer}>
    <Icon name="search-outline" size={25} style={{marginLeft: 20}} />
        <TextInput 
         style={style.input}
         onChangeText={(text) => searchData(text)}
         value={text}
         placeholder="Procurar...." 
         />
         </View>
         </View>
  
        <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          paddingBottom: 250,
          paddingLeft:15,
          paddingRight:15
        }}
        numColumns={2}
          data={data}
          keyExtractor={ (item, index) => index.toString() }
          renderItem= {showVoucherData}  
        />
         </View>
     
   
    
    </SafeAreaView>
);

  };





const style = StyleSheet.create({

  categoryText: {fontSize: 16, color: 'black', fontWeight: 'bold'},
  categoryTextSelected: {
    color:'#ff8800',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
 
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    shadowColor: "#000",
shadowOffset: {
  width: 2,
  height: 2,
},
shadowOpacity: 0.35,
shadowRadius: 5,

elevation: 9,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    marginLeft:15,
    marginRight:15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
    marginLeft:10,
  },
  MainContainer: {
    paddingTop: 50,
    justifyContent: 'center',
    flex: 1,
    margin: 5,

  },

  row: {
    fontSize: 18,
    padding: 12
  },

  textInput: {

    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: "#FFFF"

  }
});
export default HomeScreen;
