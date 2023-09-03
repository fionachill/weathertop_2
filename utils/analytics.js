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
            return maxTemp.temp;
        } else {
            return 0;
        }
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
                return minTemp.temp;
            }else{
            return 0;
            }
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
                return maxWSpeed.wSpeed;
            }else{
                return 0;
            }
            
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
                return minWSpeed.wSpeed;
            }else{
                return 0;
            }
            
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
                return maxPressure.pressure;
            }else {
                return 0;
            }
            
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
                return minPressure.pressure;
        }else{
            return 0;
        }
            
    },
    
    tempTrend(station){
        let tempTrend = null;
        if (station.readings.length > 2){
        let pos1 = (station.readings.length - 3);
        let pos2 = (station.readings.length - 2);
        let pos3 = (station.readings.length - 1);
        let tempTrend1 = station.readings[pos1].temp;
        let tempTrend2 = station.readings[pos2].temp;
        let tempTrend3 = station.readings[pos3].temp;
            if ((tempTrend3 > tempTrend2) && (tempTrend2 > tempTrend1)){
                tempTrend = "fa-solid fa-lg fa-arrow-up fa-2xl";
            }else if ((tempTrend3 < tempTrend2) && (tempTrend2 < tempTrend1)){
                tempTrend = "fa-solid fa-lg fa-arrow-down fa-2xl";
            }else{
                tempTrend = "null";
            }
        }
        return tempTrend;    
    },

    windTrend(station){
        let windTrend = null;
        if (station.readings.length > 2){
        let pos1 = (station.readings.length - 3);
        let pos2 = (station.readings.length - 2);
        let pos3 = (station.readings.length - 1);
        let windTrend1 = station.readings[pos1].wSpeed;
        let windTrend2 = station.readings[pos2].wSpeed;
        let windTrend3 = station.readings[pos3].wSpeed;
            if ((windTrend3 > windTrend2) && (windTrend2 > windTrend1)){
                windTrend = "fa-solid fa-lg fa-arrow-up fa-2xl";
            }else if ((windTrend3 < windTrend2) && (windTrend2 < windTrend1)){
                windTrend = "fa-solid fa-lg fa-arrow-down fa-2xl";
            }else{
                windTrend = "null";
            }
        }
        return windTrend;    
    },

    pressureTrend(station){
        let pressureTrend = null;
        if (station.readings.length > 2){
        let pos1 = (station.readings.length - 3);
        let pos2 = (station.readings.length - 2);
        let pos3 = (station.readings.length - 1);
        let pressureTrend1 = station.readings[pos1].pressure;
        let pressureTrend2 = station.readings[pos2].pressure;
        let pressureTrend3 = station.readings[pos3].pressure;
            if ((pressureTrend3 > pressureTrend2) && (pressureTrend2 > pressureTrend1)){
                pressureTrend = "fa-solid fa-lg fa-arrow-up fa-2xl";
            }else if ((pressureTrend3 < pressureTrend2) && (pressureTrend2 < pressureTrend1)){
                pressureTrend = "fa-solid fa-lg fa-arrow-down fa-2xl";
            }else{
                pressureTrend = "null";
            }
        }
        return pressureTrend;    
    },



    };
