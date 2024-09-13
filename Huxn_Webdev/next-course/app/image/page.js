import Image from "next/image";
import NatureImage from "@/public/Nature.jpg";

export default function Page() {
  return (
    <Image src={NatureImage} alt="Nature Image" width={500} height={500} />
  );
}
