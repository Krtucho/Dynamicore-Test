import { Link } from "expo-router";
import { StyleSheet, View } from 'react-native';



export default function Index(){
    return (
      <View style={styles.container}>
        <Link href="/assign-one">
        Ir a la tarea 1
        </Link>
        <Link href="/map-screen">
        Ir a la tarea 2
        </Link>
      </View>  
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
  },
});