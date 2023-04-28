import { Text } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import Animated, { Keyframe } from "react-native-reanimated"

import { styles } from "./styles"

export const Message = () => {

  const enteringKeyframe = new Keyframe({
    0: {
      opacity: 0,
      transform: [
        { translateY: -100 }
      ]
    },
    70: {
      opacity: .3
    },
    100: {
      opacity: 1,
      transform: [
        { translateY: 0 }
      ]
    }
  })
  
  const exitingKeyframe = new Keyframe({
    from: {
      opacity: 1,
      transform: [
        { translateY: 0 }
      ]
    },
    to: {
      opacity: 0,
      transform: [
        { translateY: -100 }
      ]
    },
  })


  return (
    <Animated.View 
      style={styles.container}
      entering={enteringKeyframe.duration(400)}
      exiting={exitingKeyframe.duration(400)}
    >
      <MaterialIcons
        name="notifications"
        color='#fff'
        size={18}
      />
      <Text style={styles.title}>
        Hello World
      </Text>
    </Animated.View>
  )
}