export const conversions = {

    getWCode(code) {
        let wCode = null; 
            if (code === '100'){
                wCode = "Clear";
            }else if (code === '200'){
                wCode = "Partial Clouds";
            }else if (code === '300'){
                wCode = "Cloudy";   
            }else if (code === '400'){
                wCode = "Light Showers";
            }else if (code === '500'){
                wCode = "Heavy Showers";   
            }else if (code === '600'){
                wCode = "Rain";
            }else if (code === '700'){
                wCode = "Snow";   
            }else if (code === '800'){
                wCode = "Thunder";                                  
            }
            return wCode;
        },

        fTemp(temp) {
            let ftemp = (temp * 9/5) + 32;
            return ftemp; 
        },

         bFort(wSpeed) {
            let bFort = null;
            if (wSpeed === 1){
                bFort = 0;
            }else if((wSpeed > 1) && (wSpeed < 6)){
                    bFort = 1;
            }else if ((wSpeed > 5) && (wSpeed < 12)) {
                    bFort = 2;
            } else if ((wSpeed > 11) && (wSpeed < 20)) {
                    bFort = 3;
            } else if ((wSpeed > 19) && (wSpeed < 29)) {
                    bFort = 4;
            } else if ((wSpeed > 28) && (wSpeed < 39)) {
                    bFort = 5;
            } else if ((wSpeed > 38) && (wSpeed < 50)) {
                    bFort = 6;
            } else if ((wSpeed > 49) && (wSpeed < 62)) {
                    bFort = 7;
            } else if ((wSpeed > 61) && (wSpeed < 75)) {
                    bFort = 8;
            } else if ((wSpeed > 74) && (wSpeed < 89)) {
                    bFort = 9;
            } else if ((wSpeed > 88) && (wSpeed < 103)) {
                    bFort = 10;
            } else if ((wSpeed > 102) && (wSpeed < 118)) {
                    bFort = 11;
            }
                return bFort;
            },

        getWCompass(wDir){
            let wCompass = null;
            if ((wDir > 348.75) && (wDir < 11.25)) {
                wCompass = "North";
            } else if ((wDir > 11.25) && (wDir < 33.75)) {
                wCompass = "North North East";
            } else if ((wDir > 33.75) && (wDir < 56.25)) {
                wCompass = "North East";
            } else if ((wDir > 56.25) && (wDir < 78.75)) {
                wCompass = "East North East";
            } else if ((wDir > 78.75) && (wDir < 101.25)) {
                wCompass = "East";
            } else if ((wDir > 101.25) && (wDir < 123.75)) {
                wCompass = "East South East";
            } else if ((wDir > 123.75) && (wDir < 146.25)) {
                wCompass = "South East";
            } else if ((wDir > 146.25) && (wDir < 168.75)) {
                wCompass = "South South East";
            } else if ((wDir > 168.75) && (wDir < 191.25)) {
                wCompass = "South";
            } else if ((wDir > 191.25) && (wDir < 213.75)) {
                wCompass = "South South West";
            } else if ((wDir > 213.75) && (wDir < 236.25)) {
                wCompass = "South West";
            } else if ((wDir > 236.25) && (wDir < 258.75)) {
                wCompass = "West South West";
            } else if ((wDir > 258.75) && (wDir < 281.25)) {
                wCompass = "West";
            } else if ((wDir > 281.25) && (wDir < 303.75)) {
                wCompass = "West North West";
            } else if ((wDir > 303.75) && (wDir < 326.25)) {
                wCompass = "North West";
            } else if((wDir > 326.25) && (wDir < 348.75)){
                wCompass = "North North West";
            }
            return wCompass;
        },

        getWindChill(temp, wSpeed) {
            if ((temp > 9) && (wSpeed > 4.8)){
                windChill = (13.12 + (0.6215 * temp) - 11.37 * ((wSpeed ** 0.16) + (0.3965 * temp) * (wSpeed ** 0.16) ));
                return (windchill * 100)/100.0; 
            }else{
                return temp;
            }
        },  
    };
    