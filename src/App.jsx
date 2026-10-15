import './App.css'

const pilares = [
  {
    id: 'confidencialidad',
    nombre: 'Confidencialidad',
    emoji: '🔒',
    color: '#5b3fd1',
    suave: '#efeafd',
    pregunta: '¿Quién puede ver mi información?',
    idea: 'Solo las personas autorizadas pueden ver o leer la información. Nadie más.',
    analogia: 'Es como una carta dentro de un sobre cerrado: solo la persona a quien va dirigida puede leerla.',
    falla: 'Un desconocido lee tus mensajes, ve tus fotos privadas o consigue los datos de tu tarjeta.',
    proteccion: [
      ['Contraseñas fuertes', 'La llave de tu información. Mientras más larga y rara, mejor.'],
      ['Verificación en dos pasos', 'Además de la clave, el sistema te pide un código que llega a tu celular.'],
      ['Cifrado', 'Convierte tus datos en un “idioma secreto” que solo entiende quien tiene la llave.'],
    ],
  },
  {
    id: 'integridad',
    nombre: 'Integridad',
    emoji: '✅',
    color: '#0b8f7f',
    suave: '#e3f6f3',
    pregunta: '¿Mi información sigue siendo correcta?',
    idea: 'Los datos son exactamente los que deben ser. Nadie los cambió, los borró ni los alteró sin permiso.',
    analogia: 'Es como una receta de cocina: si alguien cambia “1 cucharadita de sal” por “1 taza”, el plato sale arruinado.',
    falla: 'Alguien cambia el monto de una transferencia, modifica tus notas del colegio o altera un documento.',
    proteccion: [
      ['Permisos de usuario', 'Solo algunas personas pueden modificar datos importantes.'],
      ['Firmas digitales', 'Funcionan como un sello de lacre: si el sello está roto, sabes que alguien lo tocó.'],
      ['Registros de cambios', 'El sistema anota quién cambió qué y cuándo.'],
    ],
  },
  {
    id: 'disponibilidad',
    nombre: 'Disponibilidad',
    emoji: '🟢',
    color: '#c77a00',
    suave: '#fff3dc',
    pregunta: '¿Puedo usar mi información cuando la necesito?',
    idea: 'La información y los servicios funcionan y están listos cada vez que los necesitas.',
    analogia: 'Es como una tienda: de nada sirve tener productos excelentes si la puerta está cerrada cuando llegas.',
    falla: 'La página del banco no abre, pierdes tus archivos o un ataque deja un servicio sin funcionar por horas.',
    proteccion: [
      ['Copias de seguridad', 'Una copia extra de tus datos guardada en otro lugar, por si pasa algo.'],
      ['Energía y equipos de respaldo', 'Si se corta la luz o se rompe un equipo, otro toma su lugar.'],
      ['Defensa contra ataques', 'Programas que detectan y frenan intentos de “tapar la puerta” con tráfico falso.'],
    ],
  },
]

const banco = [
  ['Confidencialidad', '#5b3fd1', 'Solo tú puedes ver cuánto dinero tienes.'],
  ['Integridad', '#0b8f7f', 'Si depositas $100, tu saldo sube exactamente $100.'],
  ['Disponibilidad', '#c77a00', 'Puedes entrar a tu cuenta a cualquier hora.'],
]

function Triangulo() {
  return (
    <svg className="triangulo" viewBox="0 0 340 310" role="img" aria-label="Triángulo con los tres pilares: confidencialidad, integridad y disponibilidad">
      <polygon points="170,60 50,250 290,250" fill="#ffffff" stroke="#14213d" strokeWidth="3" strokeLinejoin="round" />
      <text x="170" y="170" textAnchor="middle" className="tri-centro">Información</text>
      <text x="170" y="192" textAnchor="middle" className="tri-centro">protegida</text>

      <circle cx="170" cy="60" r="30" fill="#5b3fd1" />
      <text x="170" y="70" textAnchor="middle" fontSize="28">🔒</text>
      <text x="170" y="16" textAnchor="middle" className="tri-etiqueta">Confidencialidad</text>

      <circle cx="50" cy="250" r="30" fill="#0b8f7f" />
      <text x="50" y="260" textAnchor="middle" fontSize="28">✅</text>
      <text x="50" y="299" textAnchor="middle" className="tri-etiqueta">Integridad</text>

      <circle cx="290" cy="250" r="30" fill="#c77a00" />
      <text x="290" y="260" textAnchor="middle" fontSize="28">🟢</text>
      <text x="290" y="299" textAnchor="middle" className="tri-etiqueta">Disponibilidaddd</text>
    </svg>
  )
}

export default function App() {
  return (
    <div className="pagina">
      <header className="hero">
        <div className="hero-texto">
          <h1>La tríada de la ciberseguridad</h1>
          <p className="hero-sub">
            Tres ideas simples para entender cómo se protege la información en el mundo digital. No necesitas saber de computación.
          </p>
        </div>
        <Triangulo />
      </header>

      <section className="intro">
        <h2>Primero: ¿qué es “información”?</h2>
        <p>
          Tus fotos, tus mensajes, el dinero de tu cuenta del banco, tu historial médico, tus claves.
          Todo eso vive en celulares, computadores y servidores. Protegerlo significa cumplir <strong>tres promesas</strong>:
        </p>
        <ul className="promesas">
          {pilares.map((p) => (
            <li key={p.id} style={{ '--c': p.color, '--s': p.suave }}>
              <span>{p.emoji}</span> {p.pregunta}
            </li>
          ))}
        </ul>
      </section>

      {pilares.map((p) => (
        <section key={p.id} className="pilar" style={{ '--c': p.color, '--s': p.suave }}>
          <div className="pilar-cabecera">
            <span className="pilar-emoji">{p.emoji}</span>
            <div>
              <h2>{p.nombre}</h2>
              <p className="pilar-pregunta">{p.pregunta}</p>
            </div>
          </div>

          <p className="pilar-idea">{p.idea}</p>

          <div className="analogia">
            <strong>Piénsalo así:</strong> {p.analogia}
          </div>

          <details className="falla">
            <summary>¿Qué pasa si esto falla?</summary>
            <p>{p.falla}</p>
          </details>

          <h3>¿Cómo se protege?</h3>
          <ul className="protecciones">
            {p.proteccion.map(([titulo, texto]) => (
              <li key={titulo}>
                <strong>{titulo}</strong>
                <span>{texto}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="ejemplo">
        <h2>Todo junto: tu cuenta del banco por internet</h2>
        <p>Las tres promesas trabajan a la vez cada vez que usas la app de tu banco.</p>
        <div className="ejemplo-grid">
          {banco.map(([nombre, color, texto]) => (
            <div key={nombre} className="ejemplo-item" style={{ '--c': color }}>
              <strong>{nombre}</strong>
              <span>{texto}</span>
            </div>
          ))}
        </div>
        <p className="cierre">
          Si falla <strong>una sola</strong>, la seguridad completa se rompe. Por eso se llama <strong>tríada</strong>: las tres se necesitan.
        </p>
      </section>

      <footer className="pie">Infografía educativa sobre ciberseguridad</footer>
    </div>
  )
}
