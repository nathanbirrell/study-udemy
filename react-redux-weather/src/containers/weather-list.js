import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GoogleMap from '../components/google_map';
import { fetchWeather } from '../actions/index';
import Chart from '../components/chart';

class WeatherList extends Component {
  componentDidMount() {
    this.props.fetchWeather('Melbourne');
    this.props.fetchWeather('Sydney');
    this.props.fetchWeather('Brisbane');
  };

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperatures = cityData.list.map(weather => weather.main.temp - 273.15); // Temp from Kelvin to Celcius
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    console.debug('temps', temperatures);
    console.debug('pressures', pressures);

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temperatures} color="orange" units="C" /></td>
        <td><Chart data={pressures} color="red" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th width="10%">City</th>
            <th width="30%">Temperature (C)</th>
            <th width="30%">Pressure (hPa)</th>
            <th width="30%">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return { weather }; // === {weather = weather}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
