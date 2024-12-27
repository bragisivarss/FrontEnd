import { Header } from "../components/Header";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: PropsWithChildren<{}>) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
