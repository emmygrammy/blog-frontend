import HeroSection from '../components/HeroSection'
import EducationPlan from '../components/EducationPlan'
import Statistics from '../components/Statistics'
import FAQSection from '../components/Faq'
import ContentSection from '../components/ContentSection'


function Home() {
  return (
    <>
      <HeroSection />
      <Statistics />
      <ContentSection />
      <EducationPlan />
      <FAQSection/>
    </>
  )
}

export default Home