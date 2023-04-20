import {Link} from 'react-router-dom'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {setIsAuth} from '../store/actions/auth.actions'
import avatar from '../images/avatar.png'
import jwt_decode from "jwt-decode"
import { useState } from 'react'
function Header(props){
    // const [userId , setUserId] = useState()
    let userId 
    let token = localStorage.getItem("token")
    if(token){
        const decoded = jwt_decode(token)
        userId = decoded.id
        if(decoded.exp * 1000 > Date.now()){
            props.isAuthAction()
        }else{
            localStorage.removeItem("token")
        }
    }
    return(
        <header>
            <div className="header-logo">
                <Link to="/">Decode Blog</Link>
            </div>
            <form className="header-search">
                <input type='hidden'></input>
                <input type='text' placeholder="Поиск по блогам" className="input-search"></input>
                <button className="button button-search">Найти</button>
            </form>
            {!props.isAuth ? 
                <div className="button-group">
                    <Link to="/register" className="button">Регистрация</Link>
                    <Link to="/login" className="button">Вход</Link>
                </div>
            :
                <div className="logo">
                    <Link to={`/profile/${userId}`} className="button">
                        <img src={avatar}/>
                    </Link>
                </div>
            }
        </header>
    )
}

const mapDispatchToProps = dispatch => ({
    isAuthAction: bindActionCreators(setIsAuth , dispatch)
})
const mapStateToProps = state => ({
    isAuth: state.authReducers.isAuth
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)