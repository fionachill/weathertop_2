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

        getMaxTemp(station){
            let maxTemp = null;
            if (station.readings.length > 0) {
                maxTemp = station.readings[0];
                for (let i = 1; i < station.readings.length; i ++) {
                    if (station.readings[i].temp > maxTemp.temp){
                        maxTemp = station.readings[i];
                    }
                }
            }
            return maxTemp.temp;
        },
        
        getMinTemp(station){
            let minTemp = null;
            if (station.readings.length > 0) {
                minTemp = station.readings[0];
                for (let i = 1; i < station.readings.length; i++) {
                    if (station.readings[i]. temp < minTemp.temp){
                        minTemp = station.readings[i];
                    }
                }
            }
            return minTemp.temp;
        },

        getMaxWSpeed(station){
            let maxWSpeed = null;
            if (station.readings.length > 0) {
                maxWSpeed = station.readings[0];
                for (let i = 1; i < station.readings.length; i ++) {
                    if (station.readings[i].wSpeed > maxWSpeed.wSpeed){
                        maxWSpeed = station.readings[i];
                    }
                }
            }
            return maxWSpeed.wSpeed;
        },
        
        getMinWSpeed(station){
            let minWSpeed = null;
            if (station.readings.length > 0) {
                minWSpeed = station.readings[0];
                for (let i = 1; i < station.readings.length; i++) {
                    if (station.readings[i].wSpeed < minWSpeed.wSpeed){
                        minWSpeed = station.readings[i];
                    }
                }
            }
            return minWSpeed.wSpeed;
        },

        getMaxPressure(station){
            let maxPressure = null;
            if (station.readings.length > 0) {
                maxPressure = station.readings[0];
                for (let i = 1; i < station.readings.length; i ++) {
                    if (station.readings[i].pressure > maxPressure.pressure){
                        maxPressure = station.readings[i];
                    }
                }
            }
            return maxPressure.pressure;
        },
        
        getMinPressure(station){
            let minPressure = null;
            if (station.readings.length > 0) {
                minPressure = station.readings[0];
                for (let i = 1; i < station.readings.length; i++) {
                    if (station.readings[i].pressure < minPressure.pressure){
                        minPressure = station.readings[i];
                    }
                }
            }
            return minPressure.pressure;
        },    

    };
