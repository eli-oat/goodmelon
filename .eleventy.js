const CleanCSS = require("clean-css");
const UglifyJS = require("uglify-js");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {

    // Minify CSS
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    // Minify JS
    eleventyConfig.addFilter("jsmin", function(code) {
        let minified = UglifyJS.minify(code);
        if( minified.error ) {
            console.log("UglifyJS error: ", minified.error);
            return code;
        }
        return minified.code;
    });

    // Minify HTML output
    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        if( outputPath.indexOf(".html") > -1 ) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }
        return content;
    });

    // Don't process folders with static assets e.g. images
    eleventyConfig.addPassthroughCopy("assets/imgs");

    return {
        templateFormats: [
            "md",
            "hbs",
            "html"
        ],

        passthroughFileCopy: true,
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};
