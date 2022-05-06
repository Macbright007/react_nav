import React, { useState, useEffect, useRef } from 'react'
import { data } from './Data'
import { CardContainer, InnerCard } from './styles'
// import Typewriter from 'typewriter-effect';
import Aos from "aos";
import "aos/dist/aos.css";


const Card = () => {
  

  const [Queries, SetQueries] = useState(data);
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
    const newItems = Queries.concat(data);
    SetQueries( newItems);
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
          Queries.map(query => {
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