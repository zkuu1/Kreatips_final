import Reat from "react";

const Footer = () => {
    return (
        <footer className="bg-customLightGreen text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-4">&copy; {new Date().getFullYear} KreaTips. . All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer;