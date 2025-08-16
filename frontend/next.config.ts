import nextra from "nextra";

const withNextra = nextra({
});

export default withNextra({
    //output: 'export', // Enable static export
    // i18n:{
    //     locales: ['en', 'ja'],
    //     defaultLocale: 'ja',
    // },
    turbopack: {
        resolveAlias: {
            // Path to your `mdx-components` file with extension
            'next-mdx-import-source-file': './src/mdx-components.tsx'
        }
    }
})
