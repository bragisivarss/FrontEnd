import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/globals.css";
import { DataProvider } from "@/app/utils/Context";
import { PropsWithChildren } from "react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Lil Bits",
    description: "Lil Bits restaurant",
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <DataProvider>{children}</DataProvider>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition={Slide}
                />
            </body>
        </html>
    );
}
