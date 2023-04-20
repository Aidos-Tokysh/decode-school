import date from '../images/calendar.png'
import eye from '../images/eye.png'
import shape from '../images/Shape.png'
import forums from '../images/forums.svg'
import author from '../images/Vector.png'
import Blog1 from '../images/blogs/blog1.png'
import dots from '../images/dots.svg'
import { Link } from 'react-router-dom'
function Blog({page,blogs}){

    return(
      
        <div className="blog">
            <img src={Blog1} alt=""></img>
            <div className='blog-header'>
                <h2>{blogs.title ? blogs.title:""}</h2>
                {page=='profile' ? 
                <span className="link">
					<img src={dots} alt=""/>
					Еще
                    <ul className="dropdown">
						<li> <Link to={`/editblog/${blogs._id}`}>Редактировать</Link> </li>
						<li><a href="" className="danger">Удалить</a></li>
					</ul>
				</span>
                :""}
            </div>                                              
            <p>
                {blogs.description ? blogs.description : ''}
            </p>
            <div className="blog-info">
                <div className="blog-info-item">
                    <img src={date}></img>
                    <span>26.06.2020</span>
                </div>
                <div className="blog-info-item">
                    <img src={eye}></img>
                    <span>21</span>
                </div>
                <div className="blog-info-item">
                    <img src={shape}></img>
                    <span>4</span>
                </div>
                <div className="blog-info-item">
                    <img src={forums}></img>
                    <span>{blogs.blogType ? blogs.blogType.name : ''}</span>
                </div>
                <div className="blog-info-item">
                    <img src={author}></img>
                    <span>{blogs.user ? blogs.user.login : ''}</span>
                </div>
            </div>
        </div>
        
    )
}
export default Blog