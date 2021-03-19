import { connect } from 'react-redux';
import { Component } from 'react';
import Home from './components/home';
import Drawer from './components/common/Drawer';
import Customers from './components/customers';
import Settings from './components/settings';

// const App = () => {
//   return (
//     <div className="App">
//       <Drawer/>
//       <Home/>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Drawer/>
        {this.props.drawer.activeForm === "Home" && <Home />}
        {this.props.drawer.activeForm === "Customers" && <Customers />}
        {this.props.drawer.activeForm === "Settings" && <Settings />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  drawer: state.drawer
});

export default connect(mapStateToProps, {})(App);
