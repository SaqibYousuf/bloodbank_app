import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
// import { } from 'react-native'
export default function Footers(props) {
    //   render() {
    let { navigation } = props;
    console.log(props)
    return (
        <Container>
            {/* <Header /> */}
            {/* <Content /> */}
            <Footer>
                <FooterTab>
                    <Button vertical onPress={() => navigation.navigate('Home')}>
                        <Icon name="apps" />
                        <Text>Apps</Text>
                    </Button>
                    <Button vertical onPress={() => navigation.navigate('Patient Form')}>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                    </Button>
                    <Button vertical onPress={() => navigation.navigate('Details')}>
                        {/* <Badge ><Text>51</Text></Badge> */}
                        <Icon name="navigate" />
                        <Text>Navigate</Text>
                    </Button>
                    <Button vertical onPress={() => navigation.navigate('Oppointment Form')}>
                        <Icon name="person" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
            {/* <Text>HIOIIII</Text> */}
        </Container>
    );
}
