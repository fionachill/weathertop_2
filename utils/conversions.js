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
        };
    