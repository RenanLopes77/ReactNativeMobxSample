import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingRight: 8,
    paddingLeft: 8,
  },
  textInput: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
  },
  countContainer: {
    flex: 1,
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countInner: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countBtn: {
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  countText: {
    fontSize: 42,
  },
  countBtnText: {
    color: 'white',
  },
});

@inject('UserStore', 'CountStore')
@observer
export default class Home extends Component {
  render() {
    const {setName, name} = this.props.UserStore;
    const {count, increment, decrement} = this.props.CountStore;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setName(text)}
          value={name}
        />
        <View style={styles.countContainer}>
          <TouchableOpacity
            style={[styles.countInner, styles.countBtn]}
            onPress={() => increment()}>
            <Text style={[styles.countText, styles.countBtnText]}>+</Text>
          </TouchableOpacity>
          <View style={styles.countInner}>
            <Text style={styles.countText}>{count}</Text>
          </View>
          <TouchableOpacity
            style={[styles.countInner, styles.countBtn]}
            onPress={() => decrement()}>
            <Text style={[styles.countText, styles.countBtnText]}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
