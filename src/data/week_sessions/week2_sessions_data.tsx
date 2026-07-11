export type WeekSession = {
  id: number;
  date: string;
  time: string;
  handler: string;
  title: string;
  overview: string;
  image: string;
};

export const week2Sessions: WeekSession[] = [
  {
    id: 1,
    date: "Monday, 6 July 2026",
    time: "1:00 PM to 1:30 PM",
    handler: "Zakwan Haaziq",
    title: "Generative AI Fundamentals – Understanding ChatGPT",
    overview:
      "The first day of the Generative AI session introduced members to how ChatGPT processes prompts and generates responses. Participants explored core concepts including tokenization, embeddings, transformers, and next-word prediction to understand the fundamentals behind modern AI systems.",
    image:
      "https://res.cloudinary.com/dbqjkjl0c/image/upload/v1783792649/ad02e093-e218-4d66-ad4f-93701c2e6958_n6gkbh.jpg",
  },

  {
    id: 2,
    date: "Tuesday, 7 July 2026",
    time: "1:00 PM to 1:30 PM",
    handler: "Zakwan Haaziq",
    title: "Hands-on Generative AI with Google AI Studio",
    overview:
      "Members participated in a practical workshop using Google AI Studio, where they enhanced their prompt engineering skills and collaborated in teams to build AI-powered solutions for assigned problem statements, gaining valuable real-world experience in applying Generative AI.",
    image:
      "https://res.cloudinary.com/dbqjkjl0c/image/upload/v1783792681/a4a0c25d-d2a5-496f-9d7f-31a8a03e13f5_kc3hgg.jpg",
  },

  {
    id: 3,
    date: "Wednesday, 8 July 2026",
    time: "1:00 PM to 1:30 PM",
    handler: "Raja Rajeswari S",
    title: "Speak Beyond Words",
    overview:
      "Members participated in an engaging JAM (Just A Minute) session focused on strengthening communication skills. The activity enhanced spontaneous speaking, confidence, clarity of thought, and the ability to express ideas effectively under time constraints.",
    image:
      "https://res.cloudinary.com/dbqjkjl0c/image/upload/v1783793020/WhatsApp_Image_2026-07-11_at_11.19.04_PM_u4hnz3.jpg",
  },

  {
    id: 4,
    date: "Thursday, 9 July 2026",
    time: "1:00 PM to 1:30 PM",
    handler: "Affan Basha A",
    title: "Money Matters: From Education to Financial Freedom",
    overview:
      "This informative session introduced members to the fundamentals of personal finance, covering saving, investing, the stock market, and the power of compounding. Participants gained practical knowledge to develop healthy financial habits and build long-term financial security.",
    image:
      "https://res.cloudinary.com/dbqjkjl0c/image/upload/v1783793144/WhatsApp_Image_2026-07-11_at_11.19.03_PM_ofru8o.jpg",
  },

  {
    id: 5,
    date: "Friday, 10 July 2026",
    time: "1:00 PM to 1:30 PM",
    handler: "Banusree R",
    title: "Spy Among Us",
    overview:
      "Members participated in an interactive team-based activity where players worked together to identify a hidden spy through discussion, observation, and strategic questioning. The session promoted teamwork, communication, critical thinking, and decision-making in a fun and engaging environment.",
    image:
      "https://res.cloudinary.com/dbqjkjl0c/image/upload/v1783792730/c401708e-f63f-4cb7-96ff-4f37c545e40d_zagf3v.jpg",
  },
];