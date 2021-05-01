import React from 'react'
import currencyFormater from 'currency-formatter';
import { View, Text, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/movieInterface';
import { ActorItem } from './ActorItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}

export const MovieDetails = ({movieFull, cast}: Props) => {

    return (
        <>
            {/* Detalles */}
            <View style={{marginHorizontal:20}} >
                <View style={{flexDirection: 'row'}} >
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={{marginLeft: 5}} >
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                {/* Historia */}
                <Text style={{fontSize: 22, marginTop: 10, fontWeight: 'bold'}} >
                    Historia
                </Text>
                <Text style={{fontSize: 16,textAlign: 'justify'}} >{movieFull.overview}</Text>
                {/* Presupuesto */}
                <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: -10}} >
                    Presupuesto
                </Text>
                <Text 
                    style={{fontSize: 18}} 
                >
                    {currencyFormater.format(movieFull.budget, {code:'USD'})}
                </Text>
            </View>            

            {/* Casting */}
            <View style={{marginTop: 10, marginBottom: 20}} >
                <Text style={{fontSize: 22, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20}} >
                    Actores
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item)=> item.id.toString() }
                    renderItem={({item})=> <ActorItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        marginTop: 10,
                        height: 70
                    }}
                />
            </View>
        </>
    )
}
