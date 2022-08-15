import React, {Component} from "react";

class Gif extends Component {

constructor(props){
    super(props);
    this.state = {
        gif: ""
    }
}

apiCall (url, consecuencia) {
    fetch(url)
    .then (response => response.json())
    .then( data => consecuencia(data))
    .catch (error => console.log(error));
}
componentDidMount () {
    console.log("montado");
    this.traerGifNuevo()
}
traerGifNuevo() {
    this.apiCall ("https://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69&tag=&rating=g", this.mostrarGif)
    
}
mostrarGif = (data) => {
this.setState (
    {
        gif: data.data.images.downsized_large.url
    }
)
}

componentDidUpdate(){
    console.log("actualizado");
    alert ("Gif nuevo!")
}
render(){

    let contenido;

    if (this.state.gif === "") {
        contenido = <p>Cargando ...</p>
    }else {
        contenido = <img src= {this.state.gif} alt="img"></img>
    }

    return(
        <div className="contenidoGif">
            {contenido}
            <div className="contenidoGifGeneral">
            <button className="buttonGif" onClick={ ()=> this.traerGifNuevo() }>Random Gif!</button>
            </div>
        </div>
    )
}


}

export default Gif;
