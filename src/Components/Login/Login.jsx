import React from "react";
import './Login.scss';
import logo from '../../images/logo.png'
import {connect} from "react-redux";
import { setAuthUserActionCreator } from "../../Redux/authUserReducer";
import {useState} from "react";
import {Navigate} from "react-router-dom";

// class Login1 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: '',
//             email: '',
//             password: ''
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.enterProfile = props.setAuthUserActionCreator;
//     }
//
//     handleSubmit(e) {
//
//         e.preventDefault();
//         this.setState({value: e.target.value});
//         this.enterProfile(this.state.email, this.state.password);
//         console.log(this.props.isAuth)
//         if (this.props.isAuth === true) {
//             console.log(111)
//             return <Navigate to='/posts'/>
//         }
//
//     }
//
//     handleInputChange(e) {
//         const name = e.target.name;
//         const value = e.target.value;
//         this.setState({
//             [name]: value
//         })
//     }
//
//
//
//     render() {
//         return(
//             <div className='loginWrapper'>
//                 <div className='loginWithLogo'>
//                     <div>
//                         <img src={logo} alt='logo'/>
//                     </div>
//                     <form className='loginForm' onSubmit={this.handleSubmit}>
//                         <h2>Your account</h2>
//                         <input type='text' name='email' onChange={this.handleInputChange} value={this.state.email} placeholder='email'/>
//                         <input type='text' name='password' onChange={this.handleInputChange} value={this.state.password} placeholder='password'/>
//                         <button className='btnStyle' >Sign in</button>
//                     </form>
//                 </div>
//                 <div>
//                     <p>email: sarah@gmail.com</p>
//                     <p>password: 1234</p>
//                 </div>
//             </div>
//         )
//     }
// }

const Login = (props) => {

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = data;

    const changeHandler = (e) => {
        setData({...data, [e.target.name] : e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.setAuthUserActionCreator(email, password);
    }

    if (props.isAuth === true) return <Navigate to='/posts'/>

    return(
        <div className='loginWrapper'>
            <div className='loginWithLogo'>
                <div>
                    <img src={logo} alt='logo'/>
                </div>
                <form className='loginForm' onSubmit={submitHandler}>
                    <h2>Your account</h2>
                    <input type='text' name='email' onChange={changeHandler} value={email} placeholder='email'/>
                    <input type='text' name='password' onChange={changeHandler} value={password} placeholder='password'/>
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

let mapStateToProps =(state) => {
    return{
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        password: state.auth.password
    }
}
export default connect(mapStateToProps, {setAuthUserActionCreator})(Login);