# Database Schema

## Tables

### Users
- **id**: Primary key
- **email**: Unique, required
- **password**: Encrypted, required
- **role**: String (either "student" or "instructor")

### Exams
- **id**: Primary key
- **title**: String, required
- **duration**: Integer, required

### Questions
- **id**: Primary key
- **exam_id**: Foreign key (links to Exams table)
- **type**: String (e.g., "multiple-choice", "coding")
- **text**: String, required
