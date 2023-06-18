import { View, Text, StyleSheet } from "react-native"

type TMember = {
  name: string
}

const Member = ({ name }: TMember) => {
  return (
    <View>
      <Text style={memberStyles.text}>{name}</Text>
    </View>
  )
}

const memberStyles = StyleSheet.create({
  text: {
    color: '#f9fafb',
    padding: 16,
    backgroundColor: '#171717',
    marginVertical: 4,
    borderRadius: 100,
  },
})

type MemberListProps = {
  members: TMember[]
}

export const MembersList = ({ members }: MemberListProps) => {
  return (
    <View style={membersListStyles.wrapper}>
      <Text style={membersListStyles.title}>Members:</Text>

      {members.map((member, index) => (
        <Member key={index} name={member.name} />
      ))}
    </View>
  )
}

const membersListStyles = StyleSheet.create({
  wrapper: {
    marginVertical: 16,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 12,
    color: '#a3a3a3',
  }
})