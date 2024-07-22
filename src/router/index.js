import { createRouter, createWebHistory } from "vue-router";
import UserPage from "@/views/UserPage.vue";
import AdminPage from "@/views/AdminPage.vue";
import UserLoginForm from "@/components/User/UserLoginForm.vue";
import UserSignup from "@/components/User/UserSignup.vue";
import UserDashboard from "@/components/User/UserDashboard.vue";
import AdminLogin from "@/components/Admin/AdminLogin.vue";
import AdminDashboard from "@/components/Admin/AdminDashboard.vue";
import Flights from "@/components/Admin/AdminFlights.vue";
import Airports from "@/components/Admin/AdminAirports.vue";
import Aircrafts from "@/components/Admin/AdminAircrafts.vue";
import Overview from "@/components/Admin/AdminOverview.vue";
import AboutUs from "@/views/AboutUs.vue";
import ContactUs from "@/views/ContactUs.vue";
import SearchFlightComponent from "@/components/User/SearchFlightComponent.vue";
import BookingComponent from "@/components/User/BookingComponent.vue";
import AvailableSeatsComponent from "@/components/User/AvailableSeatsComponent.vue";
import TicketingComponent from "@/components/User/TicketingComponent.vue";
import PassengerComponent from "@/components/User/PassengerComponent.vue";
import PaymentComponent from "@/components/User/PaymentComponent.vue";
import AdminUsers from "@/components/Admin/AdminUsers.vue"; // Added import for AdminUsers.vue

const routes = [
  {
    path: "/",
    redirect: "/user/login",
  },
  {
    path: "/user",
    component: UserPage,
    children: [
      {
        path: "login",
        component: UserLoginForm,
        name: "UserLogin",
      },
      {
        path: "signup",
        component: UserSignup,
        name: "UserSignup",
      },
      {
        path: "dashboard",
        component: UserDashboard,
        name: "UserDashboard",
        children: [
          {
            path: "search-flight",
            component: SearchFlightComponent,
            name: "SearchFlight",
          },
          {
            path: "booking",
            component: BookingComponent,
            name: "Booking",
          },
          {
            path: "available-seats",
            component: AvailableSeatsComponent,
            name: "AvailableSeats",
          },
          {
            path: "payment",
            component: PaymentComponent,
            name: "Payment",
          },
          {
            path: "passenger",
            component: PassengerComponent,
            name: "Passenger",
          },
          {
            path: "ticketing",
            component: TicketingComponent,
            name: "Ticketing",
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    component: AdminPage,
    children: [
      {
        path: "login",
        component: AdminLogin,
        name: "AdminLogin",
      },
      {
        path: "dashboard",
        component: AdminDashboard,
        name: "AdminDashboard",
        children: [
          {
            path: "flights",
            component: Flights,
            name: "Flights",
          },
          {
            path: "airports",
            component: Airports,
            name: "Airports",
          },
          {
            path: "aircrafts",
            component: Aircrafts,
            name: "Aircrafts",
          },
          {
            path: "overview",
            component: Overview,
            name: "Overview",
          },
          {
            path: "users",
            component: AdminUsers,
            name: "Users", // Added route for AdminUsers.vue
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: AboutUs,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
