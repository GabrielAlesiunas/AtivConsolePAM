import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  card: {
    width: 250,
    aligItems: "center",
    backgroundColor: '#107c0f',
    flexDirection: "row",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20, 
  },  

  card: {
    width: 320,
    height: 180,
    flexDirection: "row",
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#008000",
    borderRadius: 10,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#2c2e2d',
    padding: 15,
  },

  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#107c0f",
    marginBottom: 5,
  },

  cardImg:{
    width: 170,
    height: 150,
    marginBottom: 10,
  },

  cardTexto: {
    fontSize: 21,
    fontWeight: "bold",
    color: 'white',
    alignItems: 'center',
  },

  descricao: {
    color: "#FFFFFF",
    textAlign: "center",
  },

  paragrafo: {
    color: "#FFFFFF",
  },

  cardTitulo: {
    backgroundColor: "#000000",
    alignItems: 'center',
    color: "#FFFFFF",
    fontSize: 18,
    opacity: 0.5,
    width: 1000,
    height: 28
  },

  subtitulo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "tahoma"
  },

  img10:{
    width: 360,
    height: 250,
    borderRadius: 5
  },
  

  
});

export default estilos;