// Rotas
import React from "react";
import Navbar from "../../components/navbar";
import styles from "./home.module.css";
import Logo from "../../assets/LOGOCEACLIN.png";
import carouselImg01 from "../../assets/carousel/1.png"
import carouselImg02 from "../../assets/carousel/2.png"
import carouselImg03 from "../../assets/carousel/3.png"
import carouselImg04 from "../../assets/carousel/4.png"

export default function Home() {
    return (
        <>
            <Navbar />
            {/* Carousel - visível apenas em desktop*/}
            <div id="carouselExampleFade" class="carousel slide carousel-fade" style={{ marginTop: '80px' }}>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={carouselImg01} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={carouselImg02} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={carouselImg03} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
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
                <div className="row row-cols-1 p-2 " style={{ marginTop: '50px' }}>
                    {/* Card 1 */}
                    <div className="col">
                        <div className="card h-100 border-0 text-white shadow-lg py-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', borderRadius: '12px' }}>
                            <div className="card-body p-4">
                                {/* Imagem dentro do card */}

                                <img src={Logo} className="bg-white rounded p-4 img-fluid mb-3" alt="Logo" style={{ maxHeight: '180px', objectFit: 'contain' }} />

                                {/* Texto dentro do card */}
                                <p className="card-text mb-4 fs-5">
                                    Saúde certa, resultados precisos. Ceaclin, confiança que transforma vidas.
                                </p>
                                {/* Botão dentro do card */}
                                <a href="https://resultados.ceaclin.com.br/matrixnet/wfrmLogin.aspx"
                                    target="_blank" rel="noopener noreferrer" className={`${styles.btnCustom} btn btn-lg btn-light mt-3 w-100`} style={{ fontWeight: 'bold' }}>
                                    Ver Resultados
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Nossos Serviços */}
            <div className="container mt-5" data-aos="fade-up">
                <h1 className="text-center mb-4">Nossos Serviços</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* Card 1 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg" className="card-img-top" alt="Card Image" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg" className="card-img-top" alt="Card Image" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg" className="card-img-top" alt="Card Image" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Agende Exame */}
            <div className="container mt-5" data-aos="fade-up">
                <h1 className="text-center mb-4">Agende Exame Sem Sair de Casa</h1>
                <div className="text-center">
                    <p>Agora ficou ainda mais fácil cuidar da sua saúde. Agende seu exame online, de forma prática e rápida, sem sair do conforto da sua casa.</p>
                    <a href="https://www.google.com" className="btn btn-primary">Saiba Mais</a>
                </div>
            </div>

            {/* Conforto e Qualidade */}
            <div className="container mt-5">
                <h1 className="text-center mb-4">Conforto e Qualidade</h1>
                <div className="text-center">
                    <p>No Laboratório São Rafael, cada detalhe foi pensado para oferecer a melhor experiência aos nossos pacientes. Desde ambientes acolhedores até a agilidade no atendimento, priorizamos o seu conforto e bem-estar.</p>
                    <ul className="list-unstyled">
                        <li>Cuidado acolhedor para todas as idades.</li>
                        <li>Espaços adaptados e conforto garantido.</li>
                        <li>Exames com atenção especial para idosos.</li>
                    </ul>
                    <a href="https://www.google.com" className="btn btn-primary">Agende agora mesmo</a>
                </div>
            </div>

            {/* Nossas Unidades */}
            <div className="container mt-5">
                <h1 className="text-center mb-4">Nossas Unidades</h1>
                <div className="text-center">
                    <p>Em nossas unidades, priorizamos a qualidade do atendimento e a experiência do paciente. Conheça as opções perto de você e agende seu atendimento.</p>
                    <a href="https://www.google.com" className="btn btn-primary">Agende agora mesmo</a>
                </div>
            </div>

            {/* Certificação */}
            <div className="container mt-5" data-aos="fade-up">
                <h1 className="text-center mb-4">Uma empresa amiga e certificada:</h1>
                <div className="text-center">
                    <img src="https://tecnotron.com.br/wp-content/uploads/2024/07/pngwing.com-11.png.webp" alt="Certificação 1" style={{ height: '150px' }} className="mx-2" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy_l6QfBomRB3ooQIhmQAnFCjMe-c726ONw&s" alt="Certificação 2" style={{ height: '150px' }} className="mx-2" />
                    <p>No Laboratório São Rafael, cada detalhe foi pensado para oferecer a melhor experiência aos nossos pacientes. Desde ambientes acolhedores até a agilidade no atendimento, priorizamos o seu conforto e bem-estar.</p>
                    <a href="https://www.google.com" className="btn btn-primary">Agende agora mesmo</a>
                </div>
            </div>
        </>
    );
}
