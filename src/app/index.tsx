import React from 'react'
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS ==="ios" ? "padding" :"height" }>
 <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 24,
        }}
      >
        Login
      </Text>

      <TextInput
        placeholder="Username"
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 14,
          marginBottom: 16,
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 14,
          marginBottom: 20,
        }}
      />

      <Pressable
        onPress={() => console.log('Login pressed')}
        style={{
          backgroundColor: '#2563eb',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          Login
        </Text>
      </Pressable>
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
   
  )
}

export default HomeScreen

const styles = StyleSheet.create({})