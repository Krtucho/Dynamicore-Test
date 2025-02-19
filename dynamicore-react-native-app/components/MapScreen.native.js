import React, { useEffect, useState } from 'react';
import { View, StyleSheet, PermissionAndroid, Platform } from 'react-native';
import MapView, { Market } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapScreen = () => {
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

    useEffect(() => {
        const requestLocationPermission = async () => {
            if (Platform.Os === "android") {
                const granted = await PermissionsAndroid.request(
                    PermissionAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                );
                if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                    return;
                }
            }
            Geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                },
                (error) => console.error(error),
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        };
        requestLocationPermission();
    }, []);

    if (Platform.OS === 'web') {
        return (
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© OpenStreetMap contributors'
            />
          </MapContainer>
        );
      }

    return (
        <View style={styles.container}>
            {location && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Market coordinate={location} title="Ubicacion Actual" />
                </MapView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapScreen;