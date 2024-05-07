import React from "react";
import './style.css';
import Topo from "../../componentes/topo";
import Rodape from "../../componentes/rodape";

const Sabores = () => (
   <main>
      <Topo/>
         <section className="banner-sabores">
            <h1>NOSSOS SABORES</h1>
         </section>
         
         <section className="container-sabores">
            <h1>SABORES DE SORVETE</h1>
            <div>
               <div className="box-imagens-sorvete limitar-secao">
                  <div className="card-sorvete">
                  <img src={`${process.env.PUBLIC_URL}/Assets/sabor-oreo.png`} alt="sorvete-oreo" />
                  <h2>Sorvete de Oreo</h2>
                  <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                  </div>

                  <div className="card-sorvete">
                  <img src={`${process.env.PUBLIC_URL}/Assets/sabor-pistache.png`} alt="sorvete-pistache" />
                  <h2>Sorvete Pistache</h2>
                  <p>Cremoso sorvete sabor pistache com pedacinhos de semente</p>
                  </div>

                  <div className="card-sorvete">
                  <img src={`${process.env.PUBLIC_URL}/Assets/sabor-cookies-avela.png`} alt="sorvete-cookies" />
                  <h2>Sorvete Cookies & Avelâ</h2>
                  <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                  </div>

                  <div className="card-sorvete">
                  <img src={`${process.env.PUBLIC_URL}/Assets/sorbet-kiwi.png`} alt="sorvete-kiwi" />
                  <h2>Sorvete de Kiwi</h2>
                  <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                  </div>

                  <div className="card-sorvete">
                  <img src={`${process.env.PUBLIC_URL}/Assets/sorbet-morango.png`} alt="sorvete-morango" />
                  <h2>Sorvete de Morango</h2>
                  <p>Sorvete de morango gourmet. Tradicional e saboroso</p>
                  </div>

                  <div className="card-sorvete">
                  <img src={`${process.env.PUBLIC_URL}/Assets/sorbet-limao.png`} alt="sorvete-limao" />
                  <h2>Sorvete de Limão Siciliano</h2>
                  <p>O incrivel sorvete gourmet de limão siciliano vai te encantar</p>
                  </div>
               </div>

               </div>

         </section>
      <Rodape/>


   </main>
)
export default Sabores;