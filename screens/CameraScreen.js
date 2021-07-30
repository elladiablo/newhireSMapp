import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { darkStyles, lightStyles } from '../styles/commonStyles';
import { Camera } from 'expo-camera';
import { useDispatch, useSelector } from "react-redux";
import { uploadPicACtion } from '../redux/ducks/accountPrefs';

export default function CameraScreen({ navigation }) {


const isDark = useSelector((state) => state.accountPrefs.isDark);
const styles = isDark ? darkStyles : lightStyles

const [hasPermission, setHasPermission] = useState(null);
const [back, setBack] = useState(true);
const dispatch = useDispatch();

const cameraRef = useRef(null)

async function showCamera() {
const {status} = await Camera.requestPermissionsAsync();
setHasPermission(status === 'granted');
if (setHasPermission === false) {
  Alert.alert("Error: No access given")
  }
}

async function takePicture() {
  const photo = await cameraRef.current.takePictureAsync()
  //console.log(photo)
  console.log(photo)
  dispatch({...dispatch(uploadPicACtion()), payload:photo})
  navigation.navigate("Account")
}

function flip() {
}

useEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={flip}>
        <FontAwesome name="refresh" size={24} style={{ color:StyleSheet.headerTint, marginRight:15}}/>
      </TouchableOpacity>
    ),
  });
});

useEffect(() => {
    showCamera();
  }, []);


return (
    <View style={{flex:1}}>
      <Camera style={styles.camera} type={back ? Camera.Constants.Type.back : Camera.Constants.Type.front} ref={cameraRef}onMountError={(e) => Alert.alert("Error: " + e.message)}>
      
        <View style={additionalStyles.innerView}>
          <View style={additionalStyles.buttonView}>
            <TouchableOpacity onPress={() => takePicture()}
              style={[additionalStyles.circleButton, {backgroundColor: isDark? "black" : "white"}]}/>
          </View>
        </View>
      </Camera>
    </View>
  )
}

  const additionalStyles = StyleSheet.create({
    camera: {
      flex: 1,
    },
      circle: {
      height: 50,
      width: 50,
      borderRadius: 50,
    },
    circleButton: {
      width: 70,
      height: 70,
      bottom: 0,
      borderRadius: 50,
    },
    buttonView: {
      alignSelf: 'center',
      flex: 1,
      alignItems: 'center'
    },
    innerView: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      padding: 20,
      justifyContent: 'space-between'
    }
  })
