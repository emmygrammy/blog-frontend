import HeroSection from '../components/HeroSection'
import EducationPlan from '../components/EducationPlan'
import Statistics from '../components/Statistics'
import FAQSection from '../components/Faq'
import ContentSection from '../components/ContentSection'
import VideoSlider from '../components/VideoSlider'
import FoundersSection from '../components/FoundersSection'
import TestimonialSection from '../components/TestimonialSection'
import ImageSlider from '../components/ImageSlider'
import TopSection from '../components/TopSection'



function Home() {
  return (
    <>
      <TopSection />
      <HeroSection />
      <Statistics />
      <ContentSection />
      <ImageSlider />
      <EducationPlan />
      <VideoSlider />
      <FoundersSection />
      
      <TestimonialSection />
      <FAQSection/>
    </>
  )
}

export default Home