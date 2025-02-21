import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Certifique-se de importar o CSS

import unidade01 from "../../assets/unidades/Matriz.png"
import unidade02 from "../../assets/unidades/Unidade2.png"
import unidade03 from "../../assets/unidades/Astir.png"
import unidade04 from "../../assets/unidades/Enoch.png"
import unidade05 from "../../assets/unidades/HUnimed.png"
import unidade06 from "../../assets/unidades/H9.png"
import unidade07 from "../../assets/unidades/HC.png"
import unidade08 from "../../assets/unidades/Prontocords.png"
import unidade09 from "../../assets/unidades/Multiplik.png"

const DemoCarousel = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onChange = (index) => {
        setSelectedIndex(index);
    };

    const onClickItem = (index) => {
        console.log('Item clicked:', index);
    };

    const onClickThumb = (index) => {
        console.log('Thumbnail clicked:', index);
    };

    return (
        <Carousel
            selectedItem={selectedIndex}
            showArrows={true}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            className='col-6 col-md-6 rounded mt-3'
        >
            <div>
                <img src={unidade01} alt="Slide 1" />
                <p className="legend" style={{background: "#f08434"}}><b>Matriz</b></p>
            </div>
            <div>
                <img src={unidade02} alt="Slide 2" />
                <p className="legend" style={{background: "#f08434"}}><b>Unidade 2</b></p>
            </div>
            <div>
                <img src={unidade03} alt="Slide 3" />
                <p className="legend" style={{background: "#f08434"}}><b>Anexo ao Hospital Astir</b></p>
            </div>
            <div>
                <img src={unidade04} alt="Slide 4" />
                <p className="legend" style={{background: "#f08434"}}><b>Anexo a Clínica do Dr. Enoch</b></p>
            </div>
            <div>
                <img src={unidade05} alt="Slide 5" />
                <p className="legend" style={{background: "#f08434"}}><b>Anexo ao Hospital Unimed</b></p>
            </div>
            <div>
                <img src={unidade06} alt="Slide 6" />
                <p className="legend" style={{background: "#f08434"}}><b>Anexo ao Hospital 9 de Julho</b></p>
            </div>
            <div>
                <img src={unidade07} alt="Slide 6" />
                <p className="legend" style={{background: "#f08434"}}><b>Anexo ao Hospital das Clínicas</b></p>
            </div>
            <div>
                <img src={unidade08} alt="Slide 6" />
                <p className="legend" style={{background: "#f08434"}}><b>Anexo ao Hospital Prontocords</b></p>
            </div>
            <div>
                <img src={unidade09} alt="Slide 6" />
                <p className="legend" style={{background: "#f08434"}}><b>Anexo à Clínica Multiplik</b></p>
            </div>
        </Carousel>
    );
};

export default DemoCarousel;
