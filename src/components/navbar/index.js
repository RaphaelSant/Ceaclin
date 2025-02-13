// Navbar
import React from "react";
import Logo from "./logo_nav.png";
import styles from './navbar.module.css';  // Importe o arquivo CSS


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container d-flex justify-content-between">
                {/* Imagem da logo */}
                <img src={Logo} className="me-3 img-fluid" alt="Logo" style={{ maxHeight: '30px' }} />

                {/* Botão de Resultados visível em mobile à esquerda e desktop à direita */}
                <a href="https://resultados.ceaclin.com.br/matrixnet/wfrmLogin.aspx" target="_blank" rel="noopener noreferrer" className={`${styles.resultadosBtn} d-flex d-lg-none`}>
                    Resultados
                </a>

                {/* Botão de menu (hambúrguer) - visível em mobile */}
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu colapsável */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://www.google.com">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle`} href="https://www.google.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sobre Nós
                            </a>
                            <ul className={`${styles.dropdownMenu} dropdown-menu`}>
                                <li><a className={`${styles.dropdownItem} dropdown-item`} href="https://www.google.com">Sobre Nós</a></li>
                                <li><a className={`${styles.dropdownItem} dropdown-item`} href="https://www.google.com">Nossas Unidades</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className={`${styles.dropdownItem} dropdown-item`} href="https://www.google.com">Fale Conosco</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Botão de Resultados visível apenas em desktop à direita */}
                <a href="https://resultados.ceaclin.com.br/matrixnet/wfrmLogin.aspx" target="_blank" rel="noopener noreferrer" className={`${styles.resultadosBtn} d-none d-lg-flex ms-auto`}>
                    Resultados
                </a>

            </div>
        </nav>

    );
}