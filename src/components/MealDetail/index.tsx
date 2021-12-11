import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'

const MealDetail = ({ meal }: any) => {
    const handlePress = async () => {
        await Linking.openURL(meal.strYoutube);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
            <View style={styles.content}>
                <Text style={styles.title}>{meal.strMeal}</Text>
                <Text style={styles.area}>{meal.strArea}</Text>
            </View>
            <Text style={styles.desc}>{meal.strInstructions}</Text>
            <View style={styles.btn_container}>
                <TouchableOpacity style={styles.btn} onPress={handlePress}>
                    <Text style={{color: "white"}}>Watch on Youtube</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MealDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
    },
    btn_container: {
        margin: 10,
    },
    btn: {
        backgroundColor: "#FF0000",
        color: "white",
        height: 25,
        textAlign: "center",
        flex: 1,
        paddingVertical: 5,
        borderRadius: 5
    },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 3,
    },
    title: {
        color: "#A52A2A",
        fontSize: 20,
        fontWeight: "bold"
    },
    area: {
        color: "#A52A2A",
        fontSize: 16,
        fontWeight: "bold"
    },
    content: {
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        paddingHorizontal: 5
    },
    desc: {
        marginTop: 5,
        margin: 2,
        paddingHorizontal: 5
    }
})