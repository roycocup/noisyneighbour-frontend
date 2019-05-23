import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "../components/Marker"


class HomeMap extends Component {

    static defaultProps = {
        center: {
            lat: 51.509865,
            lng: -0.118092
        },
        zoom: 19
    };

    render() {
        return (
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: this.props.api_key }}
                    defaultCenter={this.props.center}
                    yesIWantToUseGoogleMapApiInternals={true}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={51.509865}
                        lng={-0.118000}
                        text="My Marker Muddafucker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default HomeMap;