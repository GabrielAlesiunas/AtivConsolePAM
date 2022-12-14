import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#121212',
    padding: 20,
  },

  titulo: {
    fontSize:26,
    fontWeight: "bold",
    color: '#107c0f',
    marginBottom: 5,
  },
  descricao: {
    color: '#b2b2b2',
    textAlign: "center",
    width: 320,
    marginBottom: 25,
  },
  
  boxJogo:{

    width: 320,
    marginBottom: 50,
  },
  card: {
    width: 320,
    height: 180,
    marginBottom: 10,
    
  },
  cardTitulo: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  paragrafo: {
    color: '#d5d5d5',
  }
});

export default styles;