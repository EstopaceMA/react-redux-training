import { Component } from 'react';
import { connect } from 'react-redux';
import { inputHomeForm, clearHomeForm } from '../../../store/home/actions';

class HomeForm extends Component {

    _onHelloClick = () => {
        const { firstName, lastName } = this.props.home;
        window.alert(`Hello ${firstName} ${lastName}`);
    }

    _onClearFormClick = () => {
        this.props.clearHomeForm();
    }

    _onFormInputChange = (type, e) => {
        //this.setState({ [type]: e.target.value });
        this.props.inputHomeForm(type, e.target.value);
    }

    render() {
        console.log(this.props);
        return (
            <div className="home-form-container">
                <span>First Name</span>
                <input className="form-input" type="text" placeholder="Enter first name"
                    onChange={this._onFormInputChange.bind(this, 'firstName')}
                    value={this.props.home.firstName} 
                />
                <span>Last Name</span>
                <input className="form-input" type="text" placeholder="Enter last name"
                    onChange={this._onFormInputChange.bind(this, 'lastName')} 
                    value={this.props.home.lastName}
                />
                <button 
                    className="form-input"
                    onClick={this._onHelloClick.bind(this)}
                >
                    Say Hello
                </button>
                <button
                    className="form-input"
                    onClick={this._onClearFormClick}
                >
                    Clear
                </button>
                <>
                    {JSON.stringify(this.props.home)}
                </>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    home: state.home
});

export default connect(mapStateToProps, {
    inputHomeForm,
    clearHomeForm
})(HomeForm);