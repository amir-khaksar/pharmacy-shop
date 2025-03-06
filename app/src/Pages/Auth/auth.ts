import axios from 'axios';
import Swal from 'sweetalert2';

const apiUrl = "http://localhost:8000/api/auth/";

export const login = async (phone: string, password: string) => {
    const userInfo = {
        phone_number: phone,
        password: password,
    };

    return await axios.post(`${apiUrl}login/`, userInfo, {
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((response) => {

            localStorage.setItem("refreshToken", response.data.refresh);
            localStorage.setItem("accessToken", response.data.access);

            Swal.fire({
                title: "ورود موفقیت آمیز بود",
                icon: "success",
                confirmButtonText: "باشه"
            });
            return response.data;
        })
        .catch((error) => {
            if (error.response) {
                console.log("Response error:", error.response.data);
                Swal.fire({
                    title: "خطا در ورود به حساب",
                    icon: "error",
                    confirmButtonText: "باشه"
                });
            } else {
                console.error("Error:", error.message);
            }
            throw error;
        });
};

export const register = async (fullName: string, phone: string, email: string, password: string) => {
    const newUserInfo = {
        full_name: fullName,
        phone_number: phone,
        email: email,
        password: password,
    };

    return await axios.post(`${apiUrl}/register/`, newUserInfo, {
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((response) => {
            Swal.fire({
                title: "ثبت نام با موفقیت انجام شد",
                icon: "success",
                confirmButtonText: "تأیید",
            });
            return response.data;
        })
        .catch((error) => {
            if (error.response) {
                console.log("Response error:", error.response.data);
                Swal.fire({
                    title: "خطا در ثبت نام وجود دارد",
                    icon: "error",
                    confirmButtonText: "متوجه شدم"
                });
            } else {
                console.error("Error:", error.message);
            }
            throw error;
        });
};
