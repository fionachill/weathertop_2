import {conversions} from "../utils/conversions.js";

export const analytics = {

    latestWeather(station) {
        let latestWeather = null;
        let latestWeatherIndex = station.readings.length - 1;
        if (station.readings.length > 0) {
            latestWeather = station.readings[latestWeatherIndex];
        }
           return latestWeather;
        },

        
    };
