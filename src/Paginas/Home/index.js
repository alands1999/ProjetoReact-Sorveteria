import React from "react";
import Topo from "../../componentes/topo";
import Rodape from "../../componentes/rodape";
import './style.css';

const Home = () => (
   <>
    <Topo/>
      <main className="principal">

        <section className="banner">
            <div>
                <h1> SORVETE ARTESANAL</h1>
            </div>

        </section>

        <section className="sabores">
            <div className="container-imagem">
            <img src={`${process.env.PUBLIC_URL}/Assets/banner-sabores.jpg`} alt="Logo" />
            </div>
            <div className="container-texto">
                <div className="textos">
                    <div className="titulos">
                        <h2>NOSSOS SABORES</h2>
                        <span>Novos e deliciosos!</span>
                    </div>
                        <p>Sorvete bom é aquele que é feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                </div>
            </div>
            
        </section>

        <section className="eventos">
            <div className="container-texto">
                <div className="textos">
                    <div className="titulos">
                        <h2>NOSSOS EVENTOS</h2>
                        <span>Delicias com sorvete!</span>
                    </div>
                        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                </div>
            </div>

            <div className="container-imagem">
            <img src={`${process.env.PUBLIC_URL}/Assets/eventos-image.jpg`} alt="Logo" /> 
            </div>
            
        </section>

        <section className="sobre">
            <div className="container-imagem">
            <img src={`${process.env.PUBLIC_URL}/Assets/sobre-image.jpg`} alt="Logo" /> 
            </div>

            <div className="container-texto">
                <div className="textos">
                    <div className="titulos">
                        <h2>SOBRE NÓS</h2>
                        <span>Alegria em cada casquinha!</span>
                    </div>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p> 
               </div>
            </div>
        </section>
    </main>
    <Rodape/>
   </>
)

export default Home;