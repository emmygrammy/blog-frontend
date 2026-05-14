import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-[80px] md:pt-[90px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
export default MainLayout
