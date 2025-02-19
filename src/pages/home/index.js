import React from "react";
import Navbar from "../../components/navbar";
import styles from "./home.module.css";
import Logo from "../../assets/LOGOCEACLIN.png";
import HomeServicos from "./card";

import carouselImg01 from "./assets/carousel/1.png";
import carouselImg02 from "./assets/carousel/2.png";
import carouselImg03 from "./assets/carousel/3.png";
import carouselImg04 from "./assets/carousel/4.png";

import confortoImg01 from "./assets/conforto/CEACLIN_1.webp";
import confortoImg02 from "./assets/conforto/CEACLIN_3.webp";
import confortoImg03 from "./assets/conforto/CEACLIN_4.webp";
import confortoImg04 from "./assets/conforto/CEACLIN_6.webp";

import bkAgendamento from "./assets/bk_agendamento.png";
import HomeUnidades from "./unidades";

import iso9001 from "../../assets/ISO_9001.png";
import dic_c from "../../assets/DIC-C.jpg";
import Footer from "../../components/footer";

export default function Home() {
    return (
        <>
            <Navbar />
            {/* Carousel - visível apenas em desktop */}
            <div id="carouselExampleFade" className="d-none d-lg-block carousel slide carousel-fade" style={{ marginTop: '80px' }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carouselImg01} className="d-block w-100" alt="Imagem 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={carouselImg02} className="d-block w-100" alt="Imagem 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={carouselImg03} className="d-block w-100" alt="Imagem 3" />
                    </div>
                    <div className="carousel-item">
                        <img src={carouselImg04} className="d-block w-100" alt="Imagem 4" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Acesse seu resultado - Visível apenas em mobile */}
            <div className="container-fluid d-lg-none text-center rounded" style={{
                backgroundImage: 'url(https://static.vecteezy.com/ti/vetor-gratis/t1/20544792-de-fundo-gradiente-ondas-laranja-composicao-de-formas-de-gradiente-fluido-vetor.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '50px 0',
                overflowX: 'hidden'
            }}>
                <div className="row row-cols-1 p-2" style={{ marginTop: '50px' }}>
                    <div className="col">
                        <div className="card h-100 border-0 text-white shadow-lg py-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', borderRadius: '12px' }}>
                            <div className="card-body p-4">
                                <img src={Logo} className="bg-white rounded p-4 img-fluid mb-3" alt="Logo" style={{ maxHeight: '180px', objectFit: 'contain' }} />
                                <p className="card-text mb-4 fs-5">Saúde certa, resultados precisos. Ceaclin, confiança que transforma vidas.</p>
                                <a href="https://resultados.ceaclin.com.br/matrixnet/wfrmLogin.aspx" target="_blank" rel="noopener noreferrer" className={`${styles.btnCustom} btn btn-lg btn-light mt-3 w-100`} style={{ fontWeight: 'bold' }}>Ver Resultados</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nossos Serviços */}
            <HomeServicos />

            {/* Agende Exame */}
            <div className={`${styles.parallaxSection} mt-5 mb-5`} style={{ backgroundImage: `url(${bkAgendamento})` }}>
                <div className="container mt-5 text-center d-flex align-items-center justify-content-center">
                    <div className="p-4 rounded" style={{ background: "rgba(255, 255, 255, 0.32)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
                        <h1 className="mb-4">Agende Seu Exame</h1>
                        <p className="m-0"><b>Agora ficou ainda mais fácil cuidar da sua saúde.</b></p>
                        <p>Agende seu exame online, de forma prática e rápida, sem sair do conforto da sua casa.</p>
                        <a href="https://www.google.com" className="btn botaoPadrao">Agendar exame</a>
                    </div>
                </div>
            </div>

            {/* Conforto e Qualidade */}
            <div className="container mt-5">
                <h1 className="text-center mb-4" data-aos="fade-up" data-aos-duration="1500">Conforto e Qualidade</h1>
                <div className="row align-items-center d-flex flex-wrap justify-content-center gap-5">
                    {/* Imagens Pequenas */}
                    <div data-aos="fade-right" data-aos-duration="1500" className="col-md-4 d-flex flex-wrap justify-content-center gap-2">
                        <img src={confortoImg01} alt="Imagem 1" className={styles.smallImg} />
                        <img src={confortoImg02} alt="Imagem 2" className={styles.smallImg} />
                        <img src={confortoImg03} alt="Imagem 3" className={styles.smallImg} />
                        <img src={confortoImg04} alt="Imagem 4" className={styles.smallImg} />
                    </div>

                    {/* Texto e Botão */}
                    <div data-aos="fade-left" data-aos-duration="1500" className="col-md-5 text-center text-md-start">
                        <p>
                            No Laboratório Ceaclin, cada detalhe é cuidadosamente planejado para proporcionar a melhor experiência aos nossos pacientes. Desde ambientes acolhedores até a agilidade no atendimento, priorizamos o seu conforto e bem-estar.
                        </p>
                        <ul className="list-unstyled">
                            <li>✅ Cuidado acolhedor para todas as idades.</li>
                            <li>✅ Espaços adaptados e conforto garantido.</li>
                            <li>✅ Exames com atenção especial para todos.</li>
                        </ul>
                        <a href="https://www.google.com" className="btn botaoPadrao">Agende agora mesmo</a>
                    </div>
                </div>
            </div>

            {/* Nossas Unidades */}
            <HomeUnidades />

            {/* Certificação */}
            <div data-aos="fade-up" data-aos-duration="4000" className="container mt-5 d-flex flex-column align-items-center justify-content-center">
                <div className={`${styles.efeitoInner} text-center p-3 rounded m-0 auto d-flex align-items-center justify-content-center flex-wrap`}>
                    <div className="w-100">
                        <h1 className="text-center mb-4">Uma empresa certificada</h1>
                    </div>
                    <div className="w-100 w-md-50">
                        <p>
                            No Laboratório Ceaclin, cada detalhe foi cuidadosamente planejado para proporcionar a melhor experiência aos nossos pacientes. Desde ambientes acolhedores até a agilidade no atendimento, garantimos conforto e bem-estar em cada etapa.
                        </p>
                        <p>
                            Somos certificados pelo DIC-C e ISO 9001, assegurando a qualidade e excelência em nossos serviços laboratoriais.
                        </p>
                    </div>
                    <div className="w-100">
                        <iframe
                            className="rounded m-3"
                            width="auto"
                            height="auto"
                            src="https://www.youtube.com/embed/6stlCkUDG_s?si=IGve3wUAulFFmgwb"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="d-flex align-items-center justify-content-center gap-5 mt-3 w-100 flex-wrap">
                        <div>
                            <img src={dic_c} alt="Certificação DIC-C" style={{ height: '120px' }} className="mx-2" />
                        </div>
                        <div>
                            <img src={iso9001} alt="Certificação ISO 9001" style={{ height: '120px' }} className="mx-2" />
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}
