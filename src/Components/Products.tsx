import image0 from "/images/0.png";
import image1 from "/images/1.png";
import image2 from "/images/2.png";
import image3 from "/images/3.png";
import image4 from "/images/4.png";
import image5 from "/images/5.png";
import image6 from "/images/6.png";
import image9 from "/images/9.png";
import image10 from "/images/10.png";
import image11 from "/images/11.png";
import image12 from "/images/12.png";
import image14 from "/images/14.png";
import image16 from "/images/16.png";
import image17 from "/images/17.png";
type OurWorkData = {
  image: string;
  text: string;
  subText?: string;
};
const productData: Array<OurWorkData[]> = [
  [
    {
      image: image0,
      text: "branding",
    },
    {
      image: image1,
      text: "Mobile Design 🇳🇬",
    },
    {
      image: image2,
      text: "Mobile Design 🇳🇬",
    },
    {
      image: image3,
      text: "Mobile Design 🇳🇬",
    },
    {
      image: image4,
      text: "Mobile Design 🇳🇬",
    },
    {
      image: image5,
      text: "Mobile Design 🇳🇬",
    },
  ],
  [
    {
      image: image1,
      text: "Wankard Moblie App 🇳🇬",
    },
    {
      image: image3,
      text: "Snap Moblie App 🇳🇬",
    },
    {
      image: image2,
      text: "Jobified Moblie App 🇳🇬",
    },
    {
      image: image12,
      text: "Health PocketMoblie App 🇳🇬",
    },
    {
      image: image5,
      text: "Travel Express Moblie App 🇳🇬",
    },
    {
      image: image11,
      text: "Vite-Care Moblie App 🇳🇬",
    },
  ],
  [
    {
      image: image9,
      text: "Wankard Moblie App 🇳🇬",
    },
    {
      image: image4,
      text: "Snap Moblie App 🇳🇬",
    },
    {
      image: image10,
      text: "Jobified Moblie App 🇳🇬",
    },
    {
      image: image0,
      text: "Health PocketMoblie App 🇳🇬",
    },
    {
      image: image14,
      text: "Travel Express Moblie App 🇳🇬",
    },
    {
      image: image16,
      text: "Vite-Care Moblie App 🇳🇬",
    },
  ],
  [
    {
      image: image0,
      text: "Health PocketMoblie App 🇳🇬",
    },
    {
      image: image14,
      text: "Travel Express Moblie App 🇳🇬",
    },
    {
      image: image6,
      text: "Vite-Care Moblie App 🇳🇬",
    },
    {
      image: image17,
      text: "Wankard Moblie App 🇳🇬",
    },
    {
      image: image4,
      text: "Snap Moblie App 🇳🇬",
    },
    {
      image: image10,
      text: "Jobified Moblie App 🇳🇬",
    },
  ],
];

function products() {
  return productData;
}
export default products;
