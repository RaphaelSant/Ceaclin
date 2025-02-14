// Rotas
import React from "react";
import Navbar from "../../components/navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src="https://img.freepik.com/vetores-gratis/fundo-de-curva-azul_53876-113112.jpg" className="d-block w-100" style={{ maxHeight: '500px' }} alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg" style={{ maxHeight: '500px' }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg" style={{ maxHeight: '500px' }} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Próximo</span>
                </button>
            </div>

            <div className="conteiner mt-3">
                <h1 className="text-center">Nossos Serviços</h1>

                <div className="d-flex justify-content-center align-items-center gap-4">

                    <div class="card" style={{ width: '18rem' }}>
                        <img src="https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://www.google.com" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div class="card" style={{ width: '18rem' }}>
                        <img src="https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://www.google.com" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div class="card" style={{ width: '18rem' }}>
                        <img src="https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://www.google.com" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="conteiner mt-3">
                <h1 className="text-center">Agende Exame Sem Sair de Casa</h1>

                <div className="d-flex justify-content-center align-items-center gap-4">

                    <p>Agora ficou ainda mais fácil cuidar da sua saúde. Agende seu exame online, de forma prática e rápida, sem sair do conforto da sua casa.</p>

                    <a href="https://www.google.com" class="btn btn-primary">Saiba Mais</a>

                </div>
            </div>

            <div className="conteiner mt-3">
                <h1 className="text-center">Conforto e Qualidade</h1>

                <div className="d-flex-column justify-content-center align-items-center gap-4">

                    <p>No Laboratório São Rafael, cada detalhe foi pensado para oferecer a melhor experiência aos nossos pacientes. Desde ambientes acolhedores até a agilidade no atendimento, priorizamos o seu conforto e bem-estar.</p>

                    <ul>
                        <li>Cuidado acolhedor para todas as idades.</li>
                        <li>Espaços adaptados e conforto garantido.</li>
                        <li>Exames com atenção especial para idosos.</li>
                    </ul>

                    <a href="https://www.google.com" class="btn btn-primary">Agende agora mesmo</a>

                </div>
            </div>

            <div className="conteiner mt-3">
                <h1 className="text-center">Nossas Unidades</h1>

                <div className="d-flex-column justify-content-center align-items-center gap-4">

                    <p>No Laboratório São Rafael, cada detalhe foi pensado para oferecer a melhor experiência aos nossos pacientes. Desde ambientes acolhedores até a agilidade no atendimento, priorizamos o seu conforto e bem-estar.</p>

                    <a href="https://www.google.com" class="btn btn-primary">Agende agora mesmo</a>

                </div>
            </div>

            <div className="conteiner mt-3">
                <h1 className="text-center">Uma empresa amiga e certificada:</h1>

                <div className="d-flex-column justify-content-center align-items-center gap-4">

                    <img src="https://tecnotron.com.br/wp-content/uploads/2024/07/pngwing.com-11.png.webp" alt="Imagem" style={{ height: '150px' }} />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy_l6QfBomRB3ooQIhmQAnFCjMe-c726ONw&s" alt="Imagem" style={{ height: '150px' }} />

                    <p>No Laboratório São Rafael, cada detalhe foi pensado para oferecer a melhor experiência aos nossos pacientes. Desde ambientes acolhedores até a agilidade no atendimento, priorizamos o seu conforto e bem-estar.</p>

                    <a href="https://www.google.com" class="btn btn-primary">Agende agora mesmo</a>

                </div>
            </div>
        </>
    );
}