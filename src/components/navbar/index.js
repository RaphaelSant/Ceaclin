import React from "react";
import Logo from "./logo_nav.png";
import styles from './navbar.module.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary z-3" style={{ height: '80px' }}>
            <div className="container d-flex justify-content-between bg-body-tertiary text-center">
                {/* Imagem da logo */}
                <Link to="/">
                    <img src={Logo} className="me-3 img-fluid" alt="Logo" style={{ maxHeight: '30px' }} />
                </Link>

                {/* Botão de Resultados visível em mobile */}
                <a href="https://resultados.ceaclin.com.br/matrixnet/wfrmLogin.aspx"
                    target="_blank" rel="noopener noreferrer"
                    className={`${styles.resultadosBtn} d-flex d-lg-none`}>
                    Resultados
                </a>

                {/* Botão de menu (hambúrguer) */}
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu colapsável */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navContainer}`}>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLinkCustom}`} href="https://www.google.com">Exames</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLinkCustom}`} href="https://www.google.com">Unidades</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLinkCustom}`} href="https://www.google.com">Sobre Nós</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLinkCustom}`} href="https://www.google.com">Perguntas Frequentes</a>
                        </li>
                    </ul>
                </div>

                {/* Botão de Resultados visível apenas em desktop */}
                <a href="https://resultados.ceaclin.com.br/matrixnet/wfrmLogin.aspx"
                    target="_blank" rel="noopener noreferrer"
                    className={`${styles.resultadosBtn} d-none d-lg-flex ms-auto`}>
                    Resultados
                </a>
            </div>
        </nav>
    );
}
