import React from 'react'
import { View, Text } from 'react-native'
import styles from "./style"

export default function CurrentPrice(props) {
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.CurrentPrice}> $ {props.lastCotation}</Text>
            <Text style={styles.textPrice}>ultima cotação</Text>
        </View>
    )
}
