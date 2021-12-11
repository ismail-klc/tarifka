import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import MealDetail from '../../components/MealDetail';
import useFetch from '../../hooks/useFetch';

const Detail = ({ route }: any) => {
    const { idMeal } = route.params;

    const API_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
    const { data, loading, error } = useFetch(API_URL + idMeal)

    console.log(data);
    

    if (error) {
        return (
            <Text>{error.message}</Text>
        )
    }

    if (loading) {
        return (
            <ActivityIndicator size={"large"} style={{ flex: 1 }} />
        )
    }

    return (
        <SafeAreaView style={{marginBottom: 10, backgroundColor: "#F2F2F2"}}>
            <MealDetail meal={data.meals[0]}/>
        </SafeAreaView>
    )
}

export default Detail
