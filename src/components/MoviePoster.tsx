import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Movie } from '../interfaces/movieInterface';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';



type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'DetailScreen'>

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}


const MoviePoster = ({ movie, height = 420, width = 300 }:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const navigation = useNavigation<HomeScreenNavigationProp>()
    // const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate('DetailScreen', movie) }
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 8,
            }}
        >
            <View style={styles.imageContainer} >
                <Image 
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
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

        elevation: 10,
    }
});