import React, { useState } from 'react'
import { View, Text, Alert, TouchableNativeFeedback } from 'react-native'
import ActionSheet from '../../components/ActionSheet/ActionSheet'
import styles from './styles'

export default function ActionSheetDemo() {
  //Action sheet demo controls the visibility of action sheet and passes the actions to display

  const [actionSheetVisible, setVisibility] = useState(false);

  const showActionSheet = () => {
    //sets visible property of action sheet to true, to display action sheet
    setVisibility(true)
  }

  const hideActionSheet = () => {
    //sets visible property of action sheet to false, to hide action sheet
    setVisibility(false)
  }

  const yesHandler = () => {
    //handles on pressing yes action and displays an alert
    hideActionSheet()
    Alert.alert('You have pressed yes action')
  }

  const noHandler = () => {
        //handles on pressing no action and displays an alert
    hideActionSheet()
    Alert.alert('You have pressed no action')
  }

  /*
  actions needed is passed as a json
  label: Name of action
  handler: Function to call on pressing the action 
  */

  const actions = [{
    label: "Yes",
    handler: yesHandler
  },
  {
    label: "No",
    handler: noHandler
  },
  {
    label: "Nothing Happens",
  }]

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={showActionSheet}>
        <View style={styles.actionCard}>
          <Text style={styles.actionName}>
            Display Action
          </Text>
          <Text style={styles.actionDesc}>
            Action sheet with three options Yes , No and Nothing Happens will be displayed.  
          </Text>
          <Text style={styles.actionDesc}> 
            On pressing Yes or No Alert will be displayed and on clicking Nothing Happens no changes occur
          </Text>
        </View>
      </TouchableNativeFeedback>
      <ActionSheet
        actions={actions}
        visible={actionSheetVisible}
        header={"Action Handlers"}
        onRequestClose={hideActionSheet}
      />
    </View>
  )
}