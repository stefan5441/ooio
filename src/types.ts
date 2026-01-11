export const Tab = {
  Home: "HOME",
  ProfessionalWork: "PROFESSIONAL_WORK",
  PersonalProjects: "PERSONAL_PROJECTS",
  Activity: "ACTIVITY",
};

export type Tab = (typeof Tab)[keyof typeof Tab];
