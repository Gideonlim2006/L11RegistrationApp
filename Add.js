import React,{useState} from 'react';
import {StatusBar, View, Button, Text, TextInput, Alert, StyleSheet} from 'react-native';

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
    inputBox: {
        height: 45,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
        color: '#333',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    inputHeader: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    button: {
        paddingTop: 20,
        paddingBottom: 20,
        marginHorizontal: 20,
    },


});

const Add = ({navigation, route}) => {
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[phoneNo,setPhoneNo] = useState();

    return (
        <View style={styles.container}>
            <StatusBar/>
            <Text style={styles.title}>Registration</Text>
            <Text style={styles.inputHeader}>Username:</Text>
            <TextInput style={styles.inputBox} placeholder={"Please enter your username"} onChangeText={(text)=>setUsername(text)}/>
            <Text style={styles.inputHeader}>Email:</Text>
            <TextInput style={styles.inputBox} placeholder={"Please enter your email"} onChangeText={(text)=>setEmail(text)}/>
            <Text style={styles.inputHeader}>Phone Number:</Text>
            <TextInput style={styles.inputBox} placeholder={"Please enter your phone number"} maxLength={8} keyboardType={"numeric"} onChangeText={(text)=>setPhoneNo(parseInt(text))}/>
            <View style={styles.button}>
                <Button title='Sign Up'
                        onPress={()=>{
                            let mydata = JSON.parse(route.params.datastr);
                            let item = {username:username, email:email, phoneNo: phoneNo};
                            mydata.push(item);
                            fetch("https://jsonhost.com/json/1890b4536bdf4fc71fae79f6ca9754c2",
                                {method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "Authorization": "qkai4aydeocpkvyfmojs5fssakjmzv0l"
                                    }, body:JSON.stringify(mydata)})
                                .then((response)=>{
                                    navigation.navigate("Home")
                                })
                        }
                        }
                />
            </View>

        </View>
    );
};


export default Add;
