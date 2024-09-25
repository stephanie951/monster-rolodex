
import CardContainer from "../card-container/card-container.component";
import './card-list.style.css'

const CardList = ({monsters})=> {

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          
          return (
            <CardContainer monster={monster} />
          );
        })}
      </div>
    );
  }


export default CardList;
