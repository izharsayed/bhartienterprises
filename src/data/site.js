import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
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
    desc: "OFC laying, blowing, splicing and last-mile FTTH — trenchless and open-cut expertise.",
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
    slug: "5g-rollout-north",
    title: "5G RAN Rollout — North Zone",
    image: p1,
    tag: "Telecom",
    location: "Delhi NCR",
    year: "2024",
    progress: 92,
    summary:
      "Turnkey deployment of 320+ 5G sites including civil, tower erection, RAN installation and integration.",
  },
  {
    slug: "fiber-backbone-express",
    title: "Intercity Fiber Backbone",
    image: p2,
    tag: "Fiber",
    location: "MP · UP · Bihar",
    year: "2023",
    progress: 100,
    summary: "1,240 KM of long-haul OFC with HDD, micro-trenching and 24×7 splicing crews.",
  },
  {
    slug: "expressway-utility",
    title: "Expressway Utility Corridor",
    image: p3,
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
