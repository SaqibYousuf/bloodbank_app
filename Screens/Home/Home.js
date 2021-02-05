import { StatusBar } from 'expo-status-bar';
import { Body, Container, Content, Footer, Header, Icon, Left, List, ListItem, Right, Title } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase'
import { getPatient } from './../store/middleware/middleware'
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';



const screen = Dimensions.get("screen");
// console.log(screen)


function Home(props) {
    let { navigation } = props
    useEffect(() => {
        props.getPatient()
    }, [])
    let [data, setData] = useState("")
    useEffect(() => {
        if (props.data) {
            setData(props.data[0])
        }
        console.log(props.data, 'DATA')
    }, [props.data])
    const getData = async () => {

    }
    useEffect(() => {
        getData()
    }, [getData])
    function list() {
        if (data && data.length) {
            return (data.map((a, i) => {
                return (
                    <ListItem selected onPress={() => navigation.navigate('Details', a)}>
                        <Left>
                            <Text>{a.firstName} {a.lastName}</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                )
            })
            )
        }
    }

    return (
        <View>

            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.headingView}>
                        <Text style={styles.heading}>Blood Bank App</Text>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.add}>
                            <Text>List Of Donors</Text>
                            <Button onPress={() => navigation.navigate('Patient Form')} title="Add Pateint" />
                            {/* <Button style={styles.addBtn} ><Text style={styles.addBtnText}>Add Patient</Text></Button> */}
                        </View>
                    </View>
                </View>
                <View>
                    <Container>
                        {/* <Header /> */}
                        <Content>
                            <List>
                                {
                                    list()
                                }
                            </List>
                            {/* <Button>
                                    <Text>Check</Text>
                                </Button> */}
                        </Content>
                    </Container>
                </View>
            </ScrollView>

        </View>
            // <Footer />
    );
}
const mapStateToProps = (state) => {
    // console.log(state, "sdas")
    return {
        data: state.Patient,
    };
};
const mapDispatchToProps = { getPatient };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
    Header: {
        height: screen.height / 8,
    },
    // container: {
    //     flex: 1,
    //     // // backgroundColor: 'black',
    //     // alignItems: 'center',
    //     // justifyContent: 'center',
    //     // display: "flex",
    //     // height: screen.height ,
    //     // height: 1000
    //     display:"flex",
    //     alignItems:"center",
    //     // flexDirection:"column"
    // },
    headingView: {
        display: 'flex',
        alignItems: 'center',
        height: 70,
        justifyContent: 'center',
        flex: 1
    },
    heading: {
        flex: 1,
        fontSize: 20
    },
    table: {
        height: 50,
        display: "flex",
        alignItems: 'center'
    },
    add: {
        display: "flex",
        flex: 1,
        width: screen.width,
        justifyContent: 'space-around',
        flexDirection: "row",
        // justifyContent:"center"
        alignItems: "center",
        // padding:20
        height: 70
    },
    addBtn: {
        padding: 20,
    },
    addBtnText: {
        color: 'white'

    }
});