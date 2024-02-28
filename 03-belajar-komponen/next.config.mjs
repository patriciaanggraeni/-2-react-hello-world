/** @type {import('next').NextConfig} */
const nextConfig = {

    // karena gambar diambil secara online
    // tambahkan pengaturan di bawah ini
    images: {
      domains: ['i.imgur.com']
    }
};

export default nextConfig;