import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Time } from '../../components';

import { PageTitle } from './components';

type Props = {
  route: {
    params: {
      alarmId: string
    }
  }
}

export const AlarmDetails = ({ route }: { route: any }) => {
  const { alarmId } = route.params

  return (
    <View style={styles.container}>
      <PageTitle title='RDS Morning Club' />
      <Text style={styles.text}>alarm Id: {JSON.stringify(alarmId)}</Text>

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