import Header from "../components/Header";
import Blog from '../components/Blog'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getCategories } from "../store/actions/categories.actions";
import { getAllBlogs } from "../store/actions/blogs.actions";
import { useEffect } from "react";
import List from "../components/List";
function Main(props){
    useEffect(()=>{
        // console.log(props)
        props.getCategoriesAction()
        props.getAllBlogsAction()
    },[])
    
    return(
        <div>
            <Header/>
            <div className="page-content container">
                <div className="page-info">
                    <div className="page-header">
                        <h2>Блоги по программированию</h2>
                        <p>Популярные и лучшие публикации по программированию для начинающих
                            и профессиональных программистов и IT-специалистов.</p>
                    </div>
                    <div className="blogs">
                        {props.blogs ? props.blogs.map(blog=><Blog blogs={blog} page="/"/>):''}
                    </div>
                </div>
                <div className='category-list'>
                    <h2>Категории</h2>
                    <div className='categ-item'>
                        {props.categories ? <List list={props.categories}/>:''}
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    getCategoriesAction: bindActionCreators(getCategories , dispatch),
    getAllBlogsAction:bindActionCreators(getAllBlogs,dispatch)
})
const mapStateToProps = state => ({
    categories: state.categoriesReducers.categories,
    blogs:state.blogsReducers.blogs
})

export default connect(mapStateToProps,mapDispatchToProps)(Main)