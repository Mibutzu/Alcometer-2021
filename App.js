import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [promilles, setPromilles] = useState(0);

  function calculate() {
    let result = 0;
    let liters = bottles * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;

    grams = grams - burning * time

    if (gender === 'male') {
      result = grams / (weight * 0.7);
    } else {
      result = grams / (weight * 0.6);
    }

    if (result < 0) {
      setPromilles(0)
    } else {
      setPromilles(result);
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.field}
          placeholder={'Enter Weight'}
          value={weight}
          onChangeText={text => setWeight(text)}
        >
        </TextInput>
      </View>

      <Text style={{ marginLeft: 10 }}>Bottles</Text>
      <DropDownPicker styles={styles.dropdown} items={[
        { label: '1 Bottle', value: 1 },
        { label: '2 Bottles', value: 2 },
        { label: '3 Bottles', value: 3 },
        { label: '4 Bottles', value: 4 },
        { label: '5 Bottles', value: 5 },
        { label: '6 Bottles', value: 6 },
        { label: '7 Bottles', value: 7 },
        { label: '8 Bottles', value: 8 },
        { label: '9 Bottles', value: 9 },
        { label: '10 Bottles', value: 10 },
        { label: '11 Bottles', value: 11 },
        { label: '12 Bottles', value: 12 }

      ]}
        containerStyle={{ height: 40 }}
        defaultValue={bottles}
        onChangeItem={item => setBottles(item.value)}
        style={{ marginLeft: 10 }}
        labelStyle={{ color: '#000' }}
      >
      </DropDownPicker>

      <Text style={{ marginLeft: 10 }}>Time</Text>
      <DropDownPicker styles={styles.dropdown} items={[
        { label: '1 Hour', value: 1 },
        { label: '2 Hours', value: 2 },
        { label: '3 Hours', value: 3 },
        { label: '4 Hours', value: 4 },
        { label: '5 Hours', value: 5 },
        { label: '6 Hours', value: 6 },
        { label: '7 Hours', value: 7 },
        { label: '8 Hours', value: 8 },
        { label: '9 Hours', value: 9 },
        { label: '10 Hours', value: 10 },
        { label: '11 Hours', value: 11 },
        { label: '12 Hours', value: 12 }

      ]}
        containerStyle={{ height: 40 }}
        defaultValue={time}
        onChangeItem={item => setTime(item.value)}
        style={{ marginLeft: 10 }}
        labelStyle={{ color: '#000' }}
      >
      </DropDownPicker>

      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm
          radio_props={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]}
          onPress={(value) => { setGender(value) }}
        >
        </RadioForm>
      </View>

      <View style={styles.field}>
        <Text>Promilles</Text>
        <Text>{promilles.toFixed(2)}</Text>
        <Button onPress={calculate} title="Calculate"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginRight: 20,
  },
  field: {
    margin: 5,
    marginLeft: 10
  },
  dropdown: {
    zIndex: 1000,
  },
  input: {
    marginTop: 10,
  }
});
