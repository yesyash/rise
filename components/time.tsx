import { View, Text, StyleSheet } from "react-native"

type TimeTextProps = {
  fontSize?: number
  children: React.ReactNode
}

const TimeText = ({ fontSize, children }: TimeTextProps) => {
  return (
    <Text style={{ ...timeStyles.text, fontSize: fontSize ? fontSize : 60 }}>
      {children}
    </Text>
  )
}

type Props = {
  fontSize?: number
}

export const Time = ({ fontSize }: Props) => {
  return (
    <View style={timeStyles.wrapper}>
      <TimeText fontSize={fontSize}>05</TimeText>
      <TimeText fontSize={fontSize}>:</TimeText>
      <TimeText fontSize={fontSize}>05</TimeText>
    </View>
  )
}

const timeStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    color: '#d4d4d4',
  }
})