import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function ProjetosScreen() {
  const [mensagem, setMensagem] = useState('');

  return (
    <ScrollView style={styles.tela}>

      <View style={styles.header}>
        <Text style={styles.headerTexto}>🐄 Projetos & Contato</Text>
      </View>