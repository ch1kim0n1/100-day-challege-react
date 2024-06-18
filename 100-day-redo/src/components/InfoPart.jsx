import img from '../assets/challenge.jpg';

function InfoPart() {
  return (
    <>
      <div class="InfoImage">  
        <img src={img} alt=""/>
      </div>
      <div className="info">
        <div className="text">
          Every day, according to the list, it is required to mark different anime. It can be the same anime for several days, but not every day. It can be
          characters, moments, the series itself, etc.
        </div>
        <div className="text">
          This is not actually Anilist site. If you want to go to Anilist, click on my nickname (top right corner) here
        </div>
        <div className="date">
          <div className="date-block">
            02.27.2022
          </div>
          <span> — </span>
          <div className="date-block">
            07.24.2022
          </div>
        </div>
        <div className="text">
          It took me longer than I expected T~T
        </div>
      </div>
    </>
  );
}

export default InfoPart;