import p1 from "@/assets/project1/bharti-enterprises-infrastructure-project-1-image-1.jpeg";
import p2 from "@/assets/project2/bharti-enterprises-infrastructure-project-2-image-1.jpeg";
import p5 from "@/assets/project3/WhatsApp Image 2026-07-31 at 8.45.08 PM.jpeg";

// Dynamic imports for the new layout
const proj1Images = import.meta.glob("@/assets/project1/*.{jpeg,jpg,mp4}", { eager: true, import: 'default' });
const proj2Images = import.meta.glob("@/assets/project2/*.{jpeg,jpg,mp4}", { eager: true, import: 'default' });
const proj3FolderImages = import.meta.glob("@/assets/project3/*.{jpeg,jpg,png,mp4}", { eager: true, import: 'default' });

import { Building2, Home, Factory, Landmark, Shovel, Droplets, Wrench, CalendarCheck } from "lucide-react";

export const companyInfo = {
  name: "Bharti Enterprises",
  tagline: "Building Stronger Tomorrow",
  subtagline: "Quality Construction · Reliable Solutions · Lasting Values",
  motto: "From Vision to Reality",
  phone: "+91 8799859344",
  email: "Bhartienterprises.tsp@gmail.com",
  address: "NIL, Dargah Dayra, Ahmadnagar, Ahmednagar, Maharashtra, 414001",
  website: "bhartientreprise.in",
  gstin: "27BWIPS4029L1ZZ",
  about:
    "Bharti Enterprises is a growing company committed to delivering reliable and high-quality construction solutions. With a focus on quality, safety, timely execution, and client satisfaction, we work closely with our clients to turn their ideas into successful projects. Our professional approach and attention to detail help us build strong and lasting business relationships.",
  vision:
    "To become a trusted name in the construction industry by delivering quality-driven, reliable, and sustainable solutions that create long-term value.",
  mission:
    "To deliver every project with quality, safety, and commitment, while maintaining transparency and timely execution. We aim to understand our clients' requirements, provide practical solutions, and continuously improve our services to achieve complete customer satisfaction.",
  team:
    "At Bharti Enterprises, our strength lies in our people. Our team consists of experienced professionals, skilled supervisors, and dedicated project managers who work together with commitment and precision. With a focus on quality, safety, and timely execution, we ensure every project is completed with professionalism and attention to detail.",
  whyChooseUs:
    "We are committed to delivering reliable, efficient, and quality-driven construction solutions. Our professional approach and dedication make us a trusted choice for every project.",
  infrastructure:
    "At Bharti Enterprises, we deliver reliable and high-quality infrastructure solutions designed for long-term performance. With skilled professionals, modern equipment, and a strong focus on quality and safety, we undertake construction projects with efficient planning and timely execution. Our goal is to create strong, sustainable infrastructure that adds lasting value.",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const stats = [
  { value: 12, suffix: "+", label: "Years of Excellence" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Engineers on Ground" },
  { value: 25, suffix: "+", label: "Fleet Vehicles" },
];

export const services = [
  {
    icon: Home,
    title: "Residential Construction",
    desc: "Quality residential construction solutions delivered with precise planning, safety, and fine attention to detail.",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    desc: "Turnkey commercial complexes and facilities engineered for durability, modern functionality, and lasting value.",
  },
  {
    icon: Factory,
    title: "Industrial Projects",
    desc: "Industrial sheds, fabrication, and manufacturing facilities with strong structural steelwork and durable finishing.",
  },
  {
    icon: Landmark,
    title: "Institutional Buildings",
    desc: "Educational institutes, administrative blocks, and government facilities executed with discipline and quality.",
  },
  {
    icon: Shovel,
    title: "Roads & Civil Works",
    desc: "Road construction, earthwork, site leveling, soil removal, and comprehensive civil infrastructure execution.",
  },
  {
    icon: Droplets,
    title: "Drainage & Utilities",
    desc: "Professional pipeline laying, underground drainage networks, safe handling, and precise utility site execution.",
  },
  {
    icon: Wrench,
    title: "Renovation & Maintenance",
    desc: "Structural strengthening, RCC repairs, facility upgrades, and maintenance solutions for long-term stability.",
  },
  {
    icon: CalendarCheck,
    title: "Project Planning & Management",
    desc: "End-to-end planning, site safety briefing, work coordination, and quality assurance from vision to reality.",
  },
];

export const projects = [
  {
    slug: "school-labs-construction",
    title: "Government School Lab Construction",
    image: p1,
    images: Object.values(proj1Images),
    tag: "Civil",
    location: "Dhargaon, Maharashtra",
    year: "2024",
    progress: 100,
    summary:
      "Construction of government school practical labs and computer labs, featuring material and cold room setups.",
  },
  {
    slug: "school-ground-construction",
    title: "Government School Ground Construction",
    image: p2,
    images: Object.values(proj2Images),
    tag: "Civil",
    location: "Bhingar, Ahmednagar, Maharashtra",
    year: "2024",
    progress: 100,
    summary: "Construction and leveling of government school grounds to provide better sports and assembly facilities.",
  },
  {
    slug: "pipeline-infrastructure",
    title: "Pipeline Infrastructure Project",
    image: p5,
    images: Object.values(proj3FolderImages),
    tag: "Civil",
    location: "India",
    year: "2024",
    progress: 100,
    summary: "Complete pipeline infrastructure setup and deployment including related works.",
  },
];

export const clients = [
  "Kalyan Toll Infrastructure Limited",
  "Larsen & Toubro",
  "Pace Power Systems Pvt. Ltd.",
  "Pace Digitech",
  "Bright Spot Innovations LLP",
  "Kay Buildcon",
  "Digital Den",
  "Sumedha Infra Projects Pvt. Ltd.",
  "Navayuga Engineering Company Limited",
  "DEPL Projects Limited",
  "Fidesto Projects Pvt. Ltd.",
  "Yashraj promoters & Builders",
  "Ariel Telecom private limited",
  "Pratap Technocrats",
];

export const testimonials = [
  {
    name: "Kalyan Toll Infrastructure",
    role: "Infrastructure Partner",
    quote:
      "Bharti Enterprises delivered roadworks and civil execution with efficient planning and strict adherence to safety standards. A highly dependable partner.",
  },
  {
    name: "Larsen & Toubro",
    role: "Engineering Partner",
    quote:
      "Timely completion, precision structural work, and dedicated site supervision on every project. Their professional approach is truly commendable.",
  },
  {
    name: "Sumedha Infra Projects",
    role: "Civil Infrastructure Partner",
    quote:
      "Comprehensive infrastructure solutions delivered with quality materials, skilled operators, and complete adherence to quality assurance.",
  },
  {
    name: "Navayuga Engineering",
    role: "Project Partner",
    quote:
      "From earthwork and deep foundations to RCC execution, Bharti Enterprises brings complete transparency, skilled execution, and dedication.",
  },
];
