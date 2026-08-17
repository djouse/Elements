export default {
  viteConfig: "./.ladle/vite.ladle.config.ts",
  stories: ["src/ui/**/*.stories.tsx", "src/stories/**/*.stories.tsx"],
  addons: {
    width: {
      enabled: true,
      options: {
        "Mobile S":  390,
        "Mobile L":  430,
        "Tablet":    768,
        "Laptop":    1024,
        "Desktop":   1280,
        "Full":      0,
      },
      defaultState: 0,
    },
  },
};
