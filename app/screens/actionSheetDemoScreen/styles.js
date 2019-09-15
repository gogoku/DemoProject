import { StyleSheet } from 'react-native'
import colorCodes from '../../configs/colors';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor:colorCodes.screenBackground,
    alignItems:'center'
  },
  actionCard:{
    paddingVertical: 48,
    paddingHorizontal:8,
    width:'80%',
    elevation:2,
    alignItems:'center',
    borderRadius: 4,
    backgroundColor: colorCodes.brightBackground
  },
  actionName:{
    fontSize: 24,
  },
  actionDesc:{
    fontSize: 12,
    color:colorCodes.secondaryTextColor
  }
})