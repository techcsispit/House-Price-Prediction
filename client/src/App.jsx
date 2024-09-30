import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
function App() {
  const scrollToNextSection = () => {
    const contentSection = document.getElementById("content");
    if (contentSection) {
        contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header/>
      <Hero onclick={scrollToNextSection}/>
    </>
  )
}

export default App
