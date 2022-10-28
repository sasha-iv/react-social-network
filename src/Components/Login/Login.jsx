import React from "react";
import './Login.scss';
import logo from '../../images/logo.png'
import {connect} from "react-redux";
import { setAuthUserActionCreator } from "../../Redux/authUserReducer";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            email: '',
            isAuth: props.isAuth,
            password: ''
        }
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.enterProfile = props.setAuthUserActionCreator;
    }

    // handleChange(event) {
    //     this.setState({value: event.target.value})
    // }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({value: e.target.value});
        this.enterProfile(this.state.email, this.state.password);
    }
    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div className='loginWrapper'>
                <div className='loginWithLogo'>
                    <div>
                        <img src={logo} alt='logo'/>
                    </div>
                    <form className='loginForm' onSubmit={this.handleSubmit}>
                        <h2>Your account</h2>
                        <input type='text' name='email' onChange={this.handleInputChange} value={this.state.email} placeholder='email'/>
                        <input type='text' name='password' onChange={this.handleInputChange} value={this.state.password} placeholder='password'/>
                        <button className='btnStyle' >Sign in</button>
                    </form>
                </div>
                <div>
                    <p>email: sarah@gmail.com</p>
                    <p>password: 1234</p>
                </div>
            </div>
        )
    }
}

let mapStateToProps =(state) => {
    return{
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        password: state.auth.password
    }
}

export default connect(mapStateToProps, {setAuthUserActionCreator})(Login);