import { StatusBar } from 'expo-status-bar';
import { Body, Button, Container, Textarea, Content, Form, Header, Icon, Input, Item, Label, Left, List, ListItem, Right, Title } from 'native-base';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, Picker, View } from 'react-native';
import firebase from 'firebase'
import { pateintAdd } from '../store/middleware/middleware';
import { connect } from 'react-redux';
import { db } from './../../config'
import AsyncStorage from '@react-native-async-storage/async-storage';



const screen = Dimensions.get("screen");


// console.log(screen)

function PatientForm(props) {
    const [date, setDate] = useState(new Date().getTime());
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("Male")
    const [age, setAge] = useState("")
    const [contactNo, setContactNo] = useState("")
    const [discription, setDiscription] = useState("")
    let [data, setData] = useState({});
    useEffect(() => {
        setData({
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
            contactNo: contactNo,
            discription: discription,
            date: date

        })

    }, [firstName, lastName, gender, age, contactNo, discription])
    const submit = async () => {
        props.pateintAdd(data)
        // const storeData = async (value) => {
       

        setTimeout(() => {
            setDate("")
            setFirstName("")
            setLastName("")
            setGender("")
            setAge("")
            setContactNo("")
            setDiscription("")
            setData([])

        }, 100)
    }

    // }
    return (
        <View>
            <ScrollView>
                <Container>
                    <View style={styles.headVeiw}>
                        <Text style={styles.heading}>Patient Information</Text>
                    </View>
                    <Content>
                        <Form>
                            <View style={styles.name}>
                                <Item style={styles.halfInput} stackedLabel>
                                    <Label>First Name</Label>
                                    <Input onChangeText={(Text) => setFirstName(Text)} value={firstName} />
                                </Item>
                                <Item style={styles.halfInput} stackedLabel>
                                    <Label>Last Name</Label>
                                    <Input onChangeText={(Text) => setLastName(Text)} value={lastName} />
                                </Item>
                            </View>
                            <View style={styles.name}>
                                {/* <Item  style={{ display: "flex", flexDirection: "column",alignItems:'flex-start' },styles.halfInput}> */}
                                {/* <Label>Genders</Label> */}
                                <Item style={{ width: "100%" }, styles.halfInput} picker>
                                    <Picker
                                        selectedValue={gender}
                                        style={{ height: 50, width: 150 }}
                                        onValueChange={(itemValue, itemIndex) => setGender(itemValue)} value={gender}
                                    >
                                        <Picker.Item label="Male" value="Male" />
                                        <Picker.Item label="Female" value="Female" />
                                    </Picker>
                                </Item>
                                {/* </Item> */}
                                <Item style={styles.halfInput} stackedLabel>
                                    <Label>Age</Label>
                                    <Input keyboardType="numeric" onChangeText={(Text) => setAge(Text)} value={age} />
                                </Item>
                            </View>
                            <Item stackedLabel>
                                <Label>Contact No</Label>
                                <Input keyboardType="numeric" onChangeText={(Text) => setContactNo(Text)} value={contactNo} />
                            </Item>
                            <Item stackedLabel>
                                <Label>Discription</Label>
                                <Input
                                    multiline={true}
                                    numberOfLines={4}
                                    // onChangeText={(text) => this.setState({ text })}
                                    // value={this.state.text}
                                    onChangeText={(Text) => setDiscription(Text)}
                                    value={discription}
                                />
                            </Item>
                        </Form>
                        <View style={styles.addBtnView}>
                            <View>
                                <Button style={styles.btnAdd} onPress={() => submit()}><Text style={styles.btnAddText}>ADD PATIENT</Text></Button>
                            </View>
                        </View>
                    </Content>
                </Container>
            </ScrollView>
        </View >
    );
}
const mapStateToProps = (state) => {
    return {
        // data: state.data,
    };
};
const mapDispatchToProps = { pateintAdd };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientForm);

const styles = StyleSheet.create({
    name: {
        display: 'flex',
        flexDirection: 'row'
    },
    halfInput: {
        width: screen.width / 2
    },
    headVeiw: {
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 20,
        // marginTop: ,

    },
    addBtnView: {
        // flex:1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: screen.width,
        height: 100

    },
    btnAdd: {
        padding: 15
    },
    btnAddText: {
        color: 'white'
    }
});