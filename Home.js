import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    details: {
        marginBottom: 15,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 5 },
    },
    button: {
        paddingTop: 20,
        paddingBottom: 20,
        marginHorizontal: 20,
        borderRadius: 5,
    },


});


const Home = ({navigation}) => {
const [myData, setMyData] = useState([]);

useEffect(() => {
    fetch(
        'https://jsonhost.com/json/1890b4536bdf4fc71fae79f6ca9754c2'
    )
        .then((response) => {
            return response.json()
        })
        .then((myJson) => {
            setMyData(myJson);
        });
}, []);



const renderItem = ({item}) => {
return (
<View style={styles.details}>
<Text>Username: {item.username}</Text>
<Text>Email: {item.email}</Text>
<Text>Phone No: {item.phoneNo}</Text>
</View>
);
};

return (
<View style={styles.container}>
  <StatusBar/>

    <Text style={styles.title}>Current Users</Text>
  <FlatList data={myData} renderItem={renderItem}/>
    <View style={styles.button}>
        <Button title='Add New User' onPress={
            ()=>{navigation.navigate("Add",{datastr:JSON.stringify(myData)})}}/>
    </View>
</View>
);
};

export default Home;
