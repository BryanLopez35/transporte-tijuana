import React, { useState } from 'react';
import Modal from 'react-modal';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Ejemplo de datos de imágenes y descripciones
// Importa tus imágenes
import imagen1 from '../img/arctoTijuana.jpg';
import imagen2 from '../img/cecut.jpg';
import imagen3 from '../img/tijerasTijuana.jpeg';
const images = [
    {
        original: imagen1,
        description: 'El Arco de Tijuana es un icónico monumento ubicado en la ciudad de Tijuana, México. Es un arco de acero y concreto que se encuentra en la Zonaeste de la ciudad, cerca de la playa y la frontera con los Estados Unidos.',
        latitude: 32.5236,
        longitude: -117.0378,
    },
    {
        original: imagen2,
        description: 'El Centro Cultural Tijuana (CECUT) es un importante centro cultural y museo en la ciudad de Tijuana. Ofrece una variedad de exhibiciones y eventos culturales. Se encuentra en la Zonaeste de Tijuana, cerca del Arco de Tijuana.',
        latitude: 32.5237,
        longitude: -117.0376,
    },
    {
        original: imagen3,
        description: 'El Monumento a la Tijera, también conocido como "Las Tijeras de Tijuana", es una escultura que representa una tijera gigante. Se encuentra en el centro de la ciudad de Tijuana y es un símbolo distintivo de la ciudad.',
        latitude: 32.5334,
        longitude: -117.0344,
    },
    // Agrega más imágenes y descripciones aquí
];

function PuntosDeInteresComponent() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='body-div'>
            <h1>Página de Puntos de Interés</h1>
            <p>Explora nuestros puntos de interés destacados aquí.</p>

            <Gallery
                items={images.map((image, index) => ({
                    original: image.original,
                    description: image.description,
                    onClick: () => openModal(index),
                }))}
            />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='Modal'
            >
                <div>
                    <img src={images[currentImageIndex].original} alt='' />
                    <p>{images[currentImageIndex].description}</p>
                    <MapContainer
                        center={[
                            images[currentImageIndex].latitude,
                            images[currentImageIndex].longitude,
                        ]}
                        zoom={15}
                        style={{ height: '300px', width: '100%' }}
                    >
                        <TileLayer
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker
                            position={[
                                images[currentImageIndex].latitude,
                                images[currentImageIndex].longitude,
                            ]}
                        >
                            <Popup>{images[currentImageIndex].description}</Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <button onClick={closeModal}>Cerrar</button>
            </Modal>
        </div>
    );
}

export default PuntosDeInteresComponent;
