import './MythPage.css'
import { Link } from 'react-router-dom';

const MythPage = (props) => {
    return ( 
      <>
        <Link to={`/${props.link}`} className="card">
          <div className="card-inner">
            <div className="front">
                <img src={props.image} alt="domainImg" />
                <p>{props.question}</p>  
            </div>
          </div>
        </Link>
      </>
    );
} 

export default MythPage;
