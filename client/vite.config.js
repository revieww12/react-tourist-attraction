import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // ระบุชื่อ directory ที่ Vite จะ output ผลลัพธ์การ build
    sourcemap: true, // เปิดการสร้าง sourcemaps สำหรับการดีบัก
  },
  server: {
    port: 3000, // ระบุพอร์ตที่เซิร์ฟเวอร์การพัฒนาจะรัน
    strictPort: true, // หากเปิด true เซิร์ฟเวอร์จะไม่รันถ้าพอร์ตถูกใช้
    proxy: {
      "/api": "http://localhost:4001", // กำหนด proxy สำหรับ API requests หาก backend รันที่พอร์ตนี้
    },
  },
});
