import { StatusBar } from 'expo-status-bar';
import { Body, Button, Container, Textarea, Content, Form, Header, Icon, Input, Item, Label, Left, List, ListItem, Right, Title } from 'native-base';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, Picker, View } from 'react-native';
import firebase from 'firebase'
import { pateintAdd } from '../store/middleware/middleware';
import { connect } from 'react-redux';
import { db } from './../../config'



const screen = Dimensions.get("screen");
// console.log(screen)

function OppointmentForm({ navigation }, props) {
    const [date, setDate] = useState(new Date().getTime());
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("Male")
    const [age, setAge] = useState("")
    const [contactNo, setContactNo] = useState("")
    const [discription, setDiscription] = useState("")
    const [bP, setBP] = useState({});
    const [temp, setTemp] = useState({});
    const [illness, setIllness] = useState({});
    const [data, setData] = useState({});
    useEffect(() => {
        setData({
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
            contactNo: contactNo,
            discription: discription,
            date: date,
            bP: bP,
            temp: temp,
            illness: illness
        })

    }, [firstName, lastName, gender, age, contactNo, discription])
    function submit() {
        props.pateintAdd(data)
        setTimeout(() => {
            setDate("")
            setFirstName("")
            setLastName("")
            setGender("")
            setAge("")
            setContactNo("")
            setDiscription("")
            setBP("")
            setTemp("")
            setIllness("")
            setData("")
            setData([])

        }, 100)
    }
    return (
        // <View>
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

                        <Item stackedLabel>
                            <Label>Contact No</Label>
                            <Input keyboardType="numeric" onChangeText={(Text) => setContactNo(Text)} value={contactNo} />
                        </Item>
                        <View style={styles.name}>
                            <Item style={styles.halfInput} stackedLabel>
                                <Label>Blood Pressure</Label>
                                <Input onChangeText={(Text) => setBP(Text)} value={bP} />
                            </Item>
                            <Item style={styles.halfInput} stackedLabel>
                                <Label>Temperature</Label>
                                <Input onChangeText={(Text) => setTemp(Text)} value={temp} />
                            </Item>
                        </View>
                        <Item stackedLabel>
                            <Label>Illness</Label>
                            <Input
                                multiline={true}
                                numberOfLines={4}
                                // onChangeText={(text) => this.setState({ text })}
                                // value={this.state.text}
                                onChangeText={(Text) => setIllness(Text)}
                                value={illness}
                            />
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
        // </View >
    );
}
const mapStateToProps = (state) => {
    // console.log(state, "sdas")
    return {
        // data: state.Patient,
    };
};
const mapDispatchToProps = {};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OppointmentForm);

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