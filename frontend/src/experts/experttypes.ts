export interface ExpertType {
  id: number;
  experience: number;
  expertise: string;
  firstName: string;
  industry: string;
  lastName: string;
  maturity: string;
  score?: number;
}

export const industryTypes = [
  "Information technology and services",
  "Hospital & Health care",
  "Construction",
  "Retail",
  "Education",
  "Financial services",
  "Accounting",
  "Automotive",
  "Consulting",
  "Real Estate",
  "Food & Beverages",
  "Telecommunications",
  "Agriculture",
  "Chemicals",
  "Hospitality",
  "Mechanical and electrical engineering",
];

export const expertiseTypes = [
  "Development",
  "Market research",
  "Engineering",
  "Design",
  "Testing and quality assurance",
  "Marketing",
  "Sales",
  "Manufacturing",
  "Patenting",
  "Strategy",
  "Finance",
  "Legal",
  "HR",
];
