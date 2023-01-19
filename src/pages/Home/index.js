import { StyleSheet, Text, View } from 'react-native';

export default function Home({ route }) {
  return (
    <View style={styles.container}>
      <Text>Tela de Home</Text>
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
