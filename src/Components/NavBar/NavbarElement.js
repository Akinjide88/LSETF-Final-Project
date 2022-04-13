import styled from "styled-components"

export const Nav = styled.nav`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
z-index: 999;
background-color: rgb(135,206,235);
`

export const NavContainer = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
top: 0;
z-index: 1;
font-size: 20px;
`
export const Logohold = styled.div`
display: flex;
align-items: center;
`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 850px){
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  transform: translate(-100%, 60%);
}
`
export const LinksHolder = styled.ul`
display: flex;
width: 30%;
justify-content: space-between;
align-items: center;
list-style: none;
color: black;

@media screen and (max-width: 1100px){
  width: 40%;
}

@media screen and (max-width: 850px){
  background-color: whitesmoke;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: ${({click}) => (click? 0 : '-100%')};
  width: 80%;
  height: 100vh;
  opacity: 1;
  transition: all 0.5s ease;
  padding-left: 0%;
  background-color: white;
  margin-left: -40px;

}
`

export const NavLinks = styled.button`
cursor: pointer;
color: white;
width: 115px;
height: 50px;
background-color: black;
border-radius: 8px;
border: none;
font-size: bold;

&:hover{
  background-color: white;
  color: black;
  border: 2px solid black;
}
`

export const Logo = styled.img`
width: 250px;
height: 200px;

@media screen and (max-width: 700px){
  width: 170px;
  height: 120px;
}
`

