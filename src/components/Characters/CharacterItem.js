const CharacterItem = ({ item }) => {
    return (
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="card-back">
            <a
              href={`https://en.wikipedia.org/wiki/${item.name}`}
              target="_blank" rel="noreferrer"
            >
              <h1>{item.name}</h1>
            </a>
            <p>Actor name : {item.portrayed}</p>
            <p>Nick name: {item.nickname}</p>
            <p>Birthday: {item.birthday}</p>
            <p>Status: {item.status}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CharacterItem;
  