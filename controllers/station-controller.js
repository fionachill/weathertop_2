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
        const wCode = await conversions.wCode;
        const viewData = {
            title: "Station",
            station: station,
            latestWeather: latestWeather,
            wCode: wCode
        };
        response.render("station-view", viewData);
    },

    async addReading(request, response) {
        const station = await stationStore.getStationById(request.params.id);
        const newReading = {
           code: Number(request.body.code),
           temp: Number(request.body.temp),
           wSpeed: Number(request.body.wSpeed), 
           pressure: Number(request.body.pressure),
           wCode: String(conversions.getWCode(request.body.code)),
           fTemp: Number(conversions.fTemp(request.body.temp)),
           bFort: Number(conversions.bFort(request.body.wSpeed))
        };
        console.log(`adding new reading to ${station.title}`);
        await readingStore.addReading(station._id, newReading);
        response.redirect("/station/" + station._id);
    },
    
};