// lib/musarIndex.ts
export type MussarChapter = { num: number; title?: string };
export type MussarBook = { id: string; name: string; chapters: MussarChapter[] };

export const MUSAR_BOOKS: MussarBook[] = [
  {
    id: "tanya",
    name: "תניא",
    chapters: [
      { num: 1,  title: "נפש הבהמית והאלוקית" },
      { num: 2,  title: "חלק אלוקה ממעל ממש" },
      { num: 3,  title: "כוחות הנפש ושורשם" },
      { num: 4,  title: "לבושי הנפש: מחשבה, דיבור, מעשה" },
      { num: 5,  title: "התאחדות השכל עם חכמת התורה" },
      { num: 6,  title: "קליפות ומקור המידות הרעות" },
      { num: 7,  title: "בירור ניצוצות – אכילה לשם שמים" },
      { num: 8,  title: "ביטול הזמן ודיבורים בטלים" },
      { num: 9,  title: "מלחמת שתי הנפשות בלב" },
      { num: 10, title: "צדיק וטוב לו / רע לו" },
    ],
  },
  {
    id: "mesilat-yesharim",
    name: "מסילת ישרים",
    chapters: [
      { num: 1,  title: "ביאור כלל חובת האדם בעולמו" },
      { num: 2,  title: "בפרטי הזהירות" },
      { num: 3,  title: "קניין הזהירות" },
      { num: 4,  title: "חלוקת הזהירות" },
      { num: 5,  title: "במכשולות הזהירות" },
      { num: 6,  title: "במידת הזריזות" },
      { num: 7,  title: "קניין הזריזות" },
      { num: 8,  title: "חלוקת הזריזות" },
      { num: 9,  title: "במידת הנקיות" },
      { num: 10, title: "פרטי הנקיות" },
      { num: 11, title: "במידת הפרישות" },
      { num: 12, title: "במידת הטהרה" },
      { num: 13, title: "במידת החסידות" },
      { num: 14, title: "במידת הענווה" },
      { num: 15, title: "במידת יראת החטא" },
      { num: 16, title: "במידת הקדושה" },
      { num: 17, title: "דרכי קניין המידות" },
      { num: 18, title: "סדר העבודה" },
      { num: 19, title: "חיזוק החסידות" },
      { num: 20, title: "בדרכי קניין הענווה" },
      { num: 21, title: "בדרכי קניין יראת החטא" },
      { num: 22, title: "בדרכי קניין הקדושה" },
      { num: 23, title: "עניין רוח הקודש" },
      { num: 24, title: "סיכום הדרך" },
      { num: 25, title: "מעלת הדבקות" },
      { num: 26, title: "חתימה" },
    ],
  },
];

export const getMusarBook = (id: string) => MUSAR_BOOKS.find(b => b.id === id);
