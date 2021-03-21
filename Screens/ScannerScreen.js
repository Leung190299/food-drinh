import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,AsyncStorage } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useDispatch } from 'react-redux';
import {setAccount} from '../Reducer/AccoutSlice'; 

const ScannerScreen=(props)=> {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const  dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned =async ({ data }) => {
    setScanned(true);
    AsyncStorage.setItem('add',data)
    const action=setAccount(data);
    dispatch(action);
    props.navigation.navigate('Homes');
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}
export default ScannerScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});