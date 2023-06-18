import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Time } from '../../components';

import { PageTitle } from './components';

export const AlarmDetails = () => {
  return (
    <View style={styles.container}>
      <PageTitle title='RDS Morning Club' />

      <View style={{
        padding: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#525252',
      }}>
        <Time />
      </View>

      {/* <MembersList members={[{ name: 'Yash Raj' }, { name: "Prakash" }, { name: "Vaibhav" }]} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  text: {
    color: '#f9fafb',
  }
})