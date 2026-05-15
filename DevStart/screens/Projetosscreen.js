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

      <View style={styles.card}>
        <Ionicons name="checkmark-done-circle-outline" size={22} color="#111" />
        <View style={styles.cardTexto}>
          <Text style={styles.cardNome}>App de Lista de Tarefas</Text>
          <Text style={styles.cardDesc}>App React Native para gerenciar tarefas.</Text>
        </View>
      </View>

       <View style={styles.card}>
        <Ionicons name="laptop-outline" size={22} color="#111" />
        <View style={styles.cardTexto}>
          <Text style={styles.cardNome}>Site Portfólio</Text>
          <Text style={styles.cardDesc}>Site pessoal feito com HTML e CSS.</Text>
        </View>
      </View>

      <View style={styles.secao}>
        <View style={styles.contatoLinha}>
          <Ionicons name="mail-outline" size={18} color="#111" />
          <Text style={styles.contatoTexto}>  joao@email.com</Text>
        </View>
        <View style={styles.contatoLinha}>
          <Ionicons name="logo-github" size={18} color="#111" />
          <Text style={styles.contatoTexto}>  github.com/joaostopiglia</Text>
        </View>
        <View style={styles.contatoLinha}>
          <Ionicons name="logo-linkedin" size={18} color="#111" />
          <Text style={styles.contatoTexto}>  linkedin.com/in/joaostopiglia</Text>
        </View>
      </View>

     <View style={styles.secao}>
        <TextInput
          style={styles.input}
          placeholder="Manda um oi..."
          value={mensagem}
          onChangeText={setMensagem}
          multiline
        />
        <TouchableOpacity style={styles.botao} onPress={() => { alert('Enviado!'); setMensagem(''); }}>
          <Ionicons name="send" size={16} color="#fff" />
          <Text style={styles.botaoTexto}>  Enviar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#111',
        padding: 20,
        paddingTop: 50,
    },
    headerTexto: {
         color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    marginBottom: 0,
  },
  cardTexto: {
    marginLeft: 12,
    flex: 1,
  },
  cardNome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
  },
  cardDesc: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  secao: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    marginBottom: 0,
  },
  contatoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  contatoTexto: {
    fontSize: 14,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    height: 90,
    textAlignVertical: 'top',
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#111',
    borderRadius: 10,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  }
})