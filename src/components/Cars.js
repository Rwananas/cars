export default function Cars(props) {
    const{marque,couleur}=props
    const colorInfo= couleur ? ( <p>Couleur: {couleur}</p>) : ( <p>Couleur: NC</p>);

    if(marque) {
        return (
            <div style={{background:'pink', width:'400px', padding:'10px', margin:'5px auto' }}>
                <p>Marque: {marque} </p>
                {colorInfo}
            </div>
          )
    } else {
        return (
            <div style={{background:'pink', width:'400px', padding:'10px', margin:'5px auto' }}>
                <p>NO DATA </p>
            </div>
          )
    }

  
}
