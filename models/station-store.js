import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { readingStore } from "./reading-store.js";

const db = initStore("stations");

export const stationStore = {
    async getAllStations() {
        await db.read();
        return db.data.stations;
    },

    async addStation(station) {
        await db.read();
        station._id = v4();
        db.data.stations.push(station);
        await db.write();
        return station;
    },

    async getStationById(id) {
        await db.read();
        const list = db.data.stations.find((station) => station._id === id);
        if (list){
        list.readings = await readingStore.getReadingsByStationId(list._id);
        }
        return list;
    },

    async getStationsByUserId(userid){
        await db.read();
        const list = db.data.stations.filter((station) => station.userid === userid);
        list.sort((a,b) => (a.title > b.title ? 1: -1))
        return list;
    },

    async deleteStationById(id) {
        await db.read();
        const index = db.data.stations.findIndex((station) => station._id === id);
        db.data.stations.splice(index, 1);
        await db.write();
    },

    async deleteAllStations() {
        db.data.stations = [];
        await db.write();
    },
};