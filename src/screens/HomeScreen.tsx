import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import MoviePoster from '../components/MoviePoster';
import HorizontalSliver from '../components/HorizontalSliver';
import { useMovies } from '../hooks/useMovies';


const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {
    const {top} = useSafeAreaInsets(); //para los safe area, pero solo arriba

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();    

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
                        data={ nowPlaying }    //array de pelis
                        renderItem={ ({ item }:any ) => <MoviePoster movie={ item } /> } //va una por una
                        sliderWidth={ windowWidth }
                        itemWidth={ 315 }
                        inactiveSlideOpacity = {0.9}
                    />
                </View>


                {/* Peliculas populares */}
                <HorizontalSliver title="Popular" movies={ popular } />

                {/* peliculas mejor puntuadas */}
                <HorizontalSliver title="Top Rated" movies={ topRated } />

                {/* peliculas por salir */}
                <HorizontalSliver title="Upcoming" movies={ upcoming } />
            </View>

        </ScrollView>
    )
};

