// import "./Categories.css";

// const Categories = () => {
//   const categories = [
//     { name: "Agriculture", count: 232, icon: "🌾" },
//     { name: "Animation", count: 78, icon: "🎬" },
//     { name: "Architecture", count: 476, icon: "🏛️" },
//     { name: "Arts", count: 250, icon: "🎨" },
//     { name: "Aviation", count: 27, icon: "✈️" },
//     { name: "Commerce", count: 3679, icon: "💼" },
//     { name: "Computer Applications", count: 3793, icon: "💻" },
//     { name: "Dental", count: 360, icon: "🦷" },
//     { name: "Design", count: 469, icon: "🎭" },
//     { name: "Engineering", count: 4511, icon: "⚙️" },
//     { name: "Hotel Management", count: 552, icon: "🏨" },
//     { name: "Humanities", count: 3932, icon: "📚" },
//     { name: "Languages", count: 49, icon: "🗣️" },
//     { name: "Law", count: 932, icon: "⚖️" },
//     { name: "Management", count: 5801, icon: "📊" },
//     { name: "Mass Communications", count: 444, icon: "📺" },
//     { name: "Medical", count: 1079, icon: "🏥" },
//     { name: "Paramedical", count: 796, icon: "🚑" },
//     { name: "Pharmacy", count: 1047, icon: "💊" },
//     { name: "Science", count: 4200, icon: "🔬" },
//     { name: "Teaching", count: 2488, icon: "👨‍🏫" },
//     { name: "Travel", count: 173, icon: "🧳" },
//     { name: "Veterinary Science", count: 70, icon: "🐾" },
//     { name: "Vocational Courses", count: 169, icon: "🔧" }
//   ];

//   return (
//     <section className="categories">
//       <h1>College Admission 2026, Top Engineering and MBA Colleges in India</h1>
//       <div className="categories-container">
//         <div className="categories-grid">
//           {categories.map((category, index) => (
//             <div key={index} className="category-card">
//               <div className="category-icon">{category.icon}</div>
//               <h3 className="category-name">{category.name}</h3>
//               <p className="category-count">{category.count} Colleges</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Categories;


import { useState } from "react";
import "./Categories.css";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { name: "Agriculture", count: 232, icon: "🌾" },
    { name: "Animation", count: 78, icon: "🎬" },
    { name: "Architecture", count: 476, icon: "🏛️" },
    { name: "Arts", count: 250, icon: "🎨" },
    { name: "Aviation", count: 27, icon: "✈️" },
    { name: "Commerce", count: 3679, icon: "💼" },
    { name: "Computer Applications", count: 3793, icon: "💻" },
    { name: "Dental", count: 360, icon: "🦷" },
    { name: "Design", count: 469, icon: "🎭" },
    { name: "Engineering", count: 4511, icon: "⚙️" },
    { name: "Hotel Management", count: 552, icon: "🏨" },
    { name: "Humanities", count: 3932, icon: "📚" },
    { name: "Languages", count: 49, icon: "🗣️" },
    { name: "Law", count: 932, icon: "⚖️" },
    { name: "Management", count: 5801, icon: "📊" },
    { name: "Mass Communications", count: 444, icon: "📺" },
    { name: "Medical", count: 1079, icon: "🏥" },
    { name: "Paramedical", count: 796, icon: "🚑" },
    { name: "Pharmacy", count: 1047, icon: "💊" },
    { name: "Science", count: 4200, icon: "🔬" },
    { name: "Teaching", count: 2488, icon: "👨‍🏫" },
    { name: "Travel", count: 173, icon: "🧳" },
    { name: "Veterinary Science", count: 70, icon: "🐾" },
    { name: "Vocational Courses", count: 169, icon: "🔧" }
  ];

  return (
    <section className="categories">
      <h1>College Admission 2026, Top Engineering and MBA Colleges in India</h1>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-card ${
              activeCategory === index ? "active" : ""
            }`}
            onClick={() => setActiveCategory(index)}
          >
            <div className="category-icon">{category.icon}</div>
            <h3>{category.name}</h3>
            <p>{category.count} Colleges</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
