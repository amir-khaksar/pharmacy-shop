import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = "http://127.0.0.1:8000/accounts/";

export const login = async (phone: string, password: string) => {
    const userInfo = {
        phone_number: phone,
        password,
    };

    return await axios.post(`${baseUrl}login/`, userInfo, {
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
        email,
        password,
    };

    return await axios.post(`${baseUrl}register/`, newUserInfo, {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true
    })
        .then((response) => {
            console.log(response)
            return response.data;
        })
        .catch((error) => {
            if (axios.isAxiosError(error) && error.response) {
                console.log("Response error:", error.response.data);
                Swal.fire({
                    title: "خطا در ثبت نام وجود دارد",
                    text: error.response.data.message || "مشکلی پیش آمده است.",
                    icon: "error",
                    confirmButtonText: "متوجه شدم"
                });
            } else {
                console.error("Error:", error.message);
                Swal.fire({
                    title: "خطای شبکه",
                    text: "لطفاً اتصال اینترنت خود را بررسی کنید.",
                    icon: "warning",
                    confirmButtonText: "متوجه شدم"
                });
            }
            throw error;
        });
};

export const registerWithCode = (code: string) => {
    const userCode = {
        code,
    }

    return axios.post(`${baseUrl}verify_code/`, userCode, {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true
    })
        .then(response => {
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
        })
}
