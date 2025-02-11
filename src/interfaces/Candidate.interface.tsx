// TODO: Create an interface for the Candidate objects returned by the API

export interface CandidateInterface {
    image: string; //image
    name: string;
    location: string; 
    email: string;
    company: string;
    bio: string;
    reject: string; //image
    onClick: () => void;
  }
  
  const MyComponent: React.FC<CandidateInterface> = ({ image, name, location, email, company, bio, reject, onClick }) => {
    return (
        <div onClick={onClick}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{bio}</p>
            <p>Location: {location}</p>
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <img src={reject} alt="Reject" />
        </div>
    );
  };
