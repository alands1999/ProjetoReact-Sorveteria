import React from "react";
import './style.css';
import Topo from "../../componentes/topo";
import Rodape from "../../componentes/rodape";

const Sobre = () => (
   <main>
      <Topo/>
      <section className="banner-sobre">
         <h1>A GELATERIA</h1>
      </section>

      <section className="container-sobre limitar-secao">
         <div className="titulos-sobre">
         <h1>Sobre Nós</h1>
         <h4>Nós simplesmente amamos sorvete!</h4>
         </div>
         <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 como as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
         <p>Nossos clientes podem comprar sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco, iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
      </section>

      <section className="container-img-sobre">
         <img src={`${process.env.PUBLIC_URL}/Assets/sobre-image.jpg`} alt="pessoas-tomando-sorvete" />
         <img src={`${process.env.PUBLIC_URL}/Assets/sorveteria.jpg`} alt="sorveteria" />
      </section>

      <Rodape/>
   </main>
)
export default Sobre;