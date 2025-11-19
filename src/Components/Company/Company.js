
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./Company.css";

const Company = () => {
  const [companies, setCompanies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  // Filters
  const [searchText, setSearchText] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterIndustry, setFilterIndustry] = useState("");

  useEffect(() => {
    fetch("/companies.json")
      .then((res) => res.json())
      .then((data) => setCompanies(data))
      .catch((err) => console.error("JSON Fetch Error:", err));
  }, []);

  // Filter logic
  const filteredCompanies = companies.filter((company) => {
    const textMatch =
      company.name.toLowerCase().includes(searchText.toLowerCase()) ||
      company.location.toLowerCase().includes(searchText.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchText.toLowerCase());

    const locationMatch =
      filterLocation === "" ||
      company.location.toLowerCase() === filterLocation.toLowerCase();

    const industryMatch =
      filterIndustry === "" ||
      company.industry.toLowerCase() === filterIndustry.toLowerCase();

    return textMatch && locationMatch && industryMatch;
  });

  const visibleCompanies = filteredCompanies.slice(0, visibleCount);

  return (
    <div className="container my-5">

      <h1 className="text-center mb-5 text-white">The Easiest Way to get your Dream Job</h1>

      {/* 🔍 Centered Filters */}
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, location, or industry..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ minWidth: "250px" }}
        />

        <select
          className="form-select"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          style={{ minWidth: "180px" }}
        >
          <option value="">All Locations</option>
          <option value="California">California</option>
          <option value="Seattle">Seattle</option>
          <option value="New York">New York</option>
          <option value="Texas">Texas</option>
        </select>

        <select
          className="form-select"
          value={filterIndustry}
          onChange={(e) => setFilterIndustry(e.target.value)}
          style={{ minWidth: "180px" }}
        >
          <option value="">All Industries</option>
          <option value="Technology">Technology</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
        </select>

        <button
          className="btn btn-primary px-4"
          onClick={() => setVisibleCount(10)}
        >
          Search
        </button>
      </div>

      {/* Company Grid */}
      <div className="company-grid row g-4 justify-content-center">
        {visibleCompanies.length > 0 ? (
          visibleCompanies.map((company) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={company.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={company.logo}
                  className="card-img-top p-3"
                  alt={company.name}
                  style={{ height: "120px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{company.name}</h5>
                  <p className="card-text mb-1">
                    <strong>Location:</strong> {company.location}
                  </p>
                  <p className="card-text mb-3">
                    <strong>Industry:</strong> {company.industry}
                  </p>
                  <button className="btn btn-success mt-auto">Apply Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            minHeight: "80vh",
            backgroundColor: "#f8f9fa30", // light gray background for page
          }}
        >
          <div
            className="p-5 text-center shadow rounded"
            style={{ backgroundColor: "#ffffff" }} // white background for message
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No jobs found"
              className="mb-3"
              style={{ width: "150px", height: "150px" }}
            />
            <h2 className="text-danger mb-2">Oops! No jobs found</h2>
            <p className="mb-0">Try adjusting your search or filters.</p>
          </div>
        </div>
        )}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredCompanies.length && visibleCompanies.length > 0 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary mt-5 px-5 py-3 fs-4 rounded-pill shadow-lg bg-primary text-white"
            onClick={() => setVisibleCount(visibleCount + 10)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Company;
