import Header from "../components/Header";
import React, { useEffect, useState } from 'react';
import { InfoCircleOutlined,UploadOutlined} from '@ant-design/icons';
import { Button, Form, Input, Radio,Select, Upload,message} from 'antd';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getCategories } from "../store/actions/categories.actions";
import { getAllBlogs } from "../store/actions/blogs.actions";
import { useParams } from "react-router-dom";

function EditBlog(props){
    const {blogId}=useParams()
    const [form] = Form.useForm();
    const { TextArea } = Input;
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      const onSearch = (value) => {
        console.log('search:', value);
      };
      const props1 = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
      useEffect(()=>{
        props.getCategoriesAction()
        props.getAllBlogsAction()
      },[])

      const categ=props.categories ? props.categories.map(c=>{return {value: c._id,label:c.name}}):''
      const blogInfo=props.blogs ? props.blogs.filter(b=>b._id==blogId):''
    return(
        <div>
            <Header/>
            <div className="page-content container">
                <div className="page-block">
                    <div className="page-header">
                        <h2>Редактирование блога</h2>
                    </div>
                    <div className="form">
                        <Form
                            form={form}
                            layout="vertical"
                            >
                            <Form.Item label="Заголовок" required tooltip="Заполните заголовок">
                                <Input placeholder="input placeholder" value={blogInfo[0] ? blogInfo[0].title:''} />
                            </Form.Item>
                            <Form.Item>
                                <Select
                                    showSearch
                                    placeholder="Select a category"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={categ}
                                />
                            </Form.Item>
                            <Form.Item>
                            <Upload {...props1}>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                            </Form.Item>
                            <Form.Item
                                label="Описание"
                                tooltip='Заполните описание'
                            >

                            <>
                                <TextArea rows={4} />
                                <br />
                                <br />
                                <TextArea rows={4} placeholder="maxLength is 6" value={blogInfo[0] ? blogInfo[0].description:''} />
                            </>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary">Submit</Button>
                            </Form.Item>
                        </Form>
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
    blogs: state.blogsReducers.blogs,
})

export default connect(mapStateToProps,mapDispatchToProps)(EditBlog)