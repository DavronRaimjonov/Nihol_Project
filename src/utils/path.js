import {
  AllUsers,
  BuildingControl,
  HalfTimes,
  Home,
  OrdinaryRooms,
  Repost,
  TimeUp,
} from "../components";
import Cottages from "../components/building-control/cotteges";
import LuxuryRooms from "../components/building-control/luxury-rooms";

export const path = [
  {
    id: 1,
    Componenet: Home,
    path: "/",
  },
  {
    id: 2,
    Componenet: AllUsers,
    path: "/all-users",
  },
  {
    id: 3,
    Componenet: TimeUp,
    path: "/time-up",
  },
  {
    id: 4,
    Componenet: BuildingControl,
    path: "/building-control",
    hasChild: true,
    children: [
      {
        id: 4.1,
        path: "ordinary-rooms",
        Componenet: OrdinaryRooms,
      },
      {
        id: 4.2,
        path: "luxury-rooms",
        Componenet: LuxuryRooms,
      },
      {
        id: 4.3,
        path: "cotteges",
        Componenet: Cottages,
      },
    ],
  },

  {
    id: 5,
    Componenet: HalfTimes,
    path: "/half-time",
  },
  {
    id: 6,
    Componenet: Repost,
    path: "/repost",
  },
];
