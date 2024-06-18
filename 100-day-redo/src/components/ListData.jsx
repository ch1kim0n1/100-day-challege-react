//IMAGES IMPORTED
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import image7 from "../assets/images/7.png";
import image8 from "../assets/images/8.png";
import image9 from "../assets/images/9.png";
import image10 from "../assets/images/10.png";
import image11 from "../assets/images/11.png";
import image12 from "../assets/images/12.png";
import image13 from "../assets/images/13.png";
import image14 from "../assets/images/14.png";
import image15 from "../assets/images/15.png";
import image16 from "../assets/images/16.png";
import image17 from "../assets/images/17.png";
import image18 from "../assets/images/18.png";
import image19 from "../assets/images/19.png";
import image20 from "../assets/images/20.png";
import image21 from "../assets/images/21.png";
import image22 from "../assets/images/22.png";
import image23 from "../assets/images/23.png";
import image24 from "../assets/images/24.png";
import image25 from "../assets/images/25.png";
import image26 from "../assets/images/26.png";
import image27 from "../assets/images/27.png";
import image28 from "../assets/images/28.png";
import image29 from "../assets/images/29.png";
import image30 from "../assets/images/30.png";
import image31 from "../assets/images/31.png";
import image32 from "../assets/images/32.png";
import image33 from "../assets/images/33.png";
import image34 from "../assets/images/34.png";
import image35 from "../assets/images/35.png";
import image36 from "../assets/images/36.png";
import image37 from "../assets/images/37.png";
import image38 from "../assets/images/38.png";
import image39 from "../assets/images/39.png";
import image40 from "../assets/images/40.png";
import image41 from "../assets/images/41.png";
import image42 from "../assets/images/42.png";
import image43 from "../assets/images/43.png";
import image44 from "../assets/images/7.png";
import image45 from "../assets/images/45.png";
import image46 from "../assets/images/46.png";
import image47 from "../assets/images/47.png";
import image48 from "../assets/images/48.png";
import image49 from "../assets/images/49.png";
import image50 from "../assets/images/50.png";
import image51 from "../assets/images/7.png";
import image52 from "../assets/images/52.png";
import image53 from "../assets/images/53.png";
import image54 from "../assets/images/54.png";
import image55 from "../assets/images/55.png";
import image56 from "../assets/images/56.png";
import image57 from "../assets/images/57.png";
import image58 from "../assets/images/58.png";
import image59 from "../assets/images/7.png";
import image60 from "../assets/images/60.png";
import image61 from "../assets/images/61.png";
import image62 from "../assets/images/62.png";
import image63 from "../assets/images/63.png";
import image64 from "../assets/images/64.png";
import image65 from "../assets/images/65.png";
import image66 from "../assets/images/66.png";
import image67 from "../assets/images/67.png";
import image68 from "../assets/images/68.png";
import image69 from "../assets/images/69.png";
import image70 from "../assets/images/7.png";
import image71 from "../assets/images/71.png";
import image72 from "../assets/images/72.png";
import image73 from "../assets/images/73.png";
import image74 from "../assets/images/74.png";
import image75 from "../assets/images/75.png";
import image76 from "../assets/images/7.png";
import image77 from "../assets/images/77.png";
import image78 from "../assets/images/78.png";
import image79 from "../assets/images/79.png";
import image80 from "../assets/images/80.png";
import image81 from "../assets/images/81.png";
import image82 from "../assets/images/82.png";
import image83 from "../assets/images/83.png";
import image84 from "../assets/images/84.png";
import image85 from "../assets/images/85.png";
import image86 from "../assets/images/86.png";
import image87 from "../assets/images/87.png";
import image88 from "../assets/images/88.png";
import image89 from "../assets/images/89.png";
import image90 from "../assets/images/90.png";
import image91 from "../assets/images/91.png";
import image92 from "../assets/images/92.png";
import image93 from "../assets/images/7.png";
import image94 from "../assets/images/94.png";
import image95 from "../assets/images/95.png";
import image96 from "../assets/images/96.png";
import image97 from "../assets/images/97.png";
import image98 from "../assets/images/98.png";
import image99 from "../assets/images/99.png";
import image100 from "../assets/images/100.png";

//OTHER CLASSES IMPORTED
import ChallengeDay from "./ChallengeDay";
import getDatach1kim0n1 from '../Data/data.jsx';
import DayBreak from "./DayBreak";


function ListData() {

  const imageDays = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15,
    image16, image17, image18, image19, image20,
    image21, image22, image23, image24, image25,
    image26, image27, image28, image29, image30,
    image31, image32, image33, image34, image35,
    image36, image37, image38, image39, image40,
    image41, image42, image43, image44, image45,
    image46, image47, image48, image49, image50,
    image51, image52, image53, image54, image55,
    image56, image57, image58, image59, image60,
    image61, image62, image63, image64, image65,
    image66, image67, image68, image69, image70,
    image71, image72, image73, image74, image75,
    image76, image77, image78, image79, image80,
    image81, image82, image83, image84, image85,
    image86, image87, image88, image89, image90,
    image91, image92, image93, image94, image95,
    image96, image97, image98, image99, image100
  ];

  const data = getDatach1kim0n1();
  const days = data.listItems;

  const renderedDays = [];

  days.forEach((day, index) => {
    const dayNumber = index + 1;
    
    renderedDays.push(
      <ChallengeDay
        key={`challenge-day-${dayNumber}`}
        day={dayNumber}
        title={day.title}
        image={imageDays[dayNumber-1]}
        link={day.link}
      />
    );

    if (dayNumber % 10 === 0) {
      renderedDays.push(
        <DayBreak key={`day-break-${dayNumber}`} day={dayNumber} />
      );
    }
  });

  return <div className="days-list">{renderedDays}</div>;
};

export default ListData