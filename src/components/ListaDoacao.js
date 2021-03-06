import React from 'react';
import { withNavigation } from 'react-navigation';
import { 
  View,
  StyleSheet,
  Text,
} from 'react-native';

function ListaDoacao({ doacao, }) {

  return (
    <View style={styles.container}>
        <Text style={styles.nome}>{doacao.crianca.nome}</Text>
        <Text style={styles.detalhes}>{`Idade: ${doacao.crianca.idade} anos`}</Text>
        <Text style={styles.detalhes}>{`Bairro: ${doacao.crianca.bairro}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 15,
    borderRadius: 5
  },

  nome:{
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },

  detalhes: {
    color: '#666'
  },
});

export default withNavigation(ListaDoacao);