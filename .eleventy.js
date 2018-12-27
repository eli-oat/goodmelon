module.exports = () => {

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
            "svg",
            "yml"
        ],

        passthroughFileCopy: true

    }
};
