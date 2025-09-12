const nextConfig = {
  webpack: (config, options) => {
    // Find the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    // Modify the existing rule to ignore SVG files
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /.svg$/i;
    }

    // Add a new rule for handling SVG as React components
    config.module.rules.push({
      test: /.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
