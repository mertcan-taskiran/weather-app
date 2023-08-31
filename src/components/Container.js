import React from 'react';
import { WeatherProvider } from '../context/WeatherContext';
import Location from './Location';
import WeatherCard from './WeatherCard';

export default function Container() {
  return (
    <WeatherProvider>
        <Location />
        <WeatherCard />
    </WeatherProvider>
  )
}