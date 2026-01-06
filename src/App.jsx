import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import EntranceExams from "./components/EntranceExams";
import LiveApplications from "./components/LiveApplications";
import CollegeProfiles from "./components/CollegeProfiles";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <EntranceExams />
      <Categories />
      <LiveApplications />
      <CollegeProfiles />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
