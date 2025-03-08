import Index from "./Pages/Index/Index";
import AuthPage from "./Pages/Auth/AuthPage.tsx";
import OTPForm from "./Pages/Auth/OtpForm.tsx";
import Shop from "./Pages/Shop/Shop.tsx";

const routes = [
    {path: "/", element: <Index/>},
    {path: "/auth", element: <AuthPage/>},
    {path: "/auth/otp", element: <OTPForm/>},
    {path: "/shop", element: <Shop/>},
];

export default routes;
