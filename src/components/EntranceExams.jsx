import './EntranceExams.css';

const EntranceExams = () => {
  const exams = [
    {
      name: 'MIT-WPU CET 2026',
      applicationDate: '1 Dec, 2025 - 7 Jan, 2026'
    },
    {
      name: 'BVP CET 2026',
      applicationDate: '8 Feb, 2026 - 20 Jul, 2026'
    },
    {
      name: 'KMAT 2026',
      applicationDate: '1 May, 2026 - 5 Aug, 2026'
    },
    {
      name: 'Karnataka PGCET 2026',
      applicationDate: '25 Mar, 2026 - 30 Apr, 2026'
    },
    {
      name: 'GPAT 2026',
      applicationDate: '23 Dec, 2025 - 12 Jan, 2026'
    },
    {
      name: 'NEST 2026',
      applicationDate: '5 Jan, 2026 - 6 Apr, 2026'
    }
  ];

  return (
    <section className="entrance-exams">
      <div className="entrance-exams-container">
        <h2 className="section-title">Entrance Exams</h2>
        <div className="exams-grid">
          {exams.map((exam, index) => (
            <div key={index} className="exam-card">
              <h3 className="exam-name">{exam.name}</h3>
              <p className="exam-date">
                Application Date: {exam.applicationDate}
              </p>
            </div>
          ))}
        </div>
        <div className="view-all">
          <a href="#" className="view-all-link">View All Exams »</a>
        </div>
      </div>
    </section>
  );
};

export default EntranceExams;


