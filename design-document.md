## Technologies:

Overview: "Create a simple maintenance tracking system that allows technicians to log maintenance activities on equipment and visualize basic maintenance metrics."

- Next.js: Full-stack framework
- TailwindCSS: Responsive styling framework
- Tanstack Table: Table and data framework
- Recharts: Chart rendering library
- Zod: Form validation library
- Playwright: Testing library

_Note: Prior to Phase 2, data will be stored locally in the browser. As a result, user authentication will not be required. If authentication is implemented, the routes below will likely change._

## Visual Design

I haven't created a design yet, but have some ideas on what the final app will look like. Since this involves maintenance and equipment, the vibe I'm seeing is something industrial, which would allude to more gray/earthy tones. This also could be an internal business tool, so a more focused and professional look would be important too.

## Page Routes

The route layout, to be defined using Next's app router (folder nesting with `page.js`)

| Route              | Component        | Description                                            |
| ------------------ | ---------------- | ------------------------------------------------------ |
| `/`                | Dashboard        | Overview of maintenance metrics and recent activities. |
| `/equipment`       | EquipmentTbale   | Lists all equipment in table format.                   |
| `/equipment/new`   | EquipmentForm    | Form to add a new equipment.                           |
| `/maintenance`     | MaintenanceTable | Lists all maintenance records in table format.         |
| `/maintenance/new` | MaintenanceForm  | Form to create a new maintenance record.               |

_Note: Editing is mentioned as a feature in the testing portion of the spec, so an edit route may be needed._

## Provided Interfaces

The type interfaces to be used, as provided by the spec:

```javascript
interface Equipment {
  id: string;
  name: string;
  location: string;
  department: 'Machining' | 'Assembly' | 'Packaging' | 'Shipping';
  model: string;
  serialNumber: string;
  installDate: Date;
  status: 'Operational' | 'Down' | 'Maintenance' | 'Retired';
}
```

```javascript
interface MaintenanceRecord {
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
```

## Form Schemas

These schemas will be implemented using Zod:

- EquipmentSchema:

  - Name [string] (required, min 3 chars)
  - Location [string] (required)
  - Department [enum] (dropdown from enum)
  - Model [string] (required)
  - Serial Number [string] (required, alphanumeric)
  - Install Date [Date] (required, must be past date)
  - Status [enum] (dropdown from enum)

- RecordSchema:
  - Equipment [id] (dropdown selection, required) (note: render the name)
  - Date [Date] (required, not future date)
  - Type [enum] (dropdown from enum)
  - Technician [string] (required, min 2 chars)
  - Hours Spent [Number] (required, positive number, max 24)
  - Description [string] (required, min 10 chars)
  - Parts Replaced [string[]] (optional, dynamic array of strings)
  - Priority [enum] (dropdown from enum)
  - Completion Status [enum] (dropdown from enum)

## Tests

These tests will be implemented using Playwright:

### Equipment Management Tests

- Create new equipment objects with valid data
- Display validation errors for invalid equipment data
- Properly edit existing equipment
- Properly filter equipment table (by various fields)

### Maintenance Record Tests

- Create new maintenance record object with valid data
- Validate created maintenance hours (reject negative/over 24)
- Display equipment name in maintenance table
- Properly filter maintenance records by date range
