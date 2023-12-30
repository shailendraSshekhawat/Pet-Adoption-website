import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            name={pet.name}
            animal={pet.animal}
            location={`${pet.city}, ${pet.state}`}
            images={pet.images}
            breed={pet.breed}
          />
        ))
      )}
    </div>
  );
};

export default Results;
