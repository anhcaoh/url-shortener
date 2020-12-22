module.exports = {
    moduleFileExtensions: ["js", "jsx", "tsx", "json", "scss", "css"],
    moduleDirectories: ["node_modules", "src"],
    setupFilesAfterEnv: ["<rootDir>src/setupTests.js"],
    "moduleNameMapper": {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
};