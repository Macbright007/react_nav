import React from 'react'
import { data } from './Data'
import { CardContainer, InnerCard } from './styles'

const Card = () => {


  return (
    data.map(info => (
      <CardContainer key={info.id}>
        <InnerCard>
          <img src={info.image} alt="boot" />
          <div className="rightContent">
            <p>{info.content}</p>
            <h3>{info.title}</h3>
            <button className="btn">View More</button>
          </div>
        </InnerCard>
      </CardContainer>
    ))
  )

}

export default Card