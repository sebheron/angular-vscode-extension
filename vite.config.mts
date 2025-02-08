import { defineConfig } from "vite";
import angular from '@analogjs/vite-plugin-angular';
import vscode from "@tomjs/vite-plugin-vscode";

export default defineConfig({
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    angular(),
    vscode({
      extension: {
        sourcemap: "inline",
      },
    }),
  ],
});
