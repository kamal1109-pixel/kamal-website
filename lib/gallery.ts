export type GalleryCategory = "Classroom" | "On the floor" | "Safety" | "Audits" | "Team";

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/hero-training.png",
    alt: "Trainer leading a hands-on session with hub staff inside a parcel sorting hub",
    title: "Hands-on hub onboarding",
    category: "On the floor",
  },
  {
    src: "/images/gallery/classroom.png",
    alt: "Trainer presenting at a whiteboard to employees taking notes",
    title: "Classroom refresher session",
    category: "Classroom",
  },
  {
    src: "/images/gallery/scanning.png",
    alt: "Hub worker scanning a parcel barcode with a handheld scanner",
    title: "Scan-rate coaching",
    category: "On the floor",
  },
  {
    src: "/images/gallery/rider-safety.png",
    alt: "Trainer demonstrating helmet and road safety checks to delivery riders",
    title: "Rider road safety drill",
    category: "Safety",
  },
  {
    src: "/images/gallery/audit.png",
    alt: "Auditor with a tablet inspecting sealed parcel bags",
    title: "Bag and process audit",
    category: "Audits",
  },
  {
    src: "/images/gallery/team-huddle.png",
    alt: "Team lead addressing a morning huddle of hub staff",
    title: "Morning team huddle",
    category: "Team",
  },
  {
    src: "/images/gallery/certification.png",
    alt: "Employees holding certificates while a trainer shakes hands with a graduate",
    title: "Certification day",
    category: "Team",
  },
];
