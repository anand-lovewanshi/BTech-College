import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      college: 'Hansraj College, New Delhi',
      title: "Separate Girls' & Boys' Hostels are Available at Hansraj College New Delhi",
      author: 'Aarush Agrawal',
      date: 'Dec 30th, 2025'
    },
    {
      college: 'IIMT University, Meerut',
      title: 'IIMT Meerut has Corporate Resource and Interface Center (CRIC)',
      author: 'Mayank',
      date: 'Dec 30th, 2025'
    },
    {
      college: 'GH Raisoni College of Engineering and Management, Jalgaon',
      title: 'GH Raisoni Institute of Engineering & Management Jalgaon B.E Admission is Via MHT CET Exam',
      author: 'Chaudhari Sachin',
      date: 'Dec 30th, 2025'
    },
    {
      college: 'Amity University, Gurgaon',
      title: 'Amity University Gurgaon Offers 102+ UG, PG, Ph.D & Other Level Courses',
      author: 'Priti',
      date: 'Dec 30th, 2025'
    },
    {
      college: "Vignan's Institute of Engineering for Women, Visakhapatnam",
      title: "Vignan's Institute of Engineering for Women is Located at Visakhapatnam, Andhra Pradesh",
      author: 'Nadiminti Kumari',
      date: 'Dec 30th, 2025'
    },
    {
      college: 'NRI Institute of Research and Technology, Bhopal',
      title: 'NIRT Bhopal Offers Means-cum-Merit Financial Assistance Scholarship',
      author: 'Prabhat Singh',
      date: 'Dec 30th, 2025'
    }
  ];

  return (
    <section className="reviews">
      <div className="reviews-container">
        <h2 className="section-title">Latest College Reviews</h2>
        <p className="reviews-subtitle">
          Top Engineering and MBA Colleges Reviews & Ratings 2026
        </p>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h3 className="review-college">{review.college}</h3>
              <h4 className="review-title">{review.title}</h4>
              <div className="review-meta">
                <span className="review-date">Posted on: {review.date}</span>
                <span className="review-author">Review By: {review.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;


