import HeroSection from '../components/HeroSection'
import EducationPlan from '../components/EducationPlan'
import Statistics from '../components/Statistics'
import FAQSection from '../components/Faq'
import ContentSection from '../components/ContentSection'
import VideoSlider from '../components/VideoSlider'
import FoundersSection from '../components/FoundersSection'
import TestimonialSection from '../components/TestimonialSection'
import ImageSlider from '../components/ImageSlider'



function Home() {
  return (
    <>
      <HeroSection />
      <Statistics />
      <ContentSection />
      <VideoSlider />
      <FoundersSection />
      <ImageSlider />
      <EducationPlan />
      <TestimonialSection />
      <FAQSection/>
    </>
  )
}

export default Home