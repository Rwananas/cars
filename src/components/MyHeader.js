const MyHeader = (props) => {

    const noCopy=()=>{ alert('merci de ne pas copier le texte')} 
    const addStyle=(event)=>{
        event.target.classList.toggle('styled')
    }
  return (
    <>
      <h1 onMouseOver={addStyle} style={{ color: props.textColor }}>{props.titre}</h1>
      <p onCopy={noCopy}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nobis
      </p>
    </>
  );
};

export default MyHeader;
