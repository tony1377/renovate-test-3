module.exports = {
    // === shared config with azure...
    logFile: "C:\\PebbleProjects-non-spa-code-and-scratchpads\\renovate\\renovate-cli\\renovate.log",


    logLevel: 'debug',
    onboarding: true,
    onboardingConfig: {
        extends: ['config:base'],
    },

    // === github specific config...
    repositories: ['tony1377/renovate-test-2'],

    // === testing fields...
    rangeStrategy: "update-lockfile"
};
