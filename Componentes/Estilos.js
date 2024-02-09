import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

  caja: {
    // Estilos para la caja de la calculadora
    borderColor: '#f0f0f0',
    borderWidth: 10,
    borderRadius: 6,
    height: 100,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
  },
  botonera: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#909090',
    alignItems: 'center'

  },
  boton: {
    // Estilos para los botones
    width: 70,
    height: 65,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    backgroundColor: '#f0f0f0',
  },
  textoBoton: {
    fontSize: 27,
    color: '#909090'
  }

});
