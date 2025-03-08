import * as React from "react";
import {useState} from "react";
import OtpInput from "react-otp-input";
import { registerWithCode } from "./auth.ts";
import {useNavigate} from "react-router-dom";

export default function OTPForm() {
    const [otp, setOtp] = useState("");

    const navigate = useNavigate();

    const registerWithOtp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await registerWithCode(otp)
            navigate("/")
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <form onSubmit={registerWithOtp}>
            <div className="h-screen flex items-center justify-center">
                <div
                    className="flex flex-col items-center gap-8 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        تایید شماره موبایل
                    </h2>
                    <div dir="ltr">
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span className="mx-3 text-gray-400 dark:text-gray-500">-</span>}
                            renderInput={(props) => (
                                <input
                                    {...props}
                                    className={`
                                    w-12 h-12 sm:w-14 sm:h-14
                                    text-lg sm:text-xl
                                    text-center
                                    border-2
                                    bg-transparent
                                    rounded-xl
                                    focus:outline-none
                                    focus:ring-2
                                    transition-all
                                    duration-200
                                    dark:text-gray-100
                                    border-gray-300
                                    dark:border-gray-600
                                    focus:border-purple-500
                                    focus:ring-purple-200
                                    dark:focus:ring-purple-500/30
                                `}
                                />
                            )}
                        />
                    </div>

                    <button
                        className={`
                    w-full
                    py-3
                    text-lg
                    font-medium
                    rounded-full
                    transition-colors
                    duration-300
                    bg-purple-500
                    hover:bg-purple-600
                    dark:bg-purple-600
                    dark:hover:bg-purple-700
                    text-white
                    shadow-md
                    hover:shadow-lg
                `}
                    >
                        تایید کد
                    </button>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        کد دریافت نکردید؟
                        <button
                            className={`
                        mr-2
                        text-blue-500
                        hover:text-blue-600
                        dark:text-blue-400
                        dark:hover:text-blue-300
                        transition-colors
                    `}
                        >
                            ارسال مجدد
                        </button>
                    </p>
                </div>
            </div>
        </form>
    );
}