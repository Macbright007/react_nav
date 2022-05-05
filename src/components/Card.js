import React, { useState, useEffect, useRef } from 'react'
// import { data } from './Data'
import { CardContainer, InnerCard } from './styles'
// import Typewriter from 'typewriter-effect';
import Aos from "aos";
import "aos/dist/aos.css";


const Card = () => {
  

  const [Queries, SetQueries] = useState({
    data: [
      {
          id: 1,
          title: "Cindy",
          content: " I love singing songs",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttrw58jACgsV1I243pyvtJ5ft-uSIDN4aEb45JPR7ZPMBYej0iPAdkteC8ztTfDt8T7U&usqp=CAU"
      },
      {
          id: 2,
          title: "Mac",
          content: " I love Bikes",
          image: "https://wallpaperaccess.com/full/51366.jpg"
      },
      {
          id: 3,
          title: "Bright",
          content: "Never ending Walk",
          image: "https://wallpaperaccess.com/full/632198.jpg"
      },
      {
          id: 4,
          title: "Pharm Uzzy",
          content: "Walking at the beach is therapeutical",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJAM7MrNxJus4wGq2kA_jBrmcORPUb_V8khoHucI55u72-nTpiFEiDSSiTvGQp3KgfQs&usqp=CAU"
      },
      {
          id: 5,
          title: "Tayor",
          content: "A path to Hope",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FadTpHZBwi_eFBSYDA8g-oTSneXqzUzpb8VwK0L60UVC-WwkhBugB3h5X5_vPzipDqc&usqp=CAU"
      }
  ]
  });
  const [pageNum, SetPageNum] = useState(1);

  const observer = useRef(null);

  useEffect(() => {
    const watch = new IntersectionObserver(handleWatch);
    if (observer.current) {
      watch.observe(observer.current);
    }
  }, []);

  //
  useEffect(() => {
    const newItems = Queries.data.concat(
      [
        {
            id: 1,
            title: "Cindy",
            content: " I love singing songs",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttrw58jACgsV1I243pyvtJ5ft-uSIDN4aEb45JPR7ZPMBYej0iPAdkteC8ztTfDt8T7U&usqp=CAU"
        },
        {
            id: 2,
            title: "Mac",
            content: " I love Bikes",
            image: "https://wallpaperaccess.com/full/51366.jpg"
        },
        {
            id: 3,
            title: "Bright",
            content: "Never ending Walk",
            image: "https://wallpaperaccess.com/full/632198.jpg"
        },
        {
            id: 4,
            title: "Pharm Uzzy",
            content: "Walking at the beach is therapeutical",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJAM7MrNxJus4wGq2kA_jBrmcORPUb_V8khoHucI55u72-nTpiFEiDSSiTvGQp3KgfQs&usqp=CAU"
        },
        {
            id: 5,
            title: "Tayor",
            content: "A path to Hope",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FadTpHZBwi_eFBSYDA8g-oTSneXqzUzpb8VwK0L60UVC-WwkhBugB3h5X5_vPzipDqc&usqp=CAU"
        }
    ]);
    SetQueries({
      data: newItems,
    });
  }, [pageNum])


  useEffect(() => {
    Aos.init();
  }, [])


  //function that handles pagecontent update on scroll
  const handleWatch = (morecontent) => {
    const currentPages = morecontent[0];
    if (currentPages.isIntersecting) {
      SetPageNum((pageNum) => pageNum + 1);
    }
  };

  return(
    <div>
        {
          Queries.data.map(query => {
            return(
              <CardContainer key={query.id}>
          <InnerCard>
            <img
              src={query.image}
              alt="left rotated mobile device"
              data-aos="fade-left"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            ></img>
            {/* <img src={info.image} alt="boot" /> */}
            <div
              src={query.image}
              alt="left rotated mobile device"
              data-aos="fade-right"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className="rightContent">

              <p>{query.content}</p>
              <h3>{query.title}</h3>
              <button className="btn">View More</button>
            </div>
          </InnerCard>
        </CardContainer>
            )
          })
        }
         <div className="loader" ref={observer}></div>
    </div>
  )

}

export default Card