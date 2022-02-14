import { useRef } from 'react';
import { Animated } from 'react-native';

export const useFade = () => {

    const opacity = useRef( new Animated.Value(0) ).current;    //por defecto el value arranca en 0

    const fadeIn = () => {
        Animated.timing(
            opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    }

    const fadeOut = () => {
        Animated.timing(
            opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start()
    }

    return {
        opacity,    //tamaño inicial
        fadeIn,     // llevar opacidad a 1
        fadeOut,    // llevar opacidad a 0
    }
}
