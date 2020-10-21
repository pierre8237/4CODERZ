import axios from "axios";



//Do I need to import /api/pairingRoutes?
export const wineDb = {
  getPairings: function () {
    return axios.get("/api/pairingRoutes");
  }
};