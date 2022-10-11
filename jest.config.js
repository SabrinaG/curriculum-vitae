module.exports = {
    roots: ["src"],
    verbose: true,
    testURL: "http://localhost:8080/",
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
        "<rootDir>/src/assets/setups/setupJest.js",
        "<rootDir>/src/assets/setups/setupMock.js",
        "<rootDir>/src/assets/setups/setupTests.js",
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/src/**/*.{jsx,js}", 
        "!<rootDir>/**/tests/**",
        "!<rootDir>/**/node_modules/**"
    ],
    coverageDirectory: "coverage",
    coverageReporters: [ "json", "text", "html", ["lcov", {"projectRoot": "."}] ],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$":
            "<rootDir>/src/assets/setups/setupMock.js",
    }
};
