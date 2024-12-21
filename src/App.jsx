import './App.css';
import React, { useState } from "react";
let vacio = "";

function App() {
  const abrir_cerrar_menu = () => {
    let menu_desplegable = document.getElementById('menu');
    let boton_cerrar = document.getElementById('x');
    menu_desplegable.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_x');
  };

  return (
    <>
      <header>
        <div className='barras'>
          <button onClick={abrir_cerrar_menu} className='boton_menu' id='x'>☰</button>
        </div>
        <nav id='menu' className='desplegable'>
          <img src="/turbo.jpg" alt="Logo" className="logo" />
          <ul>
            <li><a href="#Inicio">Inicio</a></li>
            <li><a href="#Motores">Motores</a></li>
            <li><a href="#Transmisiones">Transmisiones</a></li>
            <li><a href="#Contactanos">Contactanos</a></li>
            <li><a href={vacio}>Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>

     <section id="Inicio">
      <h1>Inicio</h1>
      <p>Richi'es Motors es una página web dedicada a la compra y venta de motores y transmisiones de alto rendimiento ya sea para 
        ser utilizados como piezas de refacción para proyectos ya empezados o para la creación de piezas de ingenieria únicas
        solamente limitadas por la creatividad de las personas</p>
        <h1 id="Motores">Motores</h1>
        <div>
     <img src="vtec.jpg" className='vtec' />
     <div className='Motores'>
     <h3>Vtec_Honda</h3>
     <p>El famoso vtec de Honda utilizado en diversas generaciones de hondas civics y hondas accord para producir el máximo rendimiento 
      de los componenetes automotrices puede ser consegido en Richi'es Motors con envio gratis por oferta de navidad</p>
    </div>
    </div>
    <div>
      <img src="hemi.jpg" className='hemi' />
      <div className='Motores'>
        <h3>Hemi</h3>
        <p>El icónico motor hemi de 6.6 litros de dodge utilizado en su modelo Challenger desde el modelo base Hellcat hasta 
          la versión mas poderosa como lo es el Challenger Red eye es alimentado por un supercargador enorme que lo cataputla 
          hasta los 800 caballos de potencia puede ser tuyo desde Richi'es Motores con envio gratuito por navidad</p>
      </div>
    </div>
    <div>
      <img src="coyote5.0.jpg" className='coyote5.0'/>
      <div className='Motores'>
        <h3>Coyote5.0</h3>
        <p>El icónico motor coyote 5.0 utilizado en los modelos de Mustang de la marca Ford es uno de los motores más versátiles
          y adaptables de la industria automotriz, llevando décadas en la industria siendo uno de los más vendidos de la marca Ford,
          puede ser adquirido aqui por una oferta de navidad en Richi'es Motors.</p>
      </div>
    </div>
    </section>

    <section id="Transmisiones">
      <h1 className='Transmisiones'>Transmisiones</h1>
      <p>Las transmisiones disponibles en Richi'es Motors bienen en dos presentaciones clasicas como lo son las manuales y las
        automáticas además de las secuenciales.
      </p>
      <h1>Automáticas</h1>
      <div>
        <img src="automatica.jpg" className='automatica' />
        <div className='Transmision'>
          <h3>Cvt</h3>
          <p>La transmision automática cvt de las más famosas y confiables de la industria puede ser conseguido.
          La transmisión de variación continua (CVT) es un tipo de sistema de transmisión utilizado en vehículos que ofrece una 
          experiencia de conducción suave y eficiente en términos de consumo de combustible. A diferencia de las transmisiones 
          automáticas tradicionales que tienen un número fijo de marchas discretas, la CVT no tiene marchas predefinidas, en su lugar
          , utiliza un sistema de poleas y una correa o cadena para proporcionar una variación continua de la relación de cambio.
          </p>
        </div>
      </div>
    </section>

    <section>
       <h1>Manuales</h1>
      <div>
        <img src="manual.jpg" className='Manual' />
        <div className='Transmision'>
          <h3>Cvt</h3>
          <p>La transmisión manual es un sistema mecánico que permite al conductor controlar directamente las marchas del vehículo. 
            A través del uso del embrague y la palanca de cambios, el conductor selecciona la relación de engranajes adecuada para 
            optimizar el rendimiento del motor y la eficiencia del combustible.
          </p>
        </div>
      </div>
    </section>

    <section id="Contactanos">
  <h1>Contáctanos</h1>
  <div>
   <p>Comunicate con nosotros en caso de que presentes algún problema con la compra, entrega o solicitud de tus piezas automotrices
    o para consultas y presupuestos personalizados
    <td>Número de telefono: 6672659903
    Correo Electrónico: Richi'es Motores@gmail.com
    Instagram: Richi'es Motors.TB24</td></p>
  </div>
</section>

<footer className="footer">
        <div className="footer-content">
          <ul>
            <li><a href={vacio}>Términos de Servicio</a></li>
            <li><a href={vacio}>Política de Privacidad</a></li>
            <li><a href={vacio}>Soporte</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;