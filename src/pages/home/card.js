import React from "react";

import style from "./home.module.css"

import resultadosOff from "./assets/servicos/resultados_off.png";
import resultadosOn from "./assets/servicos/resultados_on.png";
import examesOff from "./assets/servicos/exames_off.png";
import examesOn from "./assets/servicos/exames_on.png";
import laudoOff from "./assets/servicos/laudo_off.png";
import laudoOn from "./assets/servicos/laudo_on.png";
import duvidasOff from "./assets/servicos/duvidas_off.png";
import duvidasOn from "./assets/servicos/duvidas_on.png";

export default function HomeServicos() {

    const cards = [
        {
            imgOff: resultadosOff,
            imgOn: resultadosOn,
            title: "Resultado Online",
            text: "Retire seu resultado aqui!",
            link: "https://www.google.com",
            button: "Acessar Resultados"
        },
        {
            imgOff: examesOff,
            imgOn: examesOn,
            title: "Exames",
            text: "Confira a lista de nossos exames oferecidos!",
            link: "https://www.google.com",
            button: "Consultar Exames"
        },
        {
            imgOff: laudoOff,
            imgOn: laudoOn,
            title: "Médicos Resultado Online",
            text: "Instruções para acesso de médicos!",
            link: "https://www.google.com",
            button: "Insturuções"
        },
        {
            imgOff: duvidasOff,
            imgOn: duvidasOn,
            title: "Dúvidas",
            text: "Estamos aqui para lhe orientar sobre o seu exame!",
            link: "https://www.google.com",
            button: "WhatsApp"
        },
    ];

    return (
        <div className="container mt-5 text-center" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center mb-4">Serviços Personalizados</h1>
            <p>Oferecemos uma experiência prática e acessível para nossos clientes. </p>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {cards.map((card, index) => (
                    <div className="col" key={index}>
                        <div className={`card d-flex flex-column justify-content-between align-items-center h-100 py-4 ${style.customCard}`}>
                            <div className={style.imgCardContainer}>
                                <img
                                    src={card.imgOff}
                                    className={`${style.cardImgTop} img-fluid`}
                                    alt={card.title}
                                    onMouseOver={(e) => (e.currentTarget.src = card.imgOn)}
                                    onMouseOut={(e) => (e.currentTarget.src = card.imgOff)}
                                />
                            </div>
                            <div className={`${style.cardBody}`}>
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <a href={card.link} className={`btn ${style.customCardBtn}`}>
                                    {card.button}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}