import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS for carousel
import { useEffect, useState } from "react";
import "./TopCompanies.css";

const CompanyCarousel = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("/companies.json")
      .then((res) => res.json())
      .then((data) => setCompanies(data))
      .catch((err) => console.error("JSON Fetch Error:", err));
  }, []);

  // Split companies into chunks of 5 per carousel slide
  const chunkSize = 5;
  const slides = [];
  for (let i = 0; i < companies.length; i += chunkSize) {
    slides.push(companies.slice(i, i + chunkSize));
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-white">Top Companies Hiring</h2>

      <div
        id="companyCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000" // auto scroll every 3s
      >
        <div className="carousel-inner">
          {slides.map((slideCompanies, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {slideCompanies.map((company) => (
                  <div
                    className="card company-card text-center p-3"
                    key={company.id}
                    style={{ minWidth: "180px", maxWidth: "200px" }}
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="company-logo mb-2"
                      style={{ width: "100%", height: "80px", objectFit: "contain" }}
                    />
                    <h5 className="company-name">{company.name}</h5>
                    <p className="mb-1">
                      <strong>Location:</strong> {company.location}
                    </p>
                    <p className="mb-2">
                      <strong>Industry:</strong> {company.industry}
                    </p>
                    <button className="btn btn-success btn-sm">Apply Now</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#companyCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#companyCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CompanyCarousel;
