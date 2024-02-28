// import terlebih dahulu Image dari next/image
import Image from "next/image";

// buat fungsi untuk menampilkan profile
export default function Profile() {
    return (
    
    // panggil tag image di sini
    <Image
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
        width={200}
        height={200}
        style={{
          maxWidth: "100%",
          height: "auto",
          margin: "13px"
        }}
      />
    );
}