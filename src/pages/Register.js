import { useState } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Header from "../components/Header"
import {signUp} from '../store/actions/auth.actions'
import {useNavigate} from 'react-router-dom'
function Register(props){
    const navigate = useNavigate()
    const [login , setLogin] = useState('')
    const [name , setName] = useState('')
    const [password , setPassword] = useState('')
    const [password2 , setPassword2] = useState('')
    const onChangeEmail = (e) => {
        setLogin(e.target.value)
    }
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangePassword2 = (e) => {
        setPassword2(e.target.value)
    }
    const register = () => {
        props.signUpAction({
            data : {name , login , password , password2}, 
            navigate
        })
    }
    return(
        <div>
            <Header/>
            <div className="page-content container">
                <div className="form">
                    <h2>Регистрация</h2>
                    <input placeholder="Введите email" value={login} onChange={onChangeEmail}/>
                    <input placeholder="Введите полное имя" value={name} onChange={onChangeName}/>
                    <input placeholder="Введите пароль" value={password} onChange={onChangePassword}/>
                    <input placeholder="Подтвердите пароль" value={password2} onChange={onChangePassword2}/>
                    <button className="button" onClick={register}>Зарегистрироваться</button>
                    {Object.keys(props.error).map(key => <p className="error-text" key={key}>{props.error[key]}</p>)}
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    signUpAction: bindActionCreators(signUp , dispatch)
})
const mapStateToProps = state => ({
    error: state.authReducers.error
})

export default connect(mapStateToProps,mapDispatchToProps)(Register)