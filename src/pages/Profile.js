import Header from '../components/Header'
import Blog from '../components/Blog'
import {useParams} from 'react-router-dom'
import avatar from '../images/avatar.png'
import {Link} from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getUserBlogs } from '../store/actions/blogs.actions'
import { useEffect } from 'react'

function Profile(props){
    let {userId} = useParams()
    useEffect(()=>{
        props.getUserBlogsAction(userId)
    },[])

    return(
        <div>
            <Header/>
            <div className="page-content container">
                <div className="page-info">
                    <div className="page-header profile-header">
                        <h2>Мои блоги</h2>
                        <Link to="/newblog"><button className='button'>Новый блог</button></Link>
                    </div>
                    <div className="blogs">
                        {props.blogs ? props.blogs.map(blog=> <Blog key={`blogs-${blog._id}`}  blogs={blog} page="profile"/>):''}
                    </div>
                </div>
                <div className='user-info'>
                    <div className="user-profile">
                        <img className="user-profile--ava" src={avatar} alt=""/>
                        <h1>Ельнур Сейтжанов</h1>
                        <h3>В основном пишу про веб - разработку, на React & Redux</h3>
                        <p>285 постов за все время</p>
                        <a href="" className="button">Редактировать</a>
                        <a href="api/auth/signout.php" className="button button-danger"> Выход</a>
                    </div>
                </div>
            </div>
        </div>
      
    )
}
const mapDispatchToProps = dispatch => ({
    getUserBlogsAction:bindActionCreators(getUserBlogs,dispatch),
})
const mapStateToProps = state => ({
    blogs:state.blogsReducers.userBlogs
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
