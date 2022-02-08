import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';


interface Props {
    movie: Movie;
}


const MoviePoster = ({ movie }:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    // console.log(movie.poster_path)

    return (
        <View
            style={{
                width: 300,
                height: 400,
            }}
        >
            <View style={styles.imageContainer} >
                <Image 
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </View>
    )
};

export default MoviePoster;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer:{
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 4.65,

        elevation: 15,
    }
});