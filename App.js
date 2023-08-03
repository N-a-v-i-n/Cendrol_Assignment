import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
const Stact = createStackNavigator()
import { useSelector,useDispatch } from 'react-redux';
import {useState,useEffect} from 'react'
import {StateName} from './redux_component/action'


function NaviiControls(){
  return(
    <NavigationContainer>
      <Stact.Navigator>
      <Stact.Screen name="Home" component={Home} />
      <Stact.Screen name="Details" component={Details} />
      </Stact.Navigator>
    </NavigationContainer>
  )
}

const App=()=>{
  return(
    <NaviiControls/>
  )
}


export default App;

const Home=({navigation})=>{
  console.log("Welcome Home")
  const AllStateName=["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Ladakh","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Narora","Odisha","Pondicherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  ]

const dispatch = useDispatch()

function Statepressed(item){
  console.log("StateClick is : ",item)
  dispatch(StateName(item))
  navigation.navigate('Details')
}

  return(
    <ScrollView>
    <View style={{alignItems:'center'}}><Text style={{fontSize:20,color:'black',padding:8}}>Get All Cities Name</Text>
    {AllStateName.map((e)=>
      <TouchableOpacity onPress={()=>Statepressed(e)}>
        <View style={{width:Dimensions.get('window').width-4,backgroundColor:'royalblue',alignItems:'center',margin:2,padding:5,borderRadius:5}}>
          <Text style={{color:'white',fontSize:15}}>{e}</Text>
        </View>
      </TouchableOpacity>
      )
    }
    </View>
    </ScrollView>
  )
    
}


const Details=()=>{
  const data_onredux=useSelector((item)=>item.reducer)
  const[State_redux,setState_redux] = useState(data_onredux[0])
  const[Cities,setCities] = useState()


  useEffect(()=>{
    function getCities(){
      requestURL=`https://naveen6213.pythonanywhere.com/search_for_citites_92839890104958379482983023/${State_redux}`

      fetch(requestURL).then(result=>result.json()).then(response=>
        setCities(response)
        )
    }
    State_redux?getCities():null
  },[])
  return(
    <ScrollView>
      <View style={{alignItems:'center'}}>
        <Text style={{fontSize:20,margin:10,color:'black'}}>Cities in {State_redux} are ({Cities?(Cities.length):null})</Text>
      </View>
      {Cities?
        Cities.map(e=>
          <Text style={{fontSize:15,margin:8}}>{e}</Text>
          ):<ActivityIndicator size={50} style={{paddingTop:'65%'}}></ActivityIndicator>
      }
    </ScrollView>
  )
}