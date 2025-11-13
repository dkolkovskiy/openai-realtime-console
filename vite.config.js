import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";

const path = fileURLToPath(import.meta.url);

export default {
  root: join(dirname(path), "client"),
  plugins: [react()],
 server: {
  allowedHosts: [
    "localhost",
    "127.0.0.1",
    "openai-realtime-console-production-47b1.up.railway.app",
  ],
  host: true,
},
};
