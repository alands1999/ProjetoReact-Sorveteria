import './style.css';

const Rodape = () => (
        <footer className='rodape'>

            <div className='container limitar-secao'>
                <img src={`${process.env.PUBLIC_URL}/Assets/logo.png`} alt="Logo" className='logo' /> 
                <div>
                    <h2>ENDEREÇO</h2>
                    <p>Av Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h2>CONTATO</h2>
                    <p>info@meusite.com</p>
                    <p>tel: (11) 3456-7890</p>
                </div>
                <div>
                    <h2>HORARIOS</h2>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>

                </div>
                
            </div>

            <div className='fim'><p>Gelateria. Orgulhosamente desenvolvido por Alan Dias</p></div>

        </footer>
);

export default Rodape;