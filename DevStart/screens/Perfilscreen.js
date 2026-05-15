import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PerfilScreen() {
  return (
    <scrollView style={StyleSheet.tela}>
      <View style={StyleSheet.header}>
        <Text style={StyleSheet.headerTexto}>DEVSTART</Text>
      </View>

      <View style={StyleSheet.perfil}>
        <Image source={require("../assets/jota.jpg")} style={styles.foto} />
        <Text style={styles.secao}>
          <View styles={styles.secaoTitulo}>
            <Ionicons name="person-outilne" size={18} color="#111" />
          </View>
          <Text style={styles.texto}>
            Estudante de tecnologia apaixonado por desenvolvimento mobile.
            Buscando minha primeira oportunidade na área. 🚀
          </Text>
        </Text>
      </View>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#111",
    padding: 20,
    paddingTop: 50,
  },
  headerTexto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  perfil: {
    alignItems: "center",
    paddingVertical: 24,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  foto: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#ddd",
    marginBottom: 12,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
  },
  cargo: {
    fontSize: 20,
    color: "#888",
    marginTop: 4,
  },
  secao: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  secaoTitulo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  titulo: {
    fontsize: 15,
    fontWeight: "Bold",
    color: "#111",
  },
  texto: {
    fontSize: 14,
    color: "#555",
    lineHeight: 22,
  },
});
