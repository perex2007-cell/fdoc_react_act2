export default function AvisoInline() {
const estiloCaja = {
background: "#fff7e6",
border: "1px solid #facc15",
padding: "1rem",
borderRadius: "10px",
maxWidth: "320px",
};


const estiloTitulo = {
fontWeight: "bold",
marginBottom: "0.5rem",
};


return (
<div style={estiloCaja}>
<div style={estiloTitulo}>Aviso importante</div>
<p>Este componente usa estilos en línea para mayor rapidez.</p>
</div>
);
}