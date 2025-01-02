import React, { useState, useEffect, useRef } from 'react';
import TeacherProfiles from "../TeacherProfile/Teacherprofiles";

function Schoolnews() {
    const [images, setImages] = useState([]); // Start with an empty array for images
    const [token, setToken] = useState(null); // Track the token state
    const fileInputRef = useRef(null); // Reference for the file input element

    useEffect(() => {
        // Check for token in local storage when component mounts
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken); // If token exists, update the token state
        }

        // Load saved images from localStorage
        const savedImages = JSON.parse(localStorage.getItem("images"));
        if (savedImages) {
            setImages(savedImages); // Load images from localStorage
        }
    }, []);

    useEffect(() => {
        // Save images to localStorage whenever the images state changes
        if (images.length > 0) {
            localStorage.setItem("images", JSON.stringify(images));
        }
    }, [images]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create an image URL for the uploaded file
            const imageURL = URL.createObjectURL(file);
            const title = prompt("Enter title for this image:"); // Prompt user for title
            setImages((prevImages) => [...prevImages, { url: imageURL, title }]); // Add the new image with title to the gallery
        }
    };

    const triggerFileInput = () => {
        // Trigger the file input dialog when the "Add Image" button is clicked
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleDeleteImage = (index) => {
        // Remove the image at the specified index
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages); // Update the state with the new image list
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4 text-success">School's Gallery</h2>
            <div>
                <TeacherProfiles />
            </div>
            <h1 className='text-center text-primary mb-3'>Event Gallery</h1>
            <div className="row">
                {images.map((image, index) => (
                    <div className="col-md-4 col-sm-6 mb-4" key={index}>
                        <div className="d-flex justify-content-center align-items-center image-container" style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                            <img
                                src={image.url}
                                alt={`School Pic ${index + 1}`}
                                className="img-fluid w-100 h-100 image"
                                style={{ objectFit: 'cover' }}
                            />
                            {/* Title that appears on hover */}
                            <div className="image-title">{image.title}</div>
                        </div>
                        <div className="text-center mt-2">
                            {/* Only show the delete button if the user is authenticated */}
                            {token && (
                                <button
                                    onClick={() => handleDeleteImage(index)} // Pass index to the delete function
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Render an image upload button if token exists */}
            {token && (
                <div className="text-center mt-4">
                    <button
                        onClick={triggerFileInput}
                        className="btn btn-success"
                    >
                        Add Image
                    </button>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={fileInputRef}
                        style={{ display: 'none' }} // Hide the input element
                    />
                </div>
            )}

        </div>
    );
}

export default Schoolnews;
