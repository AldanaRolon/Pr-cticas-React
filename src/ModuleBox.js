import React from 'react';
import './ModuleBox.css';

const ModuleBox = () => {
    return (
        <div className="container">
            <img src='https://streaming.resources.smartraining.cl/iaas/iaas_m1_pi/images/d2_img1.jpg' alt='Imagen' className='container-image'/>
            <div className='container-text'>
                <h2>Módulo 1</h2>
                <p>Generalidades de las Infecciones Asociadas a la Atención de la Salud (IAAS)</p>
            </div>
        </div>
    );
};

export default ModuleBox;