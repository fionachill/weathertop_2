import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { conversions } from "../utils/conversions.js";
import { analytics } from "../utils/analytics.js";

export const stationController = {
    async index(request, response) {
        const station = await stationStore.getStationById(request.params.id);
        const latestWeather = analytics.latestWeather(station);
        const title = await station.title;
        const code = await station.code;
        const wIcon = await station.wIcon;
        const wCode = await station.wCode; 
        const latitude = await station.latitude;
        const longitude = await station.longitude;
        const maxTemp = await analytics.getMaxTemp(station);
        const minTemp = await analytics.getMinTemp(station);
        const maxWSpeed = await analytics.getMaxWSpeed(station);
        const minWSpeed = await analytics.getMinWSpeed(station);
        const maxPressure = await analytics.getMaxPressure(station);
        const minPressure = await analytics.getMinPressure(station);
        const tempTrend = await analytics.tempTrend(station);
        const windTrend = await analytics.windTrend(station);
        const pressureTrend = await analytics.pressureTrend(station);
        const viewData = {
            title: "Station",
            station: station,
            latestWeather: latestWeather,
            wCode: wCode,
            wIcon: wIcon,
            latitude: latitude,
            longitude: longitude,
            maxTemp: maxTemp,
            minTemp: minTemp,
            maxWSpeed: maxWSpeed,
            minWSpeed: minWSpeed,
            maxPressure: maxPressure,
            minPressure: minPressure,
            tempTrend: tempTrend,
            windTrend: windTrend,
            pressureTrend: pressureTrend,
        };
        response.render("station-view", viewData);
    },

    async addReading(request, response) {
        const station = await stationStore.getStationById(request.params.id);
        const newReading = {
           date: String(new Date()), 
           code: Number(request.body.code),
           temp: Number(request.body.temp),
           wSpeed: Number(request.body.wSpeed), 
           wDir: Number(request.body.wDir),
           pressure: Number(request.body.pressure),
           wCode: String(conversions.getWCode(request.body.code)),
           fTemp: Number(conversions.fTemp(request.body.temp)),
           bFort: Number(conversions.bFort(request.body.wSpeed)),
           wCompass: String(conversions.getWCompass(request.body.wDir)),
           windChill: Number(conversions.getWindChill(Number(request.body.temp), Number(request.body.wSpeed))),
           wIcon: String(conversions.getWIcon(request.body.code))
        };
        console.log(`adding new reading to ${station.title}`);
        await readingStore.addReading(station._id, newReading);
        response.redirect("/station/" + station._id);
    },

    async deleteReading(request, response){
        const stationId = request.params.stationid;
        const readingId = request.params.readingid;
        console.log(`Deleting Reading ${readingId} from Station ${stationId}`);
        await readingStore.deleteReading(readingId);
        response.redirect("/station/" + stationId);
    },
    
};