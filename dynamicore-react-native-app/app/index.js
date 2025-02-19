import { Link } from "expo-router";
import { StyleSheet, View, Text } from 'react-native';



export default function Index(){
    return (
      <View style={styles.container}>
      <Link href="/assign-one" style={styles.link}>
        <Text style={styles.linkText}>Ir a la tarea 1</Text>
      </Link>
      <Link href="/map-screen" style={styles.link}>
        <Text style={styles.linkText}>Ir a la tarea 2</Text>
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
    backgroundColor: '#f0f0f0', // Light background for better readability
  },
  link: {
    backgroundColor: '#007bff', // Button-like background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16, // Space between links
    elevation: 3, // Subtle shadow for a raised effect (Android)
    shadowColor: '#000', // Shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  linkText: {
    color: '#fff', // White text for contrast
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});