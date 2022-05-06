// Creamos un componente (react functional component)
const App = ()=><h1>Hola mundito</h1>;

// Envolvemos el nombre de nuestra función App en una etiqueta HTML <App></App>
ReactDOM.render(<App></App>, document.getElementById("root"));
// Elemento React Componente -> PascalCase -> Primera letra en mayúscula

// JSX -> JavaSCript Sintax EXtension

// Podremos escribir código similar a HTML en JavaScript, luego Babel se encargará de compilar ese JSX en llamadas React.createElement (JS) para la comprensión del navegador.


