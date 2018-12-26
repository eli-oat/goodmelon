// const CleanCSS = require("clean-css");
// const UglifyJS = require("uglify-js");
// const htmlmin = require("html-minifier");
//
// module.exports = function(eleventyConfig) {
//
//     // Minify CSS
//     eleventyConfig.addFilter("cssmin", function(code) {
//         return new CleanCSS({}).minify(code).styles;
//     });
//
//     // Minify JS
//     eleventyConfig.addFilter("jsmin", function(code) {
//         let minified = UglifyJS.minify(code);
//         if( minified.error ) {
//             console.log("UglifyJS error: ", minified.error);
//             return code;
//         }
//         return minified.code;
//     });
//
//     // Minify HTML output
//     eleventyConfig.addTransform("htmlmin", function(pages, outputPath) {
//         if( outputPath.indexOf(".html") > -1 ) {
//             let minified = htmlmin.minify(pages, {
//                 useShortDoctype: true,
//                 removeComments: true,
//                 collapseWhitespace: true
//             });
//             return minified;
//         }
//         return pages;
//     });
//
// };

module.exports = (eleventyConfig) => {

    return {

        dir: {
            // includes: "_includes",
            input: "pages"
        },

        templateFormats: [
            "md",
            "html",
            "js",
            "css",
            "jpg",
            "png",
            "gif",
            "svg"
        ],

        passthroughFileCopy: true

    }
};
