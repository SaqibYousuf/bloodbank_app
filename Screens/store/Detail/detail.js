import { StatusBar } from 'expo-status-bar';
import { Body, Container, Content, Header, Icon, Left, List, ListItem, Right, Title } from 'native-base';
import React, { useEffect } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase'
// import { getPatient } from './../store/middleware/middleware'
import { connect } from 'react-redux';



const screen = Dimensions.get("screen");
// console.log(screen)

function Detail({ navigation }, props) {
    return (
        <View>
            <ScrollView>
                <View >
                    <View style={styles.data, { backgroundColor: 'white', padding: 20 }}>
                        <Text>Patient Name: Saqib </Text>
                        <Text>Last Name: Yousuf </Text>
                        <Text>Age: 20 Year Old </Text>
                        <Text>Contact No: 03152326332 </Text>
                        <Text>Discription: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                    </View>
                </View>
                <View>
                    <View style={styles.headingView}>
                        <Text style={styles.heading}>Visiting History</Text>
                    </View>
                    <Content style={{ backgroundColor: 'white' }}>
                        <List>
                            <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
                                <Left>
                                    <Text>Simon Mignolet</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem >
                                <Left>
                                    <Text>Nathaniel Clyne</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text>Dejan Lovren</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                    <View>
                        <Button title="Make Oppointment" onPress={() => navigation.navigate('Oppointment Form')} />
                    </View>
                </View>
            </ScrollView>
        </View>
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
)(Detail);

const styles = StyleSheet.create({
    data: {
        padding: 20
    },
    headingView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    heading: {
        fontSize: 20,

    }
})