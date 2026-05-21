import TopSection from '../components/TopSection'
import ContactSection from '../components/Contact'



function Contact() {
  return (
    <>
      <TopSection className="text-center  md:text-left"
        title="Contact Us"
        subtitle="Contact us for any information or support"
      />
      <ContactSection />
    </>
  )
}
export default Contact
