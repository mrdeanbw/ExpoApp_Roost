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

//import { connect } from 'react-redux';
//import * as ractions from '../../actions';
//import { Button } from 'native-base';

import {Icon} from 'native-base';
export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            alarm : 'Home is comfortable and no alarms',
            drawerOpened: false
        };
    }
 
    render(){
        return(
            <View style={{flex : 1 }}>
                <View style={styles.mainContent}>
                    <Text style={styles.roostText}>
                        roost
                    </Text>
                </View>
                
                <View style={styles.headerContainer}>
                    <Text style={styles.pageBody}>55366 Loonard Court</Text>
                    <View style={{justifyContent: 'center', flexDirection : 'row', alignItems : 'center'}}>
                        <Text style={styles.pageBody}>Outside: 80 °F</Text>
                        <Icon name="sunny" style={{fontSize: 25,fontWeight : "bold", marginTop : 8, marginLeft : 10, color : '#ce5316'}}/>     
                    </View>
                    <View style={{flexDirection : 'row',marginTop : 10, alignItems:'center', justifyContent : 'center'}}>
                        <View style={styles.circleTab}></View>
                        <View style={[styles.circleTab, {backgroundColor : '#999'}]}></View>
                        <View style={[styles.circleTab, {backgroundColor : '#999'}]}></View>
                    </View>
                </View>

                <View style={styles.alarmContainer}>
                    <Text style={styles.textStyle}>{this.state.alarm}</Text>
                </View>

                <View style={styles.pageContent}>
                    <View style={styles.rowContent}>
                        <Text style={styles.itemtitle}>Kitchen</Text>    
                        <View style={{flex :1, flexDirection : 'row'}}>
                            <View style={styles.itemContainer} >
                                <View style={{flexDirection : 'row'}}>
                                    <Icon name="phone-portrait" style={{flex : 1, flexDirection : 'row',fontSize: 30, marginLeft : 10, color:'#203e82'}}/>
                                    <Icon name="checkmark-circle" style={{ flex: 3, flexDirection : 'row', fontSize: 45, color : 'green', marginLeft : 10, marginTop: 10}}/>
                                </View>
                            </View>
                            <View style={styles.itemContainer}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon name="egg" style={{fontSize: 30, marginLeft : 15, color : 'blue'}} />
                                    <Text style={styles.itemtext}>Sink</Text>
                                </View>
                                <Text style={styles.textCenter}>80 °F | 65 %</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon name="egg" style={{fontSize: 30, marginLeft : 15, color : 'blue'}} />
                                    <Text style={styles.itemtext}>Under t...</Text>
                                </View>
                                <Text style={styles.textCenter}>80 °F | 65 %</Text>
                            </View>
                        </View>
                    </View>    

                    <View style={styles.rowContent}>
                        <Text style={styles.itemtitle}>Living room</Text>    
                        <View style={{flex :1, flexDirection : 'row'}}>
                            <View style={styles.itemContainer} >
                                <View style={{flexDirection : 'row'}}>
                                    <Icon name="phone-portrait" style={{flex : 1, flexDirection : 'row',fontSize: 30, marginLeft : 10, color:'#203e82'}}/>
                                    <Icon name="checkmark-circle" style={{ flex: 3, flexDirection : 'row', fontSize: 45, color : 'green', marginLeft : 10, marginTop: 10}}/>
                                </View>
                            </View>
                            <View style={styles.itemContainer}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon name="egg" style={{fontSize: 30, marginLeft : 15, color : 'blue'}} />
                                    <Text style={styles.itemtext}>Behind</Text>
                                </View>
                                <Text style={styles.textCenter}>80 °F | 65 %</Text>
                            </View>
                            <View style={[styles.itemContainer, {backgroundColor : null}]}>
                             
                            </View>
                        </View>
                    </View>

                    <View style={styles.rowContent}>
                        <Text style={styles.itemtitle}>Attic</Text>    
                        <View style={{flex :1, flexDirection : 'row'}}>
                            <View style={styles.itemContainer} >
                                <View style={{flexDirection : 'row'}}>
                                    <Icon name="phone-portrait" style={{flex : 1, flexDirection : 'row',fontSize: 30, marginLeft : 10, color:'#203e82'}}/>
                                    <Icon name="checkmark-circle" style={{ flex: 3, flexDirection : 'row', fontSize: 45, color : 'green', marginLeft : 10, marginTop: 10}}/>
                                </View>
                            </View>
                            <View style={styles.itemContainer}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon name="egg" style={{fontSize: 30, marginLeft : 15, color : 'blue'}} />
                                    <Text style={styles.itemtext}>Sink</Text>
                                </View>
                                <Text style={styles.textCenter}>80 °F | 65 %</Text>
                            </View>
                            <View style={styles.itemContainer}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon name="egg" style={{fontSize: 30, marginLeft : 15, color : 'blue'}} />
                                    <Text style={styles.itemtext}>Uner t...</Text>
                                </View>
                                <Text style={styles.textCenter}>80 °F | 65 %</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    pageHeader: {
        flex: 1,
        backgroundColor : '#518ace', 
        alignItems: 'center',
        justifyContent: 'center',
    },

    mainContent: {
        flex : 1,
        backgroundColor : '#518ace', 
        marginTop: 20, 
        height : 50,  
        justifyContent : 'center' 
    },
    
    roostText : {
        textAlign: 'center', 
        fontSize: 25, 
        fontWeight: "bold",
        color: '#FFF', 
        marginTop : 10
    },
    pageBody : {
        textAlign: 'center', 
        fontSize: 16, 
        fontWeight: 100, 
        color: '#222', 
        fontWeight: "bold",
        marginTop : 10
    },
    headerContainer :{
        flex : 1.1,
        marginVertical : 5,
        marginHorizontal : 35,
        padding : 0,
        borderColor : '#ec4b97',
        borderWidth : 4,
    },
    alarmContainer: {
        flex : 0.7,
        justifyContent: 'center',
        marginHorizontal : 10,
        padding : 10,
        backgroundColor : '#00a179',
        borderRadius : 3
    },
    textStyle : {
        textAlign: 'center',
        color : 'white',
        fontSize : 16,
        fontWeight : "bold"
    },
    textCenter : {
        textAlign: 'center'
    },
    itemContainer: {
        flex : 1,
        backgroundColor : '#fdfcfc',
        marginHorizontal : 5,
        borderRadius : 3,
        padding : 5,

    },
    pageContent : {
        flex : 5
    },
    rowContent :{
        flex : 1,
        marginHorizontal : 10,
        marginVertical : 5,
        
        borderTopColor : '#666',
        borderTopWidth : 1,
    },
    itemtitle : {
        fontSize : 15,
        color : '#666',
        fontWeight: "bold",
        marginVertical : 8
    },
    itemtext : {
        marginLeft : 10,
        color : '#777'
    },
    eggicon : {
        fontSize: 30, 
        marginLeft : 15, 
        color : 'blue'
    },
    circleTab :{
        backgroundColor : 'blue',
        borderRadius : 10,
        width : 10,
        height : 10,
        marginHorizontal : 2
    }
});
