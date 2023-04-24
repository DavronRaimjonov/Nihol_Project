import {
  AllUsers,
  Building2,
  Building3,
  BuildingControl,
  HalfTimes,
  Home,
  OrdinaryRooms,
  Repost,
  TimeUp,
} from "../components";
import Cottages from "../components/building-control/cotteges";
import LuxuryRooms from "../components/building-control/luxury-rooms";
import Building4 from "../components/buildings/building4";

export const path = [
  {
    id: 1,
    Componenet: Home,
    path: "/",
  },
  {
    id: 2,
    Componenet: AllUsers,
    path: "all-users",
  },
  {
    id: 3,
    Componenet: TimeUp,
    path: "time-up",
  },
  {
    id: 4,
    Componenet: BuildingControl,
    path: "building-control",
    hasChild: true,
    children: [
      {
        id: 4.1,
        path: "ordinary-rooms",
        Componenet: OrdinaryRooms,
        hasChild: true,
        children: [
          {
            id: " 4.1.1",
            path: "2",
            Componenet: Building2,
          },
          {
            id: "4.2.2",
            path: "4",
            Componenet: Building4,
          },
        ],
      },
      {
        id: 4.2,
        path: "luxury-rooms",
        Componenet: LuxuryRooms,
        hasChild: true,
        children: [
          {
            id: "4.2.2",
            path: "3",
            Componenet: Building3,
          },
        ],
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
