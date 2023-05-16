import Cars from "../components/Cars";
import Wrapper from "../components/Wrapper";
import MyHeader from "../components/MyHeader";


function Mycars(props) {
  return (
    <div>
      <Wrapper wrapper={<MyHeader titre='Mon Catalogue Voitures' textColor='blue'/>}  />
     
      
      <Cars marque={props.cars[0]} couleur='rouge' />
      <Cars marque={props.cars[1]} couleur='' />
      <Cars marque='' couleur='' />
      
    </div>
  );
}

export default Mycars;
