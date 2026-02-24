import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Attendance System</Text>
        <Text style={styles.subtitle}>
          Secure & intelligent workforce attendance
        </Text>

        <Pressable style={styles.button} onPress={() => navigation.navigate('AdminLogin')}>
          <Text style={styles.buttonText}>Admin Login</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('EmployeeLogin')}>
          <Text style={styles.buttonText}>Employee Login</Text>
        </Pressable>

        <Pressable style={styles.link} onPress={() => navigation.navigate('AdminRegister')}>
          <Text style={styles.linkText}>Create Admin Account</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 360,
    padding: 30,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 6,
  },
  subtitle: {
    color: '#cbd5f5',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#93c5fd',
    textAlign: 'center',
  },
});
