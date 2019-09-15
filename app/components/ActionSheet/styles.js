import { StyleSheet, Dimensions } from 'react-native'
import colorCodes from '../../configs/colors'
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
      padding: 16,
      backgroundColor: colorCodes.inActiveBackground,
      flex: 1,
  },
  slideInContainer: {
      position: "absolute",
      width: width - 20,
      alignSelf: "center",
      opacity: 1
  },
  cancelActionContainer: {
      backgroundColor: colorCodes.brightBackground,
      borderRadius: 10,
      paddingVertical: 14,
      alignItems: "center",
      marginTop: 8,
  },
  customActionsContainer: {
      borderRadius: 10,
      overflow: 'hidden'
  },
  actionContainer: {
      backgroundColor: colorCodes.brightBackground,
      paddingVertical: 14,
      alignItems: "center",
      borderTopWidth: 0.5,
      borderColor: colorCodes.borderColorCode
  },
  cancelText: {
      color: colorCodes.warningColor,
      fontSize: 16,
  },
  actionText: {
      fontSize: 16,
      color:colorCodes.highlightedTextColor
  },
  headerText:{
      fontSize: 16,
      color:colorCodes.secondaryTextColor,
  }

});