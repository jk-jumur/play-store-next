import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const PublicLayout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default PublicLayout;