// import { Component, ReactNode } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props); //Bu prpops bizga Componentdan kelyabdi
//     this.state = {
//       count: 0,
//       key: true,
//     }; // Qandaydir holat va holat obeyktga teng obeyktni ichida esa qandaydir hususiyat mavjud
//   }

//   // State ya'ni holatni o'zgartirishni 3ta usuli bor
//   //   ----- 1 ------
//   //   handleClick = () => {
//   //     // this.setState({count: this.state.count +1})
//   //     this.setState(
//   //       (prevState) => ({ count: prevState.count + 1 }),
//   //       () => {
//   //         console.log("setState completed");
//   //       }
//   //     );

//   //     console.log("From handleClick");
//   //     // this.setState((prevState) => ({ count: prevState.count + 1 }));
//   //     // this.setState((prevState) => ({ count: prevState.count + 1 }));
//   //   };

//   // ----- 2 ------
//   handleClick() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           {this.state.count}
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
