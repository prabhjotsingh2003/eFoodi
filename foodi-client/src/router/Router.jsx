import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup";
import CartPage from "../pages/shop/CartPage";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import Users from "../pages/dashboard/admin/Users";
import Login from "../components/Login";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateMenu from "../pages/dashboard/admin/UpdataMenu";
import Payment from "../pages/shop/Payment";
import Order from "../pages/dashboard/Order";
import Offers from "../pages/shop/Offers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path:"/offers",
        element:<Offers/>,
      },
      {
        path: "/order",
        element: (
         // <PrivateRoute>
            <Order />
         // </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      {
        path: "/process-checkout",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // Admin route
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users", // Relative path from '/dashboard'
        element: <Users />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      {
        path: "update-menu/:id",
        element: <UpdateMenu />,
        loader: ({ params }) =>
          fetch(`https://complete-foodi-server-2e4j.onrender.com/menu/${params.id}`),
      },
    ],
  },
]);

export default router;
