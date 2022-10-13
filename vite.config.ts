import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default async () => {
  // https://vitejs.dev/config/
  return defineConfig({
    server: {
      port: Number(process.env["APP_PORT"] ?? 6969),
    },
    build: {
      chunkSizeWarningLimit: 3500,
      sourcemap: false,
    },
    plugins: [react()],
  });
};
