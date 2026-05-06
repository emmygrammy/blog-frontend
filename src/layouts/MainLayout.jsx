import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout() {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default MainLayout
