import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {

  const retake = (event) => {
      event.preventDefault();
      window.location.assign('/QuizPage');
  }
  return (
    <footer >
      <button className="retake" onClick={retake}>Take Quiz Again</button>

    </footer>
  );
};

export default Footer;
