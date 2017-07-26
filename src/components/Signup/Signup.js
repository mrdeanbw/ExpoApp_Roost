import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import * as ractions from '../../actions';

class Signup extends Component{
    constructor(){
        super();
        this.state={
            showView : true,
        };
    }
    componentWillMount(){

    }
    render(){
        return(
            <View>
                <Text style={{ textAlign: 'center', fontSize: 16, fontStyle: 'italic', color: 'white', fontWeight: '200' }}>"If you're good at something, never do it for free, offer it as a service, at a small fee."</Text>
            </View>
        )
    }
}