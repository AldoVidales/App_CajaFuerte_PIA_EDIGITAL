import React, { Component } from 'react'
import {StyleSheet, Switch, View, Text} from 'react-native'
export default class SwitchExample extends Component {
state = {
switchValue: false
};
render() {
return (
<View style={styles.container}>
<Text style={styles.textStyle}>Pia Caja fuerte</Text>
<Text style={styles.textStyle}>{this.state.switchValue ? '1' :'0'}</Text>
<Switch
value={this.state.switchValue} onValueChange
={(switchValue)=>this.setState({switchValue})}
style={styles.Switch}
ios_backgroundColor="#fbfbfb"
trackColor={{true: '#5AA8D5', false: 'grey'}}
/>
</View>
);
}
}
const styles = StyleSheet.create({ container:{
flex:1,
alignItems: 'center', justifyContent: 'center', backgroundColor: '#96f2ca',

},
textStyle:{
margin: 25,
fontSize: 52, fontWeight: 'bold', textAlign: 'center', color: '#3a4a35'


},
Switch:{
margin: 25,
height: 120,

transform: [{ rotate: '-90deg'}]


}

})