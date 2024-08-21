

const Card = ({simpson}) => {
  return (
    <div className="card">
      <h3>{simpson.character}</h3>
   {/*<p>{simpson.characterDirection}</p>*/}
      <img src={simpson.image}  alt={simpson.character} />
      <p>
        {simpson.quote}
      </p>
    </div>
  );
};

export default Card;
