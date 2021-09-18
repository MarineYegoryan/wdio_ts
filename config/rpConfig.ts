const args = require("yargs").argv;
const rpToken = args.rpToken;

export const rpConfig = {
    reportPortalClientConfig: { // report portal settings
        token: `${rpToken}`,
        endpoint: "https://reportportal.epam.com/api/v1",
        launch: "GSKY_TEST_EXAMPLE",
        project: "gsky-mecp",
    },
    reportSeleniumCommands: false, // add selenium commands to log
    seleniumCommandsLogLevel: "debug", // log level for selenium commands
    enableScreenshotsReporting: true,
    autoAttachScreenshots: true, // automatically add screenshots
    screenshotsLogLevel: "info", // log level for screenshots
    parseTagsFromTestTitle: false, // parse strings like `@foo` from titles and add to Report Portal
    cucumberNestedSteps: false, // report cucumber steps as Report Portal steps
};
