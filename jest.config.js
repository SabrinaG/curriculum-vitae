//eslint-disable-next-line no-undef
module.exports = {
    roots: ["src"],
    verbose: true,
    testURL: "http://localhost:8080/",
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
        "./src/assets/setups/setupApi.js",
        "./src/assets/setups/setupJest.js",
        "./src/assets/setups/setupMock.js",
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{jsx,js}", "!**/node_modules/**", "!src/**/tests/**"
    ],
    coverageDirectory: "coverage",
    coverageReporters: [ "json", "text", "html", ["lcov", {"projectRoot": "."}] ],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$":
            "<rootDir>/src/assets/setups/setupMock.js",
    }
};
