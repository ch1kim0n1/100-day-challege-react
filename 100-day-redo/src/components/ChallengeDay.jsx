// ChallengeDay.jsx
function ChallengeDay(props) {
  const url = props.link;

  const handleClick = () => {
      window.open(url, '_blank');
  }

  return (
      <div onClick={handleClick} className="card-holder">
          <img className='card-img' src={props.image} alt={props.title} />
          <h2 className='card-title'>{props.title}</h2>
          <p className='card-day'>DAY {props.day}</p>
      </div>
  );
}

export default ChallengeDay;
