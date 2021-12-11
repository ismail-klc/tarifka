import React from 'react'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const CategoryItem = ({ category, onSelect }: any) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
                <Text style={styles.title}>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#ECEFF1",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    image: {
        height: 60,
        width: 70,
        marginLeft: 10,
        resizeMode: "contain",
        borderRadius: 10
    },
    title: {
        flex: 1,
        alignSelf: "center",
        marginLeft: 3,
        fontSize: 16,
    }
})