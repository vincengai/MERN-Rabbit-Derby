import React from "react";
import { Link } from "react-router-dom";

// class MainPage extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Rabbit Derby</h1>
//       </div>
//     );
//   }
// };

const MainPage = () => (
  <div>
    <Link to="/rabbitderby">
      <button>Play Game</button>
    </Link>
  </div>
);

export default MainPage;