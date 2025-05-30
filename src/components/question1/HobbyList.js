import Hobby from "../Hobby";

function HobbyList() {
  const hobbies = [
    "basketball",
    "hiking",
    "movie games",
    "football",
    "walking",
    "travelling",
  ];

  const hobbyElements = [];
  const hobbyList = () => {
    for (let h in hobbies) {
      hobbyElements.push(<Hobby key={h} h={hobbies[h]} />);
    }
    return hobbyElements;
  };
  return (
    <div className="comp">
      <p>My hobbies are: </p>
      {hobbyList()}
    </div>
  );
}

export default HobbyList;
