import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native'

const MealItem = ({ meal, onSelect }: any) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
                <View style={styles.title}>
                    <Text style={styles.text}>{meal.strMeal}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default MealItem


const styles = StyleSheet.create({
    container: {
    },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 4,
        position: "relative",
    },
    title: {
        flex: 1,
        position: "absolute",
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        width: Dimensions.get("window").width,
        bottom: 0,
        textAlign: "center"
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    }
})