import axios from "../config/axios";

export const getCollectionData = () => {
    return api.get("/collections");
};