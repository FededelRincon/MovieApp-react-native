import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import MoviePoster from '../components/MoviePoster';
import HorizontalSliver from '../components/HorizontalSliver';
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
        <ScrollView>
            <View style={{ marginTop: top + 20}}>
                
                {/* carrousel principal */}
                <View style={{ height: 440 }} >
                    <Carousel 
                        data={ peliculasEnCine }    //array de pelis
                        renderItem={ ({ item }:any ) => <MoviePoster movie={ item } /> } //va una por una
                        sliderWidth={ windowWidth }
                        itemWidth={ 300 }
                        inactiveSlideOpacity = {0.9}
                    />
                </View>


                {/* Peliculas populares */}
                <HorizontalSliver title="En cine" movies={ peliculasEnCine } />

                {/* peliculas otra cosa */}
                {/* <HorizontalSliver  movies={ peliculasEnCine } /> */}

                {/* peliculas 3er cosa */}
                {/* <HorizontalSliver title="En cine 4" movies={ peliculasEnCine } /> */}
            </View>

        </ScrollView>
    )
};

