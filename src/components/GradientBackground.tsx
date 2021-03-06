import React from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface Props {
    children: JSX.Element | JSX.Element[]
}


export const GradientBackground = ({ children }: Props) => {


    return (
        <View style={{flex: 1 }}>
            <LinearGradient 
                colors={[ '#084f6a', '#75cedb', '#e9e9e9' ]}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{x:0.1, y:0.1}}
                // end={{x:0.5, y:0.5}}
                end={{x:0.7, y:0.7}}
            />
            { children }
        </View>
    )
}