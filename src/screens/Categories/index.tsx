import React from 'react'
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import CategoryItem from '../../components/CategoryItem'
import useFetch from '../../hooks/useFetch'

const Categories = ({ navigation }: any) => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
    const { data, loading, error } = useFetch(API_URL)

    const handleSelect = (strCategory: string) => {
        navigation.navigate("Meals", { strCategory })
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
        <CategoryItem category={item} onSelect={() => handleSelect(item.strCategory)} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
                data={data.categories} renderItem={({ item }) => renderItems(item)} />
        </View>
    )
}

export default Categories


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFA500",
        padding: 10
    },
})