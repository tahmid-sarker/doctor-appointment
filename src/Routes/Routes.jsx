import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Profile from "../Pages/Profile/Profile";
import MyBookings from "../Pages/MyBookings/MyBookings";
import { asset } from "../utils/asset";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      loader: async () => {
        try {
          const [doctors, blogs] = await Promise.all([
            fetch(asset("data/doctors.json")).then((res) => res.json()),
            fetch(asset("data/blogs.json")).then((res) => res.json()),
          ]);
          return { doctors, blogs };
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },
      children: [
        {
          path: "/",
          Component: Home,
        },
        {
          path: "/blogs",
          Component: Blogs,
        },
        {
          path: "/doctor-info/:id",
          Component: Profile,
        },
        {
          path: "/my-bookings",
          Component: MyBookings,
        },
      ],
    },
    {
      path: "*",
      Component: Error,
    },
  ],
  { basename }
);
