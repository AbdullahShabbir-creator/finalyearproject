import React from 'react';

function Schoolnews() {
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzFQmHZRYsN0CgUZA2EKdacOye1sjoB10IQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGRYeI8h47mNpqXeH3sZq8NVC15LGxZzOVQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYR77sqgXg972Bge3FQ-1y7Rwdi_kyrNLUMQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqD8mEhNSoHRJ-jr1MKi4cQkH3_DBaNBROw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfF7QCABEMDG3AQULzpkpEOjauPTyivJ7waAPLx_DWp3biTbUhpVU01kQy2OPHTmhf8yI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34bmU4ZOla-EDKG_oNMVbN9UM4-WTwhz0yRUl_901fkxAZSKhYd_NjliuHrhFKUL3Cr4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuTFr2l8QT9iyjWKU1Xzvh1KqkW1xnAaVlQ3bA6QFUJqSP2bMLBCpN7vh6JaIQzQHoRk&usqp=CAU",
        "https://pub-94535a797e114688813de01f0cd4d531.r2.dev/ipsc/2024/10/20240827-120333-768x469.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqD8mEhNSoHRJ-jr1MKi4cQkH3_DBaNBROw&s"
    ];

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4 text-success">School's Gallery</h2>
            <div className="row">
                {images.map((image, index) => (
                    <div className="col-md-4 col-sm-6 mb-4" key={index}>
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '200px', overflow: 'hidden' }}>
                            <img
                                src={image}
                                alt={`School Pic ${index + 1}`}
                                className="img-fluid w-100 h-100"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Schoolnews;
