import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modal.css';

const ModalComponent = ({ showModal, setShowModal, blogTitle, blogBody, blogImage, blogImageSource }) => {
    return (
        <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            size='lg'
            aria-labelledby={blogTitle}
            className='blog-modal'
        >
            <Modal.Header closeButton>
                <Modal.Title id={blogTitle}>
                    {blogTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {blogImageSource ?
                (
                    <div className='blog-image'>
                        <img src={blogImage} alt={blogTitle}  className="img-fluid"/>
                        <p className='fst-italic'>Image Source: <a className='text-decoration-underline' href={blogImageSource} target="_blank" rel="noopener noreferrer">{blogImageSource}</a> </p>
                    </div>
                ): null}
                
                <p className='blog-body' dangerouslySetInnerHTML={{ __html: blogBody }}></p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Close
                </Button>
            </Modal.Footer>
            </Modal>
    );
};

export default ModalComponent;
