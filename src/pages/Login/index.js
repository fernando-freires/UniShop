import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Página Login</Text>
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
