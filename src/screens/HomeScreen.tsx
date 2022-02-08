import React from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';


const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {
    const {top} = useSafeAreaInsets(); //para los safe area, pero solo arriba

    const { peliculasEnCine, isLoading } = useMovies();    

    if(isLoading) {
        return (
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator  //es mostrar un loading
                    color= 'red'
                    size={100}
                />
            </View>
        )
    }

    return (
        <View style={{ marginTop: top + 20}}>
            
            <View style={{ height: 440 }} >
                <Carousel 
                    data={ peliculasEnCine }    //array de pelis
                    renderItem={ ({ item }:any ) => <MoviePoster movie={ item } /> } //va una por una
                    sliderWidth={ windowWidth }
                    itemWidth={ 300 }
                />
            </View>

        </View>
    )
};

