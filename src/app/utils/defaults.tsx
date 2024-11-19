import {
  AiOutlineComment,
  AiOutlineHeart,
  AiOutlineRocket,
  AiOutlineTable,
} from "react-icons/ai";

export const START_UPS_STRUGGLES = [
  {
    title: 63,
    description: "of startups *do not have* a system to collect feedback",
  },
  {
    title: 75,
    description:
      "of startups *struggle* to manage feedback, due to a lack of streamlined tools",
  },
  {
    title: 50,
    description:
      "of startups *failing* to display user testimonials or reviews",
  },
  {
    title: 60,
    description:
      "of startups *lack* clear insight into prioritizing and implementing user ideas",
  },
];

export const PRODUCT_BENEFITS = [
  {
    icon: <AiOutlineComment size={36} color="white" />,
    description:
      "Collect reviews, ideas and issues directly from your website.",
  },
  {
    icon: <AiOutlineTable size={36} color="white" />,
    description: "Manage feedback in a centralized dashboard.",
  },
  {
    icon: <AiOutlineHeart size={36} color="white" />,
    description: "Showcase top feedback and reviews on your website.",
  },
  {
    icon: <AiOutlineRocket size={36} color="white" />,
    description: "Turn customers ideas into new features.",
  },
];

export const WAITLIST_API = "/api/waitlist";
export const REVIEWS_API = "/api/project/reviews";
export const IDEAS_API = "/api/project/ideas";
export const ISSUES_API = "/api/project/issues";
export const USER_API = "/api/user";
export const PROJECT_API = "/api/project";

export const SING_IN = "/sign-in";
export const ROOT = "/";
export const PRIVATE_ROUTES = ["/dashboard"];
