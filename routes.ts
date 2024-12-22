import {
  PAGE_ABOUT_ME,
  PAGE_CONTACT,
  PAGE_PROJECT,
  PAGE_RESUME,
} from "./constants";

const routes = [
  {
    to: PAGE_ABOUT_ME,
    name: "ABOUT ME",
    id: "about-me",
  },
  {
    to: PAGE_RESUME,
    name: "RESUME",
    id: "resume",
  },
  {
    to: PAGE_PROJECT,
    name: "PROJECTS",
    id: "projects",
  },
  {
    to: PAGE_CONTACT,
    name: "CONTACT",
    id: "contact",
  },
];

export default routes;
