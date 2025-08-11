import nextra from "nextra";

const withNextra = nextra({
    contentDirBasePath: "/src/content", // Path to your content directory
});

export default withNextra({
    turbopack: {
        resolveAlias: {
            // Path to your `mdx-components` file with extension
            'next-mdx-import-source-file': './src/mdx-components.tsx'
        }
    }
})
