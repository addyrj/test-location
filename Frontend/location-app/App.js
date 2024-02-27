import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const App = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch()
            .then(response => response.json())
            .then(data => {
                setLocations(data.locations);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching locations:', error));
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Location List</Text>
            <FlatList
                data={locations}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationText}>{item.latitude}, {item.longitude}</Text>
                        <Text style={styles.timestampText}>{item.timestamp}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    locationContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    locationText: {
        fontSize: 18,
    },
    timestampText: {
        fontSize: 14,
        color: '#666',
    },
});

export default App;
