import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({movie, height= 420, width= 300}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={()=> navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.9}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingTop: 15,
                paddingHorizontal: 7
        }} >
            <View style={styles.imageContainer} >
                <Image
                    source={{uri}}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius: 20
    },
    imageContainer:{
        flex:1,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 6,

        elevation: 9,
    }
});
