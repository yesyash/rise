import { StyleSheet, Text, } from 'react-native';

type Props = {
  title: string
}

export const PageTitle = ({ title }: Props) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

const styles = StyleSheet.create({
  title:
    { color: '#f5f5f5', fontSize: 72, lineHeight: 80, marginTop: 56, marginBottom: 24, paddingHorizontal: 16 }
})