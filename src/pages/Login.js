import { useState } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Header from "../components/Header"
import {signIn} from '../store/actions/auth.actions'
import {useNavigate} from 'react-router-dom'
function Login(props){
    const navigate = useNavigate()
    const [login , setLogin] = useState('')
    const [password , setPassword] = useState('')
    const onChangeEmail = (e) => {
        setLogin(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const loginUser = () => {
        props.signInAction({
            data : { login , password}, 
            navigate
        })
    }
    return(
        <div>
            <Header/>
            <div className="page-content container">
                <div className="form">
                    <h2>Вход</h2>
                    <input placeholder="Введите email" value={login} onChange={onChangeEmail}/>
                    <input placeholder="Введите пароль" value={password} onChange={onChangePassword}/>
                    <button className="button" onClick={loginUser}>Войти</button>
                    {Object.keys(props.error).map(key => <p className="error-text" key={key}>{props.error[key]}</p>)}
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    signInAction: bindActionCreators(signIn , dispatch)
})
const mapStateToProps = state => ({
    error: state.authReducers.error
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)