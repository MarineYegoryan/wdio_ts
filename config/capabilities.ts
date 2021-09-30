import yargs from "yargs/yargs";
import {hideBin} from "yargs/helpers";

const {argv}: any = yargs(hideBin(process.argv));
let maxInstance: number = argv.instances || 1;

export const capabilities: object = {
    "chrome": [{
        "maxInstances": maxInstance,
        "browserName": "chrome",
        "acceptInsecureCerts": true
    }],
    "firefox": [{
        "maxInstances": maxInstance,
        "browserName": "firefox",
        "acceptInsecureCerts": true
    }],
    "edge": [{
        "maxInstances": maxInstance,
        "browserName": "edge",
        "acceptInsecureCerts": true
    }],
    "multi": [
        {
            "maxInstances": maxInstance,
            "browserName": "chrome",
            "acceptInsecureCerts": true
        },
        {
            "maxInstances": maxInstance,
            "browserName": "firefox",
            "acceptInsecureCerts": true
        },
        {
            "maxInstances": maxInstance,
            "browserName": "edge",
            "acceptInsecureCerts": true
        }
    ]
};
