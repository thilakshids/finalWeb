import React, { Component } from 'react';
import './Team.css';
import { GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { Map, Marker } from 'google-maps-react';
import { render } from '@testing-library/react';

class Team extends Component{
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      lat: '',
      lng: '',

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 49.2827291,
        lng: -123.1207375
      }


    };
  }


  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        // console.log('Success', { lat, lng }),
        // this.setState({ mapCenter: latLng });
        fetch('http://192.168.8.147:8000/userprofile/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lat, lng })
        })
          .then(data => data.json())
          .then(
            data => {
              this.props.userLogin(data.token);
            }
          )
          .catch(error => console.error('Error', error))
        this.setState({ mapCenter: { lat, lng } });
      });

  };



  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

render(){
  return (
   <div className='teams'>
        <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Here Your Location....',
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';

                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div className="input-suggetions"
                        {...getSuggestionItemProps(suggestion, {

                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <div className="ma">
          <Map
            google={this.props.google}
            style={{
              width: "90%",
              position: "absolute",
              left: "25px",
              top: "20px",
              height: "90%",
              border: "3px double white",
              

            }}
            zoom={14}
            initialCenter={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }}
            center={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }}
          >
            <Marker
              position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
              }} />
          </Map>   
    </div></div>
  );
}
}

export default GoogleApiWrapper({
  apiKey: "hvhvza"
})(Team);
