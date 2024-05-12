import React from 'react'
import { useState } from 'react'
import './Blog.css'
import { Card } from 'react-bootstrap'
import blogsList from '../../assets/blog.json'
import ModalComponent from '../modal/Modal'
import { Modal, Button } from 'react-bootstrap';

const Blog = () => {

    const [showModal, setShowModal] = useState(false);
    const [blogTitle, setBlogTitle] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const [blogImage, setBlogImage] = useState('');
    const [blogImageSource, setBlogImageSource] = useState('');

    const handleBlogClick = (blog) => {
        setBlogTitle(blog.title);
        setBlogBody(blog.body);
        setBlogImage(blog.image);
        setBlogImageSource(blog.imageSource);
        setShowModal(true);
    }


  return (
    <div className='blog cusContainer'>

        {
            blogsList.length > 0 ? (
                blogsList.map((blog, index) => {
                    return (
                        <Card className='bg-dark text-white blog-card m-5' border='dark' key={index} onClick={()=> handleBlogClick(blog)}>
                            <Card.Header>{blog.title}</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p className='blog-info'>
                                    {blog.info}
                                </p>
                                <footer className="blockquote-footer">
                                    {blog.tags && blog.tags.length > 0 && blog.tags.map((tag, index) => (
                                        <span key={index} className='tag'>#{tag} </span>
                                    ))}
                                </footer>
    
                                </blockquote>
                            </Card.Body>
                            <Card.Footer className="text-center text-white fw-lighter blog-date">Last Edited: {blog.dateUpdated}</Card.Footer>
                        </Card> 
                    )
                })
            ) : (
                <p className='text-center'>No blogs to display</p>
            )
        }


        <ModalComponent
            showModal={showModal}
            setShowModal={setShowModal}
            blogTitle={blogTitle}
            blogBody={blogBody}
            blogImage={blogImage}
            blogImageSource={blogImageSource}
        />
        

      
    </div>
  )
}

export default Blog
