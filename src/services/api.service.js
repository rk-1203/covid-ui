import axios from "axios";
import config from "../config/config";

class APIService {

    static fetchCovidStatsSummary(params) {
        return axios({
            method: 'GET',
            url: `${config.covidBaseUrl}summary`,
            params
        });
    }
}

export default APIService