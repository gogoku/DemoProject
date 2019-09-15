import React, { useState } from 'react'
import { View, Text, Alert, TouchableNativeFeedback } from 'react-native'
import ActionSheet from '../../components/ActionSheet/ActionSheet'
import styles from './styles'

export default function ActionSheetDemo() {
  const [actionSheetVisible, setVisibility] = useState(false);

  const showActionSheet = () => {
    setVisibility(true)
  }

  const hideActionSheet = () => {
    setVisibility(false)
  }

  const yesHandler = () => {
    hideActionSheet()
    Alert.alert('You have pressed yes action')
  }

  const noHandler = () => {
    hideActionSheet()
    Alert.alert('You have pressed no action')
  }

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