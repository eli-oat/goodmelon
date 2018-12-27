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
            "admin",
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
