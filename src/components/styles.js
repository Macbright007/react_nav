import styled from "styled-components"

export const Navigation = styled.div`
    border: 2px solid #00474b;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    height: 50px;
    padding: 13px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    
    h1{
        color: #00474b;
        margin-top: 2px;
        font-weight: 800;
        font-size: 25px;
        font-family: 'Water Brush', cursive;
        letter-spacing: 1px;
    }
    span{
        font-family: 'Water Brush', cursive;
        font-size: 3rem;
    }
`

export const NavItems = styled.div`
    margin-top: 20px;
    width: 10%;

    button{
        padding: 10px;
        width: 100%;
        border-radius: 20px;
        border: none;
        font-weight: 600;
        font-family: cursive;
    }
    button:hover{
        cursor: pointer;
        background-color: #ffffff42;
        color: #00474b;
        border: 2px solid #00474b;
    }

`

export const CardContainer = styled.div`   
    width: 100%;
    max-width: 800px;
    margin: 60px auto;
    padding: 30px;
`

export const InnerCard = styled.div`
    border-radius: 25px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    background-color: #fff;
    box-shadow: 7px 5px ;

    img{
        width: 100%;
        height: 50vh;
        border-radius: 30px;
        border-bottom-right-radius: 0px;
        /* border-top-right-radius: 0px; */
    }

    .rightContent{
        background-color: #00474bb5;
        border-radius: 30px;
        border-top-left-radius: 0px;
        /* border-bottom-left-radius: 0px; */
    }
`

export const PhotoContainer = styled.div`
    border: 7px solid red;
    margin: 30px;

    .innerPhoto{
        background-color: white;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`