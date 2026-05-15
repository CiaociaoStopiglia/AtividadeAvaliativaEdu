import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilScreen() {
  return (
    <ScrollView style={styles.tela}>

      <View style={styles.header}>
        <Text style={styles.headerTexto}>🐄 DevStart</Text>
      </View>

      <View style={styles.perfil}>
        <Image source={require('../assets/jota.jpg')} style={styles.foto} />
        <Text style={styles.nome}>João Stopiglia</Text>
        <Text style={styles.cargo}>Dev Junior</Text>
      </View>

      <View style={styles.secao}>
        <View style={styles.secaoTitulo}>
          <Ionicons name="person-outline" size={18} color="#111" />
          <Text style={styles.titulo}>  Sobre mim</Text>
        </View>
        <Text style={styles.texto}>
          Estudante de tecnologia apaixonado por desenvolvimento mobile.
          Buscando minha primeira oportunidade na área. 🚀
        </Text>
      </View>

    </ScrollView>
  );
}

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
  perfil: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  foto: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#ddd',
    marginBottom: 12,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
  },
  cargo: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  secao: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  secaoTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
  },
  texto: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
});