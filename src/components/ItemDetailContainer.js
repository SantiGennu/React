import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
// import bolsoNox from "../assets/bolso.nox.jpg"
// import gorra from "../assets/gorra.bullpadel.jpg"
// import munequera from "../assets/munequera.jpg"
// import pelotaAdidas from "../assets/pelotas.adidas.jpg"
// import pelotaHead from "../assets/pelotas.head.jpg"
// import pelotaWilson from "../assets/pelotas.wilson.jpg"
// import head from "../assets/head.jpg"
// import adidas from "../assets/paleta.jpg"
// import wilson from "../assets/pelotas.wilson.jpg"
// import nox from "../assets/nox.jpg"
// import bullpadel from "../assets/bullpadel.jpg"
// import dunlop from "../assets/dunlop.jpg"
// import siux from "../assets/siux.jpg"
import { getFirestore, doc, getDoc } from "firebase/firestore";

// class productos {
//     constructor(nombre, modelo, descripcion, categoria, precio, imagen, id, stock) {

//         this.nombre = nombre;
//         this.modelo = modelo;
//         this.descripcion = descripcion
//         this.categoria = categoria
//         this.precio = precio;
//         this.imagen = imagen;
//         this.id = id;
//         this.stock = stock

//     }
// }

// const listaProductos = [
//     new productos("Head", "Alpha Pro", "La Head Graphene Touch Alpha Pro es la pala de potencia con la que sentirás la sensación de tener un guante en la mano y podrás jugar muy fácil. Pala del jugador profesional Sanyo Gutiérrez. GRAPHENEXT FLEXIBLE CHASSIS en el tubular de la pala para lograr una unión más suave con la goma y obtener así un mayor confort y punto dulce.", "paletas", 80000, head, 1, 5),
//     new productos("Adidas", "Match 2.0", "ADIDAS Match 2.0, una pala de potencia y control pensada para los jugadores principiantes u ocasionales que gustan obtener un juego equilibrado. Destaca por estar construida con materiales de la mejor calidad que aseguran una estupenda resistencia y durabilidad durante los partidos.", "paletas", 85000, adidas, 2, 7),
//     new productos("Wilson", "Bela", 'La saga Wilson Bela es la gama desarrollada por Bela que tiene más de potencia según vamos aumentando de nivel de pala. Este modelo está construido con fibra de vidrio y una goma CORE FOAM. ', "paletas", 90000, wilson, 3, 2),
//     new productos("Bullpadel", "Vertex03", 'Bullpadel Vertex 03 La Vertex03 es una pala con forma de diamante, de máxima potencia, alto rendimiento y con superficie rugosa “Topspin” para ayudar a imprimir golpes con mayor efecto. Está compuesta por caras de carbono 12K, núcleo interno de goma de MultiEVA y marco de 100% carbono.', "paletas", 92000, bullpadel, 4, 12),
//     new productos("Dunlop", "Aero star", 'Descripción La pala Dunlop Aero Star es perfecta para quien busca gran manejabilidad y sobre todo potencia en sus golpes de ataque. Fabricada en Carbono en la cara y Japanese Carbon en el marco, lo que la convierte en una herramienta ideal de juego para jugadores de nivel avanzado.', "paletas", 82000, dunlop, 5, 8),
//     new productos("Nox", "Tempo WPT", 'La Tempo WPT de NOX es una pala con un gran control y buena potencia. Punto dulce amplio y muy cómoda en pista.', "paletas", 90500, nox, 6, 3),
//     new productos("Siux", "Spyder", 'La Siux Spyder es una de las mejores palas creadas por Siux, destaca por su gran rendimiento en cada punto, en control y potencia, diseño de gran calidad', "paletas", 92300, siux, 7, 9),
//     new productos("Bolso", "Nox", 'Paletero práctico y ligero diseñado para jugadores que buscan comodidad.Amplio compartimento principal con cremallera.', "accesorios", 10000, bolsoNox, 8, 2),
//     new productos("Gorra", "Bullpadel", 'Es la gorra idónea para cualquier ocasión, desde un partido rápido en la pista hasta el mas duro de los entrenamientos. Está fabricada en poliéster y lleva una cinta de velcro en la parte posterior para asegurar un ajuste perfecto.', "accesorios", 10000, gorra, 9, 3),
//     new productos("Muñequera", "World padel tour", 'World Padel Tour Muñequeras de alta absorción que evita que el sudor alcance la mano del jugador. Características de las muñequeras BPMU21 WPT Retención del calor sobre la articulación (concentra y retiene el calor sobre la articulación de la muñeca, previniendo lesiones).', "accesorios", 10000, munequera, 10, 2),
//     new productos("Pelotas", "Adidas", 'Bolas para jugar al pádel Adidas, pelotas de alto rendimiento con los que disfrutar en cada punto. Alta calidad Adidas al mejor precio del mercado.', "accesorios", 10000, pelotaAdidas, 11, 2),
//     new productos("Pelotas", "Head", 'La pelota de pádel Head Pro Wpt posiblemente sea la más vendida actualmente gracias a su potrocinio con el circuito profesional y por ser la bola más alegre en su juego, con mejor bote y con mayor duración.', "accesorios", 10000, pelotaHead, 12, 2),
//     new productos("Pelotas", "Wilson", 'Las pelotas de padel Wilson son las más utilizadas y conocidas en todo el mundo. Son excelentes para los jugadores que buscan control, buena sensación y durabilidad. Encuéntralas al mejor precio del mercado aquí en Padelot.', "accesorios", 10000, pelotaWilson, 13, 2),



// ]



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { detailId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "productos", detailId);
        getDoc(queryDoc)
            .then(res => setItem({ id: res.id, ...res.data() }))

    }, [detailId]);


    return (
        <div>
            <ItemDetail item={item} />


        </div>


    )
}

export default ItemDetailContainer