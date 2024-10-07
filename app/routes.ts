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
  },
  {
    to: PAGE_RESUME,
    name: "RESUME",
  },
  {
    to: PAGE_PROJECT,
    name: "PROJECTS",
  },
  {
    to: PAGE_CONTACT,
    name: "CONTACT",
  },
];

export default routes;
