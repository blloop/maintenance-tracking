import { z } from "zod";

export const EquipmentSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  location: z.string().min(1, "Location is required"),
  department: z.enum(["Machining", "Assembly", "Packaging", "Shipping"]),
  model: z.string().min(1, "Model is required"),
  serialNumber: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/, "Serial Number must be alphanumeric"),
  installDate: z
    .date()
    .refine(
      (date: Date) => date < new Date(),
      "Install Date must be a past date",
    ),
  status: z.enum(["Operational", "Down", "Maintenance", "Retired"]),
});

export interface Equipment {
  id: string;
  name: string;
  location: string;
  department: "Machining" | "Assembly" | "Packaging" | "Shipping";
  model: string;
  serialNumber: string;
  installDate: Date;
  status: "Operational" | "Down" | "Maintenance" | "Retired";
}
