import Cars from "../components/Cars";


function Mycars(props) {
  return (
    <div>
      <h1>{props.titre}</h1>
      <Cars marque='ford' couleur='rouge' />
      <Cars marque='fiat' couleur='' />
      <Cars marque='' couleur='' />
      
    </div>
  );
}

export default Mycars;
