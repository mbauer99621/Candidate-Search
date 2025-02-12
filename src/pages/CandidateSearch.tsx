import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { CandidateInterface } from '../interfaces/Candidate.interface';


const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<CandidateInterface[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await searchGithub();
        setCandidates(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load candidates');
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (candidates.length === 0) return <p>No candidates found.</p>;

  const candidate = candidates[currentIndex];

  console.log(candidate);

  //Accepted Candidated
  const handleAccept = () => {
    console.log(`Accepted: ${candidate.name}`);
    // Add the accepted candidate to the saved candidates list in localStorage
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(candidate); // Add the current candidate
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
  };

  // Denied Candidate
  const handleDeny = () => {
    console.log(`Denied: ${candidate.name}`);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
  };


  //Candidate search container which shows the information of each candidate
  return (
    <div className="candidate-search-container">
      <h1>Candidate Search</h1>
      <div className="candidate-card">
        <img src={candidate.avatar_url} alt={candidate.name} className="candidate-image" />
        <h2>{candidate.login || "No Name Provided"}</h2>
        <p><strong>Location:</strong> {candidate.location || "Not available"}</p>
        <p><strong>Email:</strong> {candidate.email || "Not available"}</p>
        <p><strong>Company:</strong> {candidate.company || "Not available"}</p>
        <p><strong>Bio:</strong> {candidate.bio || "Not available"}</p>
        <p><strong>Github:</strong> {candidate.html_url || "Not available"}</p>
      </div>

      {/* Buttons outside the candidate card */}
      <div className="button-container">
        <button onClick={handleDeny} className="deny-button">
          <img src="./src/assets/subtraction.png" alt="Deny" />
        </button>
        <button onClick={handleAccept} className="accept-button">
          <img src="./src/assets/addition.png" alt="Accept" />
        </button>
      </div>
    </div>
  );
};

export default CandidateSearch;
