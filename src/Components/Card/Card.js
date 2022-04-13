import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {db} from "../../Base.js";
import {BsGithub, BsLinkedin, BsFacebook, BsWhatsapp} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import { getDocs, collection } from "firebase/firestore";


function Card() {

  const [lsetfdata, setLsetfdata] = useState([]);

  const usersCollectionRef = collection(db, "lsetf-student");

  const getData = async () => {
    const data = await getDocs(usersCollectionRef)
    setLsetfdata(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
  }

  useEffect(() => {
    getData();
}, []);


  return (
    <Container>
      <Title>LSETF/USADF 5th Cohort Participants</Title>
      <Wrapper>
        {lsetfdata.map((datas) => (
        <CardHolder key={datas.id}>
          <Pics src={datas.avatar} alt="img" />
          <Name>{datas.name}</Name>
          <Description>{datas.description}</Description>
          <Icons>
            <a href={`${datas.email}`} target="_blank"><MdEmail style={{width:"25px", height:"25px", color: "black"}}/></a>
            <a href={`${datas.github}`} target="_blank"><BsGithub style={{width:"25px", height:"25px", color: "black"}}/></a>
            <a href={`${datas.linkedin}`} target="_blank"><BsLinkedin style={{width:"25px", height:"25px", color: "black"}}/></a>
            <a href={`${datas.facebook}`} target="_blank"><BsFacebook style={{width:"25px", height:"25px", color: "black"}}/></a>
            <a href={`${datas.whatsapp}`} target="_blank"><BsWhatsapp style={{width:"25px", height:"25px", color: "black"}}/></a>
        </Icons>  
      </CardHolder>
      ))}
      </Wrapper>
    </Container>

  )
}

export default Card;


const Container = styled.div`
background-color: white;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Wrapper = styled.div`
background-color: whitesmoke;
width: 90%;
display: flex;
justify-content: center;
flex-wrap: wrap;

  @media screen and( max-width: 600px){
    display: none;
  }
`

const CardHolder = styled.div`
display: flex;
flex-direction: column;
width: 28%;
background-color: white;
justify-content: center;
align-items: center;
border-radius: 8px;
box-shadow: 0 0 20px 2px gray;
flex-wrap: wrap;
margin: 15px;

&:hover{
  transform: scale(1.1);
}

@media screen and (max-width: 900px){
  width: 45%;
}

@media screen and (max-width: 750px){
  width: 42%;
}

@media screen and (max-width: 600px){
  width: 80%;
}
`

const Title = styled.h1`
display: flex;
justify-content: center;
align-items: center;
background-color: black;
text-align: center;
font-family: Arial, Helvetica, sans-serif;
font-size: 50px;
font-weight: 700;
width: 80%;
height: 80px;
margin-top: 20px;
border-radius: 8px;
color: white;

@media screen and ( max-width: 1200px){
  font-size: 40px;
}

@media screen and ( max-width: 1000px){
  font-size: 30px;
}

@media screen and ( max-width: 650px){
  font-size: 20;
}

`
const Name = styled.h1`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 20px;
`
const Pics = styled.img`
background-color: blue;
width: 120px;
height: 120px;
border-radius: 60px;
margin-top: 20px;
`

const Description =styled.p`
font-family: Arial, Helvetica, sans-serif;
text-align: left;
margin: 20px;
`

const Icons = styled.div`
width: 200px;
display: flex;
justify-content: space-between;
margin-bottom: 20px;
`