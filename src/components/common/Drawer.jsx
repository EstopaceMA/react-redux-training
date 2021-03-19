import { Component } from 'react';
import './drawer.css';
import { connect } from 'react-redux';
import { setActiveForm } from '../../store/drawer/actions';

class Drawer extends Component {

    _onDrawerClick = (type, e) => {
        this.props.setActiveForm("activeForm", e.target.value);
        // window.alert(JSON.stringify(type));
    }

    render() {
        return (
            <div className="drawer">
                <button value="Home" 
                    style={{backgroundColor: (this.props.drawer.activeForm === 'Home') ? 'brown' : ''}}
                    onClick={this._onDrawerClick.bind(this, 'Home')} 
                >
                    Home
                </button>
                <button value="Customers"
                    style={{backgroundColor: (this.props.drawer.activeForm === 'Customers') ? 'brown' : ''}}
                    onClick={this._onDrawerClick.bind(this, 'Customers')}
                >
                    Customers
                </button>
                <button value="Settings"
                    style={{backgroundColor: (this.props.drawer.activeForm === 'Settings') ? 'brown' : ''}}
                    onClick={this._onDrawerClick.bind(this, 'Settings')}
                >
                    Settings
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    drawer: state.drawer
});

export default connect(mapStateToProps, {
    setActiveForm
})(Drawer);