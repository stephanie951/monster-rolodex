import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import Searchbox from "./components/searchbox/searchbox.component";
import "./App.css";

const App = () => {
  const [ searchField, newsearchField ] = useState("");
  const [ monster, newMonster ] = useState([]);
  const[ filteredMonster, setFilteredMonster ]= useState(monster);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => newMonster(user));
  }, []);

  useEffect(() => {
    const newfilteredMonster = monster.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonster(newfilteredMonster);
  }, [monster, searchField]);

  const onSearchchange = (event) => {
    const searchStringField = event.target.value.toLocaleLowerCase();
    newsearchField(searchStringField);
  };

  return (
    <div className="App">
      <h1 className="monsterHeader"> Monster Rolodex</h1>
      <Searchbox
        onSearchMove={onSearchchange}
        placeholder="Search Monster"
        className="Monster-SearchBar"
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
};

//     this.state = {
//       monster: [],
//       searchField: "",
//     };

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((user) => {
//         this.setState(() => {
//           return { monster: user };
//         });
//       });
//   }

//   render() {
//     const { monster, searchField } = this.state;
//     const { onSearchchange } = this;

//     const filteredMonster = monster.filter((monsters) => {
//       return monsters.name.toLocaleLowerCase().includes(searchField);
//     });

//   }
// }

export default App;
