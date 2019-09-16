import React, { PureComponent } from 'react'
import {
    View,
    Modal,
    Text,
    Animated,
    Easing,
    TouchableHighlight,
    Dimensions,
    StatusBar
} from 'react-native'
import colorCodes from '../../configs/colors'
import styles from './styles'

/**
 * applying sliding effect inside day plan list
 * @class 
 *  
 * @extends PureComponent
 * @memberOf components
 */


export default class ActionSheet extends PureComponent {
    constructor(props) {
        super(props);

        /**
        * @class 
        * @param {number} height This is used to get the height of the window
       * @param {number} width  This is used to get the width of the window
        * @param {object} props props for the component
        * @property {string} slideIn Used to style and layout the Slider
        */

        this.state = {
            slideIn: new Animated.Value(0),
            height: 1
        }
    }


    componentDidUpdate(prevProps) {
        const { visible } = this.props
        const { slideIn } = this.state
        if (visible && !prevProps.visible) {
            // on receiving visible true animation to bring the action sheet to user viewing is triggered
            Animated.timing(slideIn, {
                toValue: 1,
                duration: 250,
                easing: Easing.bezier(0, .81, .21, 1),
                useNativeDriver: true
            }).start()
        }
    }


    /**
   * Apply sliding effect by calling this method 
   * @function 
   */

    getActions = () => {
        // renders the actions passed as prop
        const { actions = [] } = this.props
        return actions.map((action, index) => {
            if (action.handler) {
                return <TouchableHighlight underlayColor={"#DFDFDF"} onPress={action.handler} key={action.label + index} style={styles.actionContainer} testID={action.testID}>
                    <Text style={[styles.actionText, action.style]}>
                        {action.label}
                    </Text>
                </TouchableHighlight>
            } else {
                return <View key={action.label + index} style={styles.actionContainer}>
                    <Text style={[styles.actionText, action.style]}>
                        {action.label}
                    </Text>
                </View>
            }

        })
    }

    renderHeader = () => {
        //renders the header of the action
        const { header } = this.props
        return (
            <View style={styles.actionContainer}>
                <Text style={[styles.headerText]}>
                    {header}
                </Text>
            </View>
        )
    }

    /**
   * setting the height of layout
   * @function 
   */


    setHeight = (ev) => {
        // sets the measured height of the rendered actions
        this.setState({
            height: ev.nativeEvent.layout.height + 100
        })
    };

    /**
    * render
    * @return {ReactElement} 
    */

    render() {
        const { visible, onRequestClose, header } = this.props
        const { height, slideIn } = this.state
        const slideStyle = [
            styles.slideInContainer,
            { bottom: height === 1 ? -9999 : -(height + 100) },
            {
                transform: [{
                    translateY: slideIn.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -(height + 110)],
                    }),
                }],
            }

        ];
        return (
            <Modal
                visible={visible}
                animationType={"none"}
                transparent={true}
                onRequestClose={onRequestClose}
            >
                <StatusBar
                    backgroundColor={colorCodes.inActiveBackground}
                    barStyle="light-content"
                />
                <View style={styles.container}>
                    <Animated.View onLayout={this.setHeight} style={slideStyle}>
                        <View style={styles.customActionsContainer}>
                            {header && this.renderHeader()}

                            {this.getActions()}
                        </View>
                        <TouchableHighlight underlayColor={"#DFDFDF"} onPress={onRequestClose} style={styles.cancelActionContainer}>
                            <Text style={styles.cancelText}>
                                Cancel
                            </Text>
                        </TouchableHighlight>
                    </Animated.View>
                </View>
            </Modal>
        )
    }
}
