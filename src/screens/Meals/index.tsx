import React from 'react'
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import MealItem from '../../components/MealItem';
import useFetch from '../../hooks/useFetch';

const Meals = ({ route, navigation }: any) => {
    const { strCategory } = route.params;
    console.log(route.params);

    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
    const { data, loading, error } = useFetch(API_URL + strCategory)

    const handleSelect = (idMeal: string) => {
        navigation.navigate("Detail", { idMeal })
    }

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

    const renderItems = (item: any) => (
        <MealItem meal={item} onSelect={() => handleSelect(item.idMeal)} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
                data={data.meals} renderItem={({ item }) => renderItems(item)} />
        </View>
    )
}

export default Meals

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFA500",
        padding: 10
    },
})