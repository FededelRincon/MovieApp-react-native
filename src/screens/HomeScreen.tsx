import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';

import { useMovies } from '../hooks/useMovies';


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
            <MoviePoster movie={ peliculasEnCine[0] } />
        </View>
    )
};

