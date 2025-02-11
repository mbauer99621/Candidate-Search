import { useState, useEffect } from 'react';
import { CandidateInterface } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<CandidateInterface[]>([]);

  useEffect(() => {
    // Load saved candidates from localStorage
    const savedCandidatesData = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(savedCandidatesData);
  }, []);

  return (
    <div className="saved-candidates-container">
      <h1>Potential Candidates</h1>

      {savedCandidates.length === 0 ? (
        <p>No saved candidates yet.</p>
      ) : (
         // Display a table with saved candidates data if there are any
        <table className="candidate-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the saved candidates and display them in table rows */}
            {savedCandidates.map((candidate, index) => (
              <tr key={index}>
                <td>
                  <img src={candidate.avatar_url} alt={candidate.name} className="candidate-image" />
                </td>
                <td>{candidate.name || "No Name Provided"}</td>
                <td>{candidate.location || "Not available"}</td>
                <td>{candidate.email || "Not available"}</td>
                <td>{candidate.company || "Not available"}</td>
                <td>{candidate.bio || "Not available"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCandidates;
