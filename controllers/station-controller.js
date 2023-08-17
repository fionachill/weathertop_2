import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";

export const stationController = {
    async index(request, response) {
        const station = await stationStore.getStationById(request.params.id);
        const viewData = {
            title: "Station",
            station: station,
        };
        response.render("station-view", viewData);
    },

    async addReading(request, response) {
        const station = await stationStore.getStationById(request.params.id);
        const newReading = {
           code: Number(request.body.code),
           temp: Number(request.body.temp),
           wSpeed: Number(request.body.wSpeed), 
        };
        console.log(`adding new reading to ${station.title}`);
        await readingStore.addReading(station._id, newReading);
        response.redirect("/station/" + station._id);
    },
};