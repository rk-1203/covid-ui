import { ENV_NAME } from "../constants/constant";

export const ENV = getCurrentEnv();

const Environment = {
    [ENV_NAME.PROD]: {
        covidBaseUrl: "https://api.covid19api.com/"
    },
    [ENV_NAME.QA]: {
        covidBaseUrl: "https://api.covid19api.com/"
    },
    [ENV_NAME.DEV]: {
        covidBaseUrl: "https://api.covid19api.com/"
    }
};

function getCurrentEnv() {
    return process.env.REACT_APP_ENV || ENV_NAME.DEV;
};

function bootstrapEnv() {
    const env = Environment[ENV];
    return env;
};

export default bootstrapEnv();