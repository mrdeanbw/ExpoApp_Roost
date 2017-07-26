import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  dismissKeyboard,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import * as ractions from '../../actions';

export default class Login extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View>
                <Text style={{ textAlign: 'center', fontSize: 16, fontStyle: 'italic', color: 'red', fontWeight: '200' }}>
                    "If you're good at something, never do it for free, offer it as a service, at a small fee."
                </Text>
            </View>
        )
    }
}