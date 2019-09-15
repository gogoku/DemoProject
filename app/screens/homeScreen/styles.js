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
  componentCard:{
    paddingVertical: 48,
    paddingHorizontal:8,
    width:'80%',
    elevation:2,
    alignItems:'center',
    borderRadius: 4,
    backgroundColor: colorCodes.brightBackground
  },
  componentName:{
    fontSize: 24,
  },
  componentDesc:{
    fontSize: 12,
    color:colorCodes.secondaryTextColor
  }
})