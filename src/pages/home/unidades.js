import React, { useState } from "react";
import style from "./css/unidades.module.css";

import unidade01 from "../../assets/unidades/Matriz.png"
import unidade02 from "../../assets/unidades/Unidade2.png"
import unidade03 from "../../assets/unidades/Astir.png"
import unidade04 from "../../assets/unidades/Enoch.png"
import unidade05 from "../../assets/unidades/HUnimed.png"
import unidade06 from "../../assets/unidades/H9.png"
import unidade07 from "../../assets/unidades/HC.png"
import unidade08 from "../../assets/unidades/Prontocords.png"
import unidade09 from "../../assets/unidades/Multiplik.png"

export default function HomeUnidades() {
    const [selectedImage, setSelectedImage] = useState(unidade01); // Imagem inicial selecionada

    const images = [unidade01, unidade02, unidade03, unidade04, unidade05, unidade06, unidade07, unidade08, unidade09];

    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="container mt-5">
            <h1 className="text-center">Nossas Unidades</h1>

            <div className="row align-items-center justify-content-center">
                {/* Descrição e Botão */}
                <div className="col-12 col-md-6 text-center p-5 rounded">
                    <p>
                        Em nossas unidades, priorizamos a qualidade do atendimento e a experiência do paciente. Conheça as opções perto de você e agende seu atendimento.
                    </p>
                    <a href="https://www.google.com" className={`btn botaoPadrao`}>Agende agora mesmo</a>
                </div>

                {/* Imagens Carousel */}
                <div className="col-12 col-md-6">
                    <div className={`${style.carouselUnidcontainer} ${style.efeitoInner} rounded`}>
                        {/* Imagem Principal */}
                        <div className={style.mainUnidImage}>
                            <img src={selectedImage} alt="Imagem Principal" className="img-fluid" />
                        </div>

                        {/* Imagens Secundárias (Miniaturas) */}
                        <div className={style.carouselUnidThumbnails}>
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Unidade ${index + 1}`}
                                    className={`${style.unidThumbnail} ${selectedImage === img ? 'active' : ''}`}
                                    onClick={() => setSelectedImage(img)} // Mudar imagem principal
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}