import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import MapView, {Marker, Polyline, Polygon, Circle} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

const LATITUDE = -6.302403;
const LONGITUDE = 106.652248;
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = 0.015;
const GOOGLE_MAPS_APIKEY = 'AIzaSyAW2fiQIFQTkE2z5B19jshl4UMJykSaeXM';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coordinates: [
        {latitude: -6.302403, longitude: 106.652248},
        {latitude: -6.299461, longitude: 106.663339},
      ],
    };
  }

  render() {
    const pin = {
      latitude: -6.302403,
      longitude: 106.652248,
    };

    const pin1 = {
      latitude: -6.302403,
      longitude: 106.652248,
    };
    const pin2 = {
      latitude: -6.350403,
      longitude: 106.683248,
    };
    const pin3 = {
      latitude: -6.320403,
      longitude: 106.693248,
    };

    return (
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFill}>
        <MapView.Marker coordinate={this.state.coordinates[0]} />
        <MapView.Marker coordinate={this.state.coordinates[1]} />
        <MapViewDirections
          origin={this.state.coordinates[0]}
          destination={this.state.coordinates[1]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      </MapView>
    );

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: -6.302403,
            longitude: 106.652248,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          }}>
          {/* <Marker
            coordinate={pin}
            title={'Freddy'}
            description={'Aku di sini'}
            pinColor={'red'}
          /> */}

          {/* <MapView.Marker
            coordinate={pin}
            title={'Freddy'}
            description={'Aku di sini'}>
            <Image
              source={require('./gambar/avatar.png')}
              style={{width: 50, height: 50}}
            />
          </MapView.Marker> */}

          {/* <Polyline
            coordinates={[pin1, pin2, pin3]}
            strokeWidth={10}
            strokeColor={'red'}
            fillColor={'yellow'}
          /> */}

          {/* <Polygon
            coordinates={[pin1, pin2, pin3]}
            strokeWidth={10}
            strokeColor={'red'}
            fillColor={'yellow'}
          /> */}

          <Circle
            center={pin}
            radius={50}
            strokeWidth={10}
            strokeColor={'red'}
            fillColor={'yellow'}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
