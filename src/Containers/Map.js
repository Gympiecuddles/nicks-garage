import { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'


class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: true,
            activeMarker: {},
            selectedPlace: {},
        }
    };

    onMarkerClick = (props, marker) =>
        this.setState({
            showingInfoWindow: true,
            activeMarker: marker,
            selectedPlace: props
        });

    onMapClicked = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    windowClosed = () => {
        this.setState({
            showingInfoWindow: false
        })
    };
        
    render() {
        if (!this.props.loaded) {
            return <div>Loading...</div>
          }
        return(        
            <Map
                google= {this.props.google}
                style= {{width:"100%", height: "480px"}}
                zoom = {14}
                initialCenter = {
                    {
                        lat: 26.690090,
                        lng: -80.112370
                    }
                }
                onClick={this.onMapClicked}
            >
                <Marker 
                title={"Nick's Garage"}
                name={"Nick's Garage"}
                onClick={this.onMarkerClick}
                />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.windowClosed}>
                    <div>
                        <h1>Nick's Garage <br/><a href='https://goo.gl/maps/Ysy6XayKwLUxsawu6' target="_blank" rel="noreferrer">Directions</a></h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyCeDkIshOjKgJDhfWCimPPYdCXUvXN-xr4"
})(GoogleMap)