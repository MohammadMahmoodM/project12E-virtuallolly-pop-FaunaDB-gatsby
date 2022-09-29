// In your gatsby-config.js
module.exports = {
  plugins: [
    // Simple config, passing URL
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Lolly",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "lollies",
        // Url to query from
        url: "https://comforting-dragon-48a767.netlify.app/.netlify/functions/newLolly",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
    }
  ]
}