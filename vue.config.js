module.exports = {
    css: {
        loaderOptions: {
            less: {
                prependData: `@import "@/global.less";`
            }
        }
    }
}
