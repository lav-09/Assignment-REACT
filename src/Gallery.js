import React from 'react';
import './Gallery.css';

const Gallery = () => (
  <section className="gallery">
    <h2>Gallery</h2>
    <div className="image-grid">
      <div className="image">
        <img src="/images/one0.jpg" alt="Image 1" />
      </div>
      <div className="image">
        <img src="/images/two0.jpg" alt="Image 2" />
      </div>
      <div className="image">
        <img src="/images/threee.jpg" alt="Image 3" />
      </div>
    </div>
  </section>
);

export default Gallery;
