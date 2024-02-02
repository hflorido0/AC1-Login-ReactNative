import { useState } from 'react';
import { Text, View } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Commons from '../styles/Commons';

export default function TableShow({ navigation }) {

    const[colores, setColores] = useState(['coral','lightgreen'])
    const[usuarios, setUsuarios] = useState(
        [
            {
                "id":1,
                "nombre":"Héctor",
                "correo":"hflorido@escoladeltreball.org",
                "direccion":"",
                "codigo_posatl":"",
                "edad":24
            },
            {
                "id":2,
                "nombre":"Mario",
                "correo":"mdiaz@escoladeltreball.org",
                "direccion":"",
                "codigo_posatl":"",
                "edad":25
            },
        ]
    );

    return (
        <>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text style={Commons.titulo}>Tabla de Usuarios</Text>
            <View style={[Commons.container, Commons.flexDirectionColumn]}>
                {
                    usuarios?.map((element, index) => (
                        <View style={{backgroundColor: colores[index]}}>
                            <Text>ID:</Text>
                            <Text >{element.id}</Text>
                            <Text>Nombre:</Text>
                            <Text>{element.nombre}</Text>
                            <Text>Correo:</Text>
                            <Text>{element.correo}</Text>
                        </View>
                    ))
                }
            </View>
        </>
    )
}