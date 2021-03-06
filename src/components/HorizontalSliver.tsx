import React from 'react';
import { FlatList, Text, View } from 'react-native';

import MoviePoster from './MoviePoster';

import { Movie } from '../interfaces/movieInterface';

interface Props {
    title?: string;
    movies: Movie[];
}



const HorizontalSliver = ({ title, movies }:Props) => {
    return (
        <>
            <View style={{ 
                height: (title ? 260 : 220)
            }}>

                {
                    title && (<Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 8, color: 'black'}}>{title}</Text>)
                }

                <FlatList
                    data={ movies }
                    renderItem={ ({ item }:any ) => (
                        <MoviePoster movie={ item } height={ 180 } width={ 140 } />
                    ) }
                    keyExtractor={ (item) => item.id.toString() }
                    horizontal={ true }
                    // showsHorizontalScrollIndicator={ false }
                />
            </View>
        </>        
    )
};

export default HorizontalSliver;
