import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const plugins = [tailwindcss()];

export default defineConfig(() => {
  return {
    plugins,
  };
});