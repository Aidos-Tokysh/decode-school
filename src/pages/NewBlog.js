import Header from "../components/Header";
// import List from "../components/List";
import { useState,useEffect } from "react";
import { getCategories } from "../store/actions/categories.actions";
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { createBlog } from "../store/actions/blogs.actions";
import {useNavigate} from 'react-router-dom'
function NewBlog(props){
    const navigate=useNavigate()
    useEffect(()=>{
        props.getCategoriesAction()
    },[])
    const [formData,setFormData]=useState({
        title:'',
        description:'',
        blogType:''

    })

    const onChange=(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value  })
    }
    const sendData=()=>{
        props.createBlogAction({formData,navigate})
        // console.log(formData)
    }

    return(
        <div>
            <Header/>
            <div className="page-content container">
                <div className="page-block">
                    <div className="page-header">
                        <h2>Новый блог</h2>
                    </div>
                    <div className="form">
                        <input value={formData.title} name="title" onChange={onChange} className="input" placeholder="Введите заголовок блога"/>
                        <select value={formData.blogType} name="blogType" onChange={onChange} className="select">
                            <option >Выберите категорию</option>
                            {props.categories.map(item=>(
                                <option value={item._id} key={item._id}>{item.name}</option>
                            ))}
                            
                        </select>
                        <button className="image-button">
                            <input type="file"/>
                            Выберите картинку
                        </button>
                        <textarea value={formData.description} name="description" onChange={onChange} placeholder="Введите описание блогов" className="input textarea"></textarea>
                        <button className="button" onClick={sendData}>Создать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    getCategoriesAction: bindActionCreators(getCategories , dispatch),
    createBlogAction: bindActionCreators(createBlog,dispatch)
})
const mapStateToProps = state => ({
    categories: state.categoriesReducers.categories,
    blogs: state.blogsReducers.blogs,
    error: state.blogsReducers.error
})

export default connect(mapStateToProps,mapDispatchToProps)(NewBlog)