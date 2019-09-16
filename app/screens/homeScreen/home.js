import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import styles from './styles'

export default function Home(props){
  //Home Screen Component Displays List of components available
  const navigateToActionSheet = () => {
    //funtion to navigate to component action sheet demo
    const { navigation } = props;
    navigation.navigate('ActionSheetDemo')
  }

  return(
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={navigateToActionSheet}>
        <View style = {styles.componentCard}>
          <Text style={styles.componentName}>
            Action Sheet
          </Text>
          <Text style={styles.componentDesc}>
            An action sheet is a specific style of alert that appears in response 
            to a control or action, and presents a set of two or more choices related 
            to the current context.
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}