export const TIME_SLOTS = [
  "09:30-10:30",
  "10:30-11:30",
  "11:30-12:30",
  "12:30-01:30",
  "01:30-02:30",
  "02:30-03:30",
  "03:30-04:30",
  "04:30-05:30",
  "05:30-06:30",
];

export const LECTURE_TIME_SLOTS = [
  "09:30-10:15",
  "10:15-11:00",
  "11:00-11:45",
  "11:45-12:30",
  "12:30-01:15",
  "01:15-02:00",
];

const commonLectures: Timetable = {
  الأحد: {
    "09:30-10:15": { subject: "Operative", type: "Lecture" },
    "10:15-11:00": { subject: "Fixed", type: "Lecture" },
    "11:00-11:45": { subject: "Pediatrics", type: "Lecture" },
    "11:45-12:30": { subject: "Endodontics", type: "Lecture" },
    "12:30-01:15": { subject: "Oral Surgery", type: "Lecture" },
    "01:15-02:00": { subject: "Removable", type: "Lecture" },
  },
  الإثنين: {
    "09:30-10:15": { subject: "Oral Surgery", type: "Lecture", span: 2 },
    "10:15-11:00": "continue",
    "11:00-11:45": { subject: "Oral Medicine", type: "Lecture", span: 2 },
    "11:45-12:30": "continue",
    "12:30-01:15": { subject: "Periodontics", type: "Lecture", span: 2 },
    "01:15-02:00": "continue",
  },
};

export type ClassData = {
  subject: string;
  type: string;
  span?: number;
};

export type Timetable = {
  [day: string]: {
    [timeSlot: string]: ClassData | "continue";
  };
};

export const timetableData: Record<string, Timetable> = {
  "المجموعة 1-2": {
    ...commonLectures,
    السبت: {
      "09:30-10:30": { subject: "Fixed", type: "Lab", span: 2 },
      "10:30-11:30": "continue",
    },
    الثلاثاء: {
      "09:30-10:30": { subject: "Operative", type: "Lab", span: 2 },
      "10:30-11:30": "continue",
      "11:30-12:30": { subject: "Pediatrics", type: "Lab" },
    },
    الأربعاء: {
      "10:30-11:30": { subject: "Oral Surgery", type: "Lab" },
      "12:30-01:30": { subject: "Endodontics", type: "Lab", span: 2 },
      "01:30-02:30": "continue",
    },
    الخميس: {
      "09:30-10:30": { subject: "Removable", type: "Lab", span: 2 },
      "10:30-11:30": "continue",
      "12:30-01:30": { subject: "Periodontics", type: "Lab" },
    },
  },
  "المجموعة 3-4": {
    ...commonLectures,
    السبت: {
      "09:30-10:30": { subject: "Endodontics", type: "Lab", span: 2 },
      "10:30-11:30": "continue",
      "01:30-02:30": { subject: "Periodontics", type: "Lab" },
    },
    الثلاثاء: {
      "09:30-10:30": { subject: "Fixed", type: "Lab", span: 2 },
      "10:30-11:30": "continue",
      "11:30-12:30": { subject: "Oral Surgery", type: "Lab" },
    },
    الأربعاء: {
      "10:30-11:30": { subject: "Pediatrics", type: "Lab" },
      "12:30-01:30": { subject: "Removable", type: "Lab", span: 2 },
      "01:30-02:30": "continue",
    },
    الخميس: {
      "11:30-12:30": { subject: "Operative", type: "Lab", span: 2 },
      "12:30-01:30": "continue",
    },
  },
  "المجموعة 5-6": {
    ...commonLectures,
    السبت: {
      "09:30-10:30": { subject: "Removable", type: "Lab", span: 2 },
      "10:30-11:30": "continue",
      "11:30-12:30": { subject: "Fixed", type: "Lab", span: 2 },
      "12:30-01:30": "continue",
    },
    الثلاثاء: {
      "09:30-10:30": { subject: "Endodontics", type: "Lab" },
      "11:30-12:30": { subject: "Periodontics", type: "Lab" },
      "01:30-02:30": { subject: "operative", type: "Lab" },
    },
    الأربعاء: {
      "09:30-10:30": { subject: "Oral Surgery", type: "Lab" },
      "11:30-12:30": { subject: "Operative", type: "Lab" },
      "12:30-01:30": { subject: "Pediatrics", type: "Lab" },
    },
  },
  "المجموعة 7-8": {
    ...commonLectures,
    السبت: {
      "09:30-10:30": { subject: "Pediatrics", type: "Lab" },
    },
    الثلاثاء: {
      "09:30-10:30": { subject: "Removable", type: "Lab", span: 2 },
      "10:30-11:30": "continue",
      "12:30-01:30": { subject: "Oral Surgery", type: "Lab" },
      "01:30-02:30": { subject: "Fixed", type: "Lab" },
    },
    الأربعاء: {
      "10:30-11:30": { subject: "Operative", type: "Lab" },
      "11:30-12:30": { subject: "Fixed", type: "Lab" },
      "01:30-02:30": { subject: "Periodontics", type: "Lab" },
    },
    الخميس: {
      "11:30-12:30": { subject: "Endodontics", type: "Lab", span: 2 },
      "12:30-01:30": "continue",
    },
  },
  "المجموعة 9-10": {
    ...commonLectures,
    السبت: {
      "09:30-10:30": { subject: "Oral Surgery", type: "Lab" },
    },
    الثلاثاء: {
      "09:30-10:30": { subject: "Pediatrics", type: "Lab" },
      "11:30-12:30": { subject: "Operative", type: "Lab", span: 2 },
      "12:30-01:30": "continue",
      "01:30-02:30": { subject: "Endodontics", type: "Lab" },
    },
    الأربعاء: {
      "09:30-10:30": { subject: "Fixed", type: "Lab", span: 2 },
      "10:30-11:30": "continue",
      "11:30-12:30": { subject: "Endodontics", type: "Lab" },
      "12:30-01:30": { subject: "Periodontics", type: "Lab" },
    },
    الخميس: {
      "11:30-12:30": { subject: "Removable", type: "Lab", span: 2 },
      "12:30-01:30": "continue",
    },
  },
  "المجموعة 11-12": {
    ...commonLectures,
    السبت: {
      "11:30-12:30": { subject: "Operative", type: "Lab", span: 2 },
      "12:30-01:30": "continue",
    },
    الثلاثاء: {
      "09:30-10:30": { subject: "Oral Surgery", type: "Lab" },
      "10:30-11:30": { subject: "Pediatrics", type: "Lab" },
      "11:30-12:30": { subject: "Fixed", type: "Lab", span: 2 },
      "12:30-01:30": "continue",
      "01:30-02:30": { subject: "Removable", type: "Lab" },
    },
    الأربعاء: {
      "09:30-10:30": { subject: "Endodontics", type: "Lab", span: 2 },
      "10:30-11:30": "continue",
      "11:30-12:30": { subject: "Removable", type: "Lab" },
    },
    الخميس: {
      "09:30-10:30": { subject: "Periodontics", type: "Lab" },
    },
  },
  "المجموعة 13-14": {
    ...commonLectures,
    السبت: {
      "10:30-11:30": { subject: "Pediatrics", type: "Lab" },
    },
    الثلاثاء: {
      "09:30-10:30": { subject: "Periodontics", type: "Lab" },
      "11:30-12:30": { subject: "Endodontics", type: "Lab", span: 2 },
      "12:30-01:30": "continue",
    },
    الأربعاء: {
      "09:30-10:30": { subject: "Removable", type: "Lab", span: 2 },
      "10:30-11:30": "continue",
      "12:30-01:30": { subject: "Oral Surgery", type: "Lab" },
    },
    الخميس: {
      "09:30-10:30": { subject: "Operative", type: "Lab", span: 2 },
      "10:30-11:30": "continue",
      "11:30-12:30": { subject: "Fixed", type: "Lab", span: 2 },
      "12:30-01:30": "continue",
    },
  },
  "المجموعة 15-16": {
    ...commonLectures,
    السبت: {
      "10:30-11:30": { subject: "Oral Surgery", type: "Lab" },
      "12:30-01:30": { subject: "Endodontics", type: "Lab" },
    },
    الثلاثاء: {
      "11:30-12:30": { subject: "Removable", type: "Lab", span: 2 },
      "12:30-01:30": "continue",
    },
    الأربعاء: {
      "09:30-10:30": { subject: "Pediatrics", type: "Lab" },
      "10:30-11:30": { subject: "Periodontics", type: "Lab" },
      "12:30-01:30": { subject: "Operative", type: "Lab", span: 2 },
      "01:30-02:30": "continue",
    },
    الخميس: {
      "10:30-11:30": { subject: "Fixed", type: "Lab", span: 2 },
      "11:30-12:30": "continue",
    },
  },
  "المجموعة 17-18": {
    ...commonLectures,
    السبت: {
      "09:30-10:30": { subject: "Operative", type: "Lab", span: 2 },
      "10:30-11:30": "continue",
      "11:30-12:30": { subject: "Removable", type: "Lab", span: 2 },
      "12:30-01:30": "continue",
    },
    الثلاثاء: {
      "10:30-11:30": { subject: "Oral Surgery", type: "Lab" },
      "12:30-01:30": { subject: "Pediatrics", type: "Lab" },
      // "12:30-01:30": "continue",
    },
    الأربعاء: {
      "09:30-10:30": { subject: "Periodontics", type: "Lab" },
      "12:30-01:30": { subject: "Fixed", type: "Lab", span: 2 },
      "01:30-02:30": "continue",
    },
    الخميس: {
      "09:30-10:30": { subject: "Endodontics", type: "Lab", span: 2 },
      "10:30-11:30": "continue",
    },
  },
};
