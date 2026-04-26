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
      text: "Branding 🇳🇬",
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
      subText:
        "Wankard is a fintech app focused on creating a clean, accessible, and efficient platform for day to day transactions.",
    },
    {
      image: image3,
      text: "Snap Moblie App 🇳🇬",
      subText:
        "This case study showcases our end-to-end UX design process from research and wireframing to prototyping and final UI design.",
    },
    {
      image: image2,
      text: "Jobified Moblie App 🇳🇬",
      subText:
        "Creating a job-matching platform designed to bridge the gap between job seekers and employers through a smooth, user-centered experience.",
    },
    {
      image: image12,
      text: "Health PocketMoblie App 🇳🇬",
      subText:
        "Health in Pocket is a mobile health companion designed to put essential healthcare services directly in the hands of users.",
    },
    {
      image: image5,
      text: "Travel Express Moblie App 🇳🇬",
      subText:
        "Travel express is a travel experience platform designed to simplify trip planning and enhance the way users explore new destinations",
    },
    {
      image: image11,
      text: "Vite-Care Moblie App 🇳🇬",
      subText:
        "VitaCare is a digital healthcare platform designed to simplify access to medical services and help users to manage their health anytime.",
    },
  ],
  [
    {
      image: image9,
      text: "Xnora Web App 🇳🇬",
      subText:
        "Xnora is a modern web platform built for seamless deployment and efficient performance. It provides a clean, environment for deployment",
    },
    {
      image: image4,
      text: "Finance All Website 🇦🇺🇺🇸",
      subText:
        "A financial dashboard designed to provide a clear, real-time overview of personal and business finances. It delivers insights and analytics. ",
    },
    {
      image: image10,
      text: "Pdf to word web app 🇳🇬",
      subText:
        "PDF to Word is a simple and efficient tool for converting PDF files into fully editable Word documents while preserving layout and formatting.",
    },
    {
      image: image0,
      text: "Alhafeez foundation web App 🇳🇬🇬🇫",
      subText:
        "A non-profit organization dedicated to providing support, resources, and opportunities to underserved communities through sustainable initiatives.",
    },
    {
      image: image14,
      text: "NYSC Redesign web App 🇳🇬",
      subText:
        "A secure authentication system designed to provide fast, seamless, and reliable user access through a clean and intuitive interface.",
    },
    {
      image: image16,
      text: "Razor Web App 🇧🇪🇬🇧🏝️",
      subText:
        "A secure authentication system designed to provide fast, seamless, and reliable user access through a clean and intuitive interface.",
    },
  ],
  [
    {
      image: image0,
      text: "Alhafeez foundation web App 🇳🇬🇬🇫",
      subText:
        "A non-profit organization dedicated to providing support, resources, and opportunities to underserved communities through sustainable initiatives.",
    },
    {
      image: image14,
      text: "Razor Web App 🇧🇪🇬🇧🏝️",
      subText:
        "A secure authentication system designed to provide fast, seamless, and reliable user access through a clean and intuitive interface.",
    },
    {
      image: image6,
      text: "Face Scan Mobile App 🇬🇫",
      subText:
        " a biometric authentication system that enables secure and seamless user verification using facial recognition technology.",
    },
    {
      image: image17,
      text: "Home Architect web App🇳🇬",
      subText:
        "A design platform that helps users plan, visualize, and create functional home layouts through an intuitive and user-friendly interface.",
    },
    {
      image: image4,
      text: "Finance All Website 🇦🇺🇺🇸🇺",
      subText:
        "A financial dashboard designed to provide a clear, real-time overview of personal and business finances. It delivers insights and analytics. ",
    },
    {
      image: image10,
      text: "Pdf To Word Web App 🇳🇬",
      subText:
        "PDF to Word is a simple and efficient tool for converting PDF files into fully editable Word documents while preserving layout and formatting.",
    },
  ],
];

function products() {
  return productData;
}
export default products;
