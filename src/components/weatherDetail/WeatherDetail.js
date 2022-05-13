import React, {useContext} from 'react';
import './WeatherDetail.css';
import {TempContext} from "../../context/TempProvider";
import iconMapper from "../../helpers/iconMapper";

function WeatherDetail({temp, type, description}) {

    const {kelvinToMetric} = useContext(TempContext);

    return (
        <section className="day-part">
      <span className="icon-wrapper">
          {iconMapper(type)}
      </span>
            <p className="description">{description}</p>
            <p>{kelvinToMetric(temp)}</p>
        </section>
    );
}

export default WeatherDetail;
