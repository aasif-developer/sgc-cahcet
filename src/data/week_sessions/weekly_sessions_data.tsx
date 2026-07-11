export type Session = {
  id: number;
  date: string;
  title: string;
  image: string;
  description: string;
};

export type WeeklySession = {
  id: number;
  weekTitle: string;
  dateRange: string;
  status: "published" | "coming-soon";
  coverImage: string;
  sessions: Session[];
};

export const weeklySessions: WeeklySession[] = [
 {
  id: 1,
  weekTitle: "Week 1",
  dateRange: "📅 29 June – 3 July 2026",
  status: "published",
  coverImage: "/weekly/week1-cover.jpg",
  sessions: [],
},

  {
  id: 2,
  weekTitle: "Week 2",
  dateRange: "📅 6 July – 10 July 2026",
  status: "coming-soon",
  coverImage: "/weekly/week2-cover.jpg",
  sessions: [],
},

{
  id: 3,
  weekTitle: "Week 3",
  dateRange: "📅 13 July – 17 July 2026",
  status: "coming-soon",
  coverImage: "/weekly/week3-cover.jpg",
  sessions: [],
},

{
  id: 4,
  weekTitle: "Week 4",
  dateRange: "📅 20 July – 24 July 2026",
  status: "coming-soon",
  coverImage: "/weekly/week4-cover.jpg",
  sessions: [],
},
];