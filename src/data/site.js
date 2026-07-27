import p1 from "@/assets/project1/bharti-enterprises-infrastructure-project-1-image-1.jpeg";
import p2 from "@/assets/project2/bharti-enterprises-infrastructure-project-2-image-1.jpeg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

// Dynamic imports for the new layout
const proj1Images = import.meta.glob("@/assets/project1/*.{jpeg,jpg,mp4}", { eager: true, import: 'default' });
const proj2Images = import.meta.glob("@/assets/project2/*.{jpeg,jpg,mp4}", { eager: true, import: 'default' });
const proj3Images = import.meta.glob("@/assets/projects/expressway-utility/*.jpg", { eager: true, import: 'default' });
const proj4Images = import.meta.glob("@/assets/projects/grid-substation-11kv/*.jpg", { eager: true, import: 'default' });

import { Radio, Cable, Building2, Zap, Wrench, Truck, Users, Briefcase } from "lucide-react";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const stats = [
  { value: 8, suffix: "+", label: "Years of Excellence" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Engineers on Ground" },
  { value: 25, suffix: "+", label: "Fleet Vehicles" },
];

export const services = [
  {
    icon: Radio,
    title: "Telecom Infrastructure",
    desc: "End-to-end tower construction, RAN rollout, and site engineering for 4G / 5G networks.",
  },
  {
    icon: Cable,
    title: "Fiber Network",
    desc: "OFC laying, blowing, splicing and last-mile FTTH trenchless and open-cut expertise.",
  },
  {
    icon: Building2,
    title: "Civil Construction",
    desc: "Foundations, shelters, roads, bridges and turnkey civil packages built to spec.",
  },
  {
    icon: Zap,
    title: "Electrical",
    desc: "HT/LT lines, substations, DG installations and complete electrification services.",
  },
  {
    icon: Wrench,
    title: "Engineering Services",
    desc: "Survey, design, project management and O&M for mission-critical infrastructure.",
  },
  {
    icon: Truck,
    title: "Transportation",
    desc: "Dedicated logistics with 25+ owned vehicles for material and equipment movement.",
  },
  {
    icon: Users,
    title: "Labour Supply",
    desc: "Skilled and semi-skilled workforce deployment across pan-India project sites.",
  },
  {
    icon: Briefcase,
    title: "Outsourcing",
    desc: "Managed services and staff augmentation for OEMs, operators and system integrators.",
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
    slug: "expressway-utility",
    title: "Expressway Utility Corridor",
    image: p3,
    images: Object.values(proj3Images),
    tag: "Civil",
    location: "Maharashtra",
    year: "2024",
    progress: 78,
    summary:
      "Utility ducting, service roads and cross-drainage for a 210 KM greenfield expressway.",
  },
  {
    slug: "grid-substation-11kv",
    title: "11 KV Grid Substation",
    image: p4,
    images: Object.values(proj4Images),
    tag: "Electrical",
    location: "Gujarat",
    year: "2023",
    progress: 100,
    summary: "Design-build of substation, transformer bay and 46 KM of associated HT lines.",
  },
];

export const clients = [
  "Reliance Jio",
  "Airtel",
  "Vi",
  "BSNL",
  "Tata Comm",
  "Sterlite",
  "Nokia",
  "Ericsson",
  "ZTE",
  "Indus Towers",
  "ATC",
  "L&T",
  "NHAI",
  "PGCIL",
];

export const testimonials = [
  {
    name: "Rajeev Menon",
    role: "Regional Head, Tier-1 Operator",
    quote:
      "Bharti Enterprises delivered our 5G cluster three weeks ahead of schedule with zero safety incidents. Their crews are the best we've deployed with.",
  },
  {
    name: "Anita Sharma",
    role: "Project Director, Fiber ISP",
    quote:
      "1,200+ KM of long-haul fiber completed under monsoon conditions. Their engineering discipline is genuinely rare in this sector.",
  },
  {
    name: "Vikram Iyer",
    role: "VP Deployment, OEM",
    quote:
      "A partner that shows up, communicates, and closes tickets. Bharti has become our default civil partner across four states.",
  },
  {
    name: "Priya Nair",
    role: "Head of Operations, EPC",
    quote:
      "They scaled from 40 to 400 crew for our expressway package inside a month. Execution muscle and management maturity in equal measure.",
  },
];
