import React from 'react';
import { FlatList, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';

import Icon from 'react-native-vector-icons/Ionicons';

import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import { CastItem } from './CastItem';


interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}


export const MovieDetails = ({ movieFull, cast }: Props) => {
    
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal:20, marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon 
                        name='star-outline'
                        color='grey'
                        size={ 16 }
                    />
                    <Text> { movieFull.vote_average } </Text>

                    <Text style={{ marginLeft: 5 }}>
                         - { movieFull.genres.map( g => g.name).join(', ') }
                    </Text>
                </View>

                {/* historia */}
                <Text style={{ fontSize: 22, marginTop: 10, fontWeight: 'bold'}}>
                    Historia
                </Text>
                <Text style={{fontSize: 15}}>
                    {movieFull.overview
                    ? movieFull.overview
                    : "No hay descripción" }
                </Text>

                {/* presupuesto */}
                <Text style={{ fontSize: 22, marginTop: 10, fontWeight: 'bold'}}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize:18 }}>
                    {movieFull.budget
                    ? ((currencyFormatter.format(movieFull.budget,{ code:'USD' }))) 
                    : "No se dio a conocer el presupuesto" }
                </Text>

            </View>

            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 22, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20, }}>
                    Actores
                </Text>

                <FlatList 
                    data={ cast }
                    horizontal={true}
                    keyExtractor={ (item) => item.id.toString() }
                    renderItem={ ({ item }) => <CastItem actor={ item } /> }
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70}}
                />
                

            </View>


        </>    
    )
}
