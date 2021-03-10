import Image from "next/image";

const Logo = () => (
  <Image
    src="/images/logo.png" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Romeo Mendez Fuentes"
  />
);
