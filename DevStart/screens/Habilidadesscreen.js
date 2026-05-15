import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const habilidades = [
  { id: '1', nome: 'JavaScript', icone: 'logo-javascript' },
  { id: '2', nome: 'React Native', icone: 'phone-portrait-outline' },
  { id: '3', nome: 'HTML e CSS', icone: 'globe-outline' },
  { id: '4', nome: 'Git e GitHub', icone: 'git-branch-outline' },
  { id: '5', nome: 'Node.js', icone: 'server-outline' },
];

export default function HabilidadesScreen() {
    return (
        <View style={styles.tela}>

            <View style={styles.header}>
                <Text style={styles.headerTexto}> Habilidades </Text>
            </View>

            <FlatList
            data={habilidades}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <View style={styles.icone}>
                        <Ionicons name={item.icone} size={22} color='#fff' />
                    </View>
                    <Text style={styles.cardName}>{item.nome}</Text>
                </View>
            )}
        />
        
        </View>
    )
}

const styles =StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header:{
        backgroundColor: '#111',
        padding: 20,
        paddingTop: 50,
    },
    headerTexto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    lista: {
        padding: 16, 
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    icone: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 8,
        marginRight: 14,
    },
    cardNome: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111',
    }
})