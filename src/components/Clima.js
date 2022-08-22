import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import iconoMarcador from './pinVerde.PNG';

export default function Clima({resultado}){
    const {name, weather, main, wind, coord} = resultado;
       console.table(resultado);
        if(!name || !weather || !main || !wind) return null;
        const kelvin = 273.15;
        const urlIcono = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
        const alt = `Clima de ${name}`;

        const iconoViento =`fas fa-location-arrow`;
        const iconoVientoStyle = {
            transform: `rotate(${wind.deg}deg)`,
        };

        function  direccionViento(deg){
            if(deg>337.5) return 'Norte';
            if(deg>292.5) return 'Noroeste';
            if(deg>247.5) return 'Oeste';
            if(deg>202.5) return 'Suldoeste';
            if(deg>157.5) return 'Sul';
            if(deg>122.5) return 'Sudeste';
            if(deg>67.5)  return 'Oeste';
            if(deg>22.5) {return 'Nordeste';}
            return 'Norte';
        }
        
        let longitud=coord.lon;
        let latitud=coord.lat;
        
        const position = [latitud, longitud];

        const iconVerde = new L.Icon({
            iconUrl: iconoMarcador,         
            iconSize:     [40, 45],          
            shadowSize:   [50, 64],          
            iconAnchor:   [20, 40],          
            popupAnchor:  [0, -40]          
         });
               

 return(
     <div className="resultados">    
     <div className="container">
        <div class="container">
            <div class="row">
                <div class="col-sm" className='branco'>
                    <h2>Cidade: {name}<img src={urlIcono} alt={alt} className="responsive-img"/></h2>
                </div>
                <div class="col-sm">
                    <p className='branco'>
                        Atual: { (main.temp - kelvin).toFixed(2) } &deg;C<br/>
                        <i className="fas fa-temperature-high"></i> Max: {parseInt(main.temp_max - kelvin, 10)} &deg;C<br/>
                        <i className="fas fa-temperature-low"></i> Min: {parseInt(main.temp_min - kelvin, 10)} &deg;C
                    </p>
                </div>
                <div class="col-sm">            
                    <p className='branco'>                   
                        Humidade:&nbsp;{main.humidity}&nbsp;%<br/>
                        Pressão Atmosférica:&nbsp;{main.pressure}&nbsp;mbar<br/>
                        <i className="fa fa-wind"></i> Velocidade do Vento:&nbsp;{wind.speed}&nbsp;km/h<br/>
                        <i className={iconoViento} style={ iconoVientoStyle }></i> Direção do Vento:&nbsp;{direccionViento(wind.deg)}
                    </p>
                </div>
            </div>
            <div className="col s12 m6 l6 z-depth-3">              
                <Map  id="map" center={position} zoom={12}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={position} icon={iconVerde}>
                    <Popup>Cidade: {name}</Popup>
                    </Marker>
                </Map>           
            </div>
        </div>      
    </div>
    </div>
 )
}