import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function AdminRegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.card}>

          {/* Back */}
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.back}>← Back</Text>
          </Pressable>

          {/* Title */}
          <Text style={styles.title}>Admin Registration</Text>
          <Text style={styles.subtitle}>
            Register a new administrator account
          </Text>

          {/* Email */}
          <TextInput
            style={styles.input}
            placeholder="Company Email ID"
            placeholderTextColor="#94a3b8"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {/* OTP */}
          <TextInput
            style={styles.input}
            placeholder="OTP (sent to email)"
            placeholderTextColor="#94a3b8"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          />

          {/* Password */}
          <TextInput
            style={styles.input}
            placeholder="Create Password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Confirm Password */}
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {/* Register Button */}
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Register Admin</Text>
          </Pressable>

          {/* Footer Note */}
          <Text style={styles.footer}>
            OTP verification and password rules will be applied
          </Text>

        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 30,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  back: {
    color: '#93c5fd',
    marginBottom: 10,
    fontSize: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: '#cbd5f5',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#ffffff',
    marginBottom: 14,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 6,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    marginTop: 16,
    fontSize: 12,
    color: '#94a3b8',
    textAlign: 'center',
  },
});
