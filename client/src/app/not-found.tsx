"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    const BackHome = () => {
        return router.push("/order");
    };

    return (
        <div className="error_container">
            <button onClick={BackHome}>
                <Image
                    src="/pngegg(2).png"
                    alt="404"
                    width={1000}
                    height={900}
                />
            </button>
        </div>
    );
};

export default NotFound;
