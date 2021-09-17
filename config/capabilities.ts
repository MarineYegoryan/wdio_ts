import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

const { argv }: any = yargs(hideBin(process.argv));
let maxInstance = argv.instances || 1;

export const capabilities = {
    "chrome": {
        "maxInstances": maxInstance,
        "browserName": "chrome",
        "acceptInsecureCerts": true
    },
    "firefox": {
        "maxInstances": maxInstance,
        "browserName": "firefox",
        "acceptInsecureCerts": true
    },
    "edge": {
        "maxInstances": maxInstance,
        "browserName": "edge",
        "acceptInsecureCerts": true
    },
    "multi": {
        "chrome": {
            "maxInstances": maxInstance,
            "browserName": "chrome",
            "acceptInsecureCerts": true
        },
        "firefox": {
            "maxInstances": maxInstance,
            "browserName": "firefox",
            "acceptInsecureCerts": true
        },
        "edge": {
            "maxInstances": maxInstance,
            "browserName": "edge",
            "acceptInsecureCerts": true
        }
    }
}
