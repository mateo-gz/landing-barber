import React from 'react';
import GalleryItem from '../components/galleryItems';

const Gallery = () => {
  const images = [
    { img: '/img12.png', title: 'Low Fade' },
    { img: '/img13.png', title: 'Buzz Cut' },
    { img: '/img14.png', title: 'Mullet' },
    { img: '/img15.png', title: 'Fringe' },
  ];

return (
    <section id='gallery' className="gallery">
      <h2 className="gallery-header">Explora nuestros cortes</h2>
      <div className="gallery-container">
        <GalleryItem
        img={'/img12.png'}
        title={'Low Fade'} 
        />
        <GalleryItem
        img={'/img13.png'}
        title={'Buzz Cut'}
        />
        <GalleryItem
        img={'/img14.png'}
        title={'Mullet'}
        />
        <GalleryItem
        img={'/img15.png'}
        title={'Fringe'}
        />
      </div>
    </section>
  );
};

export default Gallery;
