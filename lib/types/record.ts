import { z } from "zod";

export const RecordSchema = z.object({
  equipment: z.string().min(1, "Equipment ID is required"), // TODO: Will use dropdown to ensure field exists
  date: z.date().refine((date: Date) => date <= new Date(), "Date cannot be in the future"),
  type: z.enum(["Preventive", "Repair", "Emergency"]),
  technician: z.string().min(2, "Technician name must be at least 2 characters long"),
  hoursSpent: z.number().positive("Hours Spent must be positive").max(24, "Cannot exceed 24 hours"),
  description: z.string().min(10, "Description must be at least 10 characters long"),
  partsReplaced: z.array(z.string()).optional(),
  priority: z.enum(["Low", "Medium", "High"]),
  completionStatus: z.enum(["Complete", "Incomplete", "Pending Parts"]),
});

export interface MaintenanceRecord {
  id: string;
  equipmentId: string;
  date: Date;
  type: 'Preventive' | 'Repair' | 'Emergency';
  technician: string;
  hoursSpent: number;
  description: string;
  partsReplaced?: string[];
  priority: 'Low' | 'Medium' | 'High';
  completionStatus: 'Complete' | 'Incomplete' | 'Pending Parts';
}
