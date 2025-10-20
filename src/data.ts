
// Hardcoded time slots
export const TIME_SLOTS = [
  '08:30-09:30',
  '09:30-10:30',
  '10:30-11:30',
  '11:30-12:30',
  '12:30-01:30',
  '01:30-02:30',
  '02:30-03:30',
  '03:30-04:30',
  '04:30-05:30',
  '05:30-06:30'
];

// Common lectures for all groups
const commonLectures: Timetable = {
  "الأحد": {
    "09:30-10:30": { subject: "Operative", type: "Lecture" },
    "10:30-11:30": { subject: "Fixed", type: "Lecture" },
    "11:30-12:30": { subject: "Pediatrics", type: "Lecture" },
    "12:30-01:30": { subject: "Endodontics", type: "Lecture" },
    "01:30-02:30": { subject: "Oral Surgery", type: "Lecture" },
    "02:30-03:30": { subject: "Removable", type: "Lecture" },
  },
  "الإثنين": {
    "09:30-10:30": { subject: "Oral Surgery", type: "Lecture", span: 2 },
    "10:30-11:30": "continue",
    "11:30-12:30": { subject: "Oral Medicine", type: "Lecture", span: 2 },
    "12:30-01:30": "continue",
    "01:30-02:30": { subject: "Periodontics", type: "Lecture", span: 2 },
    "02:30-03:30": "continue"
  },
};

export type ClassData = {
  subject: string;
  type: string;
  span?: number; // How many slots this subject spans (default: 1)
};

export type Timetable = {
  [day: string]: {
    [timeSlot: string]: ClassData | 'continue'; // 'continue' marks continuation slots
  };
};

export const timetableData: Record<string, Timetable> = {
  "المجموعة 1-2": {
    ...commonLectures,
    "السبت": {
      "08:30-09:30": { subject: "Fixed", type: "Lab", span: 4 },
      "09:30-10:30": "continue",
      "10:30-11:30": "continue",
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Oral Medicine", type: "Lab" }
    },
    "الثلاثاء": {
      "08:30-09:30": { subject: "Operative", type: "Lab", span: 4 },
      "09:30-10:30": "continue",
      "10:30-11:30": "continue",
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Pediatrics", type: "Lab", span: 2 },
      "01:30-02:30": "continue",
    },
    "الأربعاء": {
      "10:30-11:30": { subject: "Oral Surgery", type: "Lab", span: 2 },
      "11:30-12:30": "continue",
      "02:30-03:30": { subject: "Endodontics", type: "Lab", span: 4 },
      "03:30-04:30": 'continue',
      "04:30-05:30": 'continue',
      "05:30-06:30": 'continue',
    },
    "الخميس": {
      "08:30-09:30": { subject: "Removable", type: "Lab", span: 4 },
      "09:30-10:30": 'continue',
      "10:30-11:30": 'continue',
      "11:30-12:30": 'continue',
      "12:30-01:30": { subject: "Periodontics", type: "Lab", span: 2 },
      "01:30-02:30": "continue",
    }
  },
  "المجموعة 3-4": {
    ...commonLectures,
    "السبت": {
      "08:30-09:30": { subject: "Endodontics", type: "Lab", span: 4 },
      "09:30-10:30": "continue",
      "10:30-11:30": "continue",
      "11:30-12:30": "continue",
      "01:30-02:30": { subject: "Periodontics", type: "Lab", span: 2 },
      "02:30-03:30": "continue",
      "03:30-04:30": { subject: "Oral Medicine", type: "Lab" },
    },
    // "الثلاثاء": {
    // },
    "الأربعاء": {
      "10:30-11:30": { subject: "Pediatrics", type: "Lab", span: 2 },
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Oral Surgery", type: "Lab", span: 2 },
      "01:30-02:30": "continue",
      "02:30-03:30": { subject: "Removable", type: "Lab", span: 4 },
      "03:30-04:30": 'continue',
      "04:30-05:30": 'continue',
      "05:30-06:30": 'continue',
    },
    "الخميس": {
      "08:30-09:30": { subject: "Fixed", type: "Lab", span: 4 },
      "09:30-10:30": "continue",
      "10:30-11:30": "continue",
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Operative", type: "Lab", span: 4 },
      "01:30-02:30": 'continue',
      "02:30-03:30": 'continue',
      "03:30-04:30": 'continue',
    }
  },
  "المجموعة 5-6": {
    ...commonLectures,
    "السبت": {
      "08:30-09:30": { subject: "Removable", type: "Lab", span: 4 },
      "09:30-10:30": "continue",
      "10:30-11:30": "continue",
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Fixed", type: "Lab", span: 4 },
      "01:30-02:30": "continue",
      "02:30-03:30": "continue",
      "03:30-04:30": "continue",
    },
    "الثلاثاء": {
      "08:30-09:30": { subject: "Endodontics", type: "Lab", span: 4 },
      "09:30-10:30": "continue",
      "10:30-11:30": "continue",
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Periodontics", type: "Lab", span: 2 },
      "01:30-02:30": "continue",
      "02:30-03:30": { subject: "Oral Medicine", type: "Lab" },
      "04:30-05:30": { subject: "Operative", type: "Lab", span: 2 },
      "05:30-06:30": "continue",
    },
    "الأربعاء": {
      "08:30-09:30": { subject: "Oral Surgery", type: "Lab", span: 2 },
      "09:30-10:30": "continue",
      "12:30-01:30": { subject: "Operative", type: "Lab", span: 2 },
      "01:30-02:30": "continue",
      "02:30-03:30": { subject: "Pediatrics", type: "Lab", span: 2 },
      "03:30-04:30": 'continue',
    },
    // "الخميس": {}
  },
  "المجموعة 7-8": {
    ...commonLectures,
    "السبت": {
      "08:30-09:30": { subject: "Pediatrics", type: "Lab", span: 2 },
      "09:30-10:30": "continue",
      "10:30-11:30": { subject: "Oral Medicine", type: "Lab" }
    },
    "الثلاثاء": {
      "08:30-09:30": { subject: "Removable", type: "Lab", span: 4 },
      "09:30-10:30": "continue",
      "10:30-11:30": "continue",
      "11:30-12:30": "continue",
      "02:30-03:30": { subject: "Oral Surgery", type: "Lab", span: 2 },
      "03:30-04:30": "continue",
      "04:30-05:30": { subject: "Fixed", type: "Lab", span: 2 },
      "05:30-06:30": "continue",
    },
    "الأربعاء": {
      "08:30-09:30": { subject: "Operative", type: "Lab", span: 4 },
      "09:30-10:30": "continue",
      "10:30-11:30": "continue",
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Fixed", type: "Lab", span: 2 },
      "01:30-02:30": 'continue',
    },
    "الخميس": {
      "10:30-11:30": { subject: "Periodontics", type: "Lab", span: 2 },
      "11:30-12:30": 'continue',
      "12:30-01:30": { subject: "Endodontics", type: "Lab", span: 4 },
      "01:30-02:30": 'continue',
      "02:30-03:30": 'continue',
      "03:30-04:30": 'continue',
    }
  },
  "المجموعة 9-10": {
    ...commonLectures,
    "السبت": {
      "08:30-09:30": { subject: "Oral Surgery", type: "Lab", span: 2 },
      "09:30-10:30": "continue",
    },
    "الثلاثاء": {
      "08:30-09:30": { subject: "Pediatrics", type: "Lab", span: 2 },
      "09:30-10:30": "continue",
      "12:30-01:30": { subject: "Operative", type: "Lab", span: 4 },
      "01:30-02:30": "continue",
      "02:30-03:30": "continue",
      "03:30-04:30": "continue",
      "04:30-05:30": { subject: "Endodontics", type: "Lab", span: 2 },
      "05:30-06:30": "continue",
    },
    "الأربعاء": {
      "08:30-09:30": { subject: "Fixed", type: "Lab", span: 4 },
      "09:30-10:30": "continue",
      "10:30-11:30": "continue",
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Endodontics", type: "Lab", span: 2 },
      "01:30-02:30": 'continue',
      "02:30-03:30": { subject: "Periodontics", type: "Lab", span: 2 },
      "03:30-04:30": 'continue',
    },
    "الخميس": {
      "11:30-12:30": { subject: "Oral Medicine", type: "Lab" },
      "12:30-01:30": { subject: "Removable", type: "Lab", span: 4 },
      "01:30-02:30": 'continue',
      "02:30-03:30": 'continue',
      "03:30-04:30": 'continue',
    }
  },
  "المجموعة 11-12": {
    ...commonLectures,
    "السبت": {
      "10:30-11:30": { subject: "Periodontics", type: "Lab", span: 2 },
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Operative", type: "Lab", span: 4 },
      "01:30-02:30": "continue",
      "02:30-03:30": "continue",
      "03:30-04:30": "continue",
    },
    "الثلاثاء": {
      "08:30-09:30": { subject: "Oral Surgery", type: "Lab", span: 2 },
      "09:30-10:30": "continue",
      "10:30-11:30": { subject: "Pediatrics", type: "Lab", span: 2 },
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Fixed", type: "Lab", span: 4 },
      "01:30-02:30": "continue",
      "02:30-03:30": "continue",
      "03:30-04:30": "continue",
      "04:30-05:30": { subject: "Removable", type: "Lab", span: 2 },
      "05:30-06:30": "continue",
    },
    "الأربعاء": {
      "08:30-09:30": { subject: "Endodontics", type: "Lab", span: 4 },
      "09:30-10:30": "continue",
      "10:30-11:30": "continue",
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Removable", type: "Lab", span: 2 },
      "01:30-02:30": 'continue',
    },
    "الخميس": {
      "08:30-09:30": { subject: "Oral Medicine", type: "Lab" },
    }
  },
  "المجموعة 13-14": {
    ...commonLectures,
    "السبت": {
      "10:30-11:30": { subject: "Pediatrics", type: "Lab", span: 2 },
      "11:30-12:30": "continue",
      "02:30-03:30": { subject: "Oral Medicine", type: "Lab" }
    },
    "الثلاثاء": {
      "08:30-09:30": { subject: "Periodontics", type: "Lab", span: 2 },
      "09:30-10:30": "continue",
      "12:30-01:30": { subject: "Endodontics", type: "Lab", span: 4 },
      "01:30-02:30": "continue",
      "02:30-03:30": "continue",
      "03:30-04:30": "continue",
    },
    "الأربعاء": {
      "08:30-09:30": { subject: "Removable", type: "Lab", span: 4 },
      "09:30-10:30": "continue",
      "10:30-11:30": "continue",
      "11:30-12:30": "continue",
      "02:30-03:30": { subject: "Oral Surgery", type: "Lab", span: 2 },
      "03:30-04:30": 'continue',
    },
    "الخميس": {
      "08:30-09:30": { subject: "Operative", type: "Lab", span: 4 },
      "09:30-10:30": 'continue',
      "10:30-11:30": 'continue',
      "11:30-12:30": 'continue',
      "12:30-01:30": { subject: "Fixed", type: "Lab", span: 4 },
      "01:30-02:30": "continue",
      "02:30-03:30": "continue",
      "03:30-04:30": "continue",
    }
  },
  "المجموعة 15-16": {
    ...commonLectures,
    "السبت": {
      "10:30-11:30": { subject: "Oral Surgery", type: "Lab", span: 2 },
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Endodontics", type: "Lab", span: 4 },
      "01:30-02:30": "continue",
      "02:30-03:30": "continue",
      "03:30-04:30": "continue",
    },
    "الثلاثاء": {
      "08:30-09:30": { subject: "Fixed", type: "Lab", span: 4 },
      "09:30-10:30": 'continue',
      "10:30-11:30": 'continue',
      "11:30-12:30": 'continue',
      "12:30-01:30": { subject: "Removable", type: "Lab", span: 4 },
      "01:30-02:30": "continue",
      "02:30-03:30": "continue",
      "03:30-04:30": "continue",
    },
    "الأربعاء": {
      "08:30-09:30": { subject: "Pediatrics", type: "Lab", span: 2 },
      "09:30-10:30": "continue",
      "10:30-11:30": { subject: "Periodontics", type: "Lab", span: 2 },
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Oral Medicine", type: "Lab" },
      "02:30-03:30": { subject: "Operative", type: "Lab", span: 4 },
      "03:30-04:30": 'continue',
      "04:30-05:30": 'continue',
      "05:30-06:30": 'continue',
    },
    // "الخميس": {
    // }
  },
  "المجموعة 17-18": {
    ...commonLectures,
    "السبت": {
      "08:30-09:30": { subject: "Operative", type: "Lab", span: 4 },
      "09:30-10:30": "continue",
      "10:30-11:30": "continue",
      "11:30-12:30": "continue",
      "12:30-01:30": { subject: "Removable", type: "Lab", span: 4 },
      "01:30-02:30": "continue",
      "02:30-03:30": "continue",
      "03:30-04:30": "continue",
    },
    "الثلاثاء": {
      "10:30-11:30": { subject: "Oral Surgery", type: "Lab", span: 2 },
      "11:30-12:30": "continue",
      "02:30-03:30": { subject: "Pediatrics", type: "Lab", span: 2 },
      "03:30-04:30": "continue",
    },
    "الأربعاء": {
      "12:30-01:30": { subject: "Periodontics", type: "Lab", span: 2 },
      "01:30-02:30": "continue",
      "02:30-03:30": { subject: "Fixed", type: "Lab", span: 4 },
      "03:30-04:30": 'continue',
      "04:30-05:30": 'continue',
      "05:30-06:30": 'continue',
    },
    "الخميس": {
      "08:30-09:30": { subject: "Endodontics", type: "Lab", span: 4 },
      "09:30-10:30": 'continue',
      "10:30-11:30": 'continue',
      "11:30-12:30": 'continue',
      "01:30-02:30": { subject: "Oral Medicine", type: "Lab" }
    }
  },
};
