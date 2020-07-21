import React from 'react';
import styled from 'styled-components';
import '../styles/index.scss';
import { Mercury, Neptune, Venus, Earth, Mars, Jupiter, Saturn, Uranus } from '../constants';

const BASE_PERIOD   = 10;

// const BASE_DISTANCE = 5;
const MAX_DISTANCE  = 50;

const BASE_RADIUS   = 0.3;
const MAX_RADIUS    = 1.3;

const ORBIT_UNIT    = 'em'; 
const OBJECT_UNIT   = 'em'; 
const SUN_UNIT      = 'em'; 

export class SolarSystem extends React.Component {

    state = {
        width: 900,
        colored: true
    };

    getOrbitSize(distance: number): number {
        let ratio = Math.sqrt(distance / Neptune.DistanceFromSun);
        return ratio * MAX_DISTANCE;
    }

    getObjectSize(radius: number): number {
        let ratio = radius / Jupiter.Radius;
        return ratio * MAX_RADIUS + BASE_RADIUS;
    }

    getSunSize(): number {
        let mercuryOrbitSize = this.getOrbitSize(Mercury.DistanceFromSun);
        return mercuryOrbitSize / 1.5;
    }

    getOrbitStyles(lengthOfYear: number, distance: number, elevation: number) {
        return {
            animationDuration: `${BASE_PERIOD * lengthOfYear}s`,
            height: `${this.getOrbitSize(distance)}${ORBIT_UNIT}`,
            width: `${this.getOrbitSize(distance)}${ORBIT_UNIT}`,
            zIndex: elevation
        };
    }

    getObjectStyles(radius: number): any {
        return styled.div`
            &::before {
                background-color: ${(props: any) => props.colored ? '#6B93D6' : '#000'};
                width: ${this.getObjectSize(radius)}${OBJECT_UNIT};
                height: ${this.getObjectSize(radius)}${OBJECT_UNIT};
            }
        `;
    }

    getSunStyles(): any {
        return styled.div`
            &::before {
                background-color: orange;
                width: ${this.getSunSize()}${SUN_UNIT};
                height: ${this.getSunSize()}${SUN_UNIT};
            }
        `;
    }

    render() {
        const MercuryPlanet     = this.getObjectStyles(Mercury.Radius);
        const VenusPlanet       = this.getObjectStyles(Venus.Radius);
        const EarthPlanet       = this.getObjectStyles(Earth.Radius);
        const MarsPlanet        = this.getObjectStyles(Mars.Radius);
        const JupiterPlanet     = this.getObjectStyles(Jupiter.Radius);
        const SaturnPlanet      = this.getObjectStyles(Saturn.Radius);
        const UranusPlanet      = this.getObjectStyles(Uranus.Radius);
        const NeptunePlanet     = this.getObjectStyles(Neptune.Radius);

        const SunObject = this.getSunStyles();

        return (
            <div className="solar-system" style={{
                fontSize: this.state.width / MAX_DISTANCE,
                width: this.state.width,
                height: this.state.width
            }}>
                <div className='orbit sun'>
                    <SunObject className='object' />
                </div>

                <div className='orbit mercury' style={this.getOrbitStyles(Mercury.LengthOfYear, Mercury.DistanceFromSun, 90)}>
                    <MercuryPlanet className='object' />
                </div>

                <div className='orbit venus' style={this.getOrbitStyles(Venus.LengthOfYear, Venus.DistanceFromSun, 80)}>
                    <VenusPlanet className='object' />
                </div>

                <div className='orbit earth' style={this.getOrbitStyles(Earth.LengthOfYear, Earth.DistanceFromSun, 70)}>
                    <EarthPlanet className='object' colored={this.state.colored} />
                </div>

                <div className='orbit mars' style={this.getOrbitStyles(Mars.LengthOfYear, Mars.DistanceFromSun, 60)}>
                    <MarsPlanet className='object' />
                </div>

                <div className='orbit jupiter' style={this.getOrbitStyles(Jupiter.LengthOfYear, Jupiter.DistanceFromSun, 50)}>
                    <JupiterPlanet className='object' />
                </div>

                <div className='orbit saturn' style={this.getOrbitStyles(Saturn.LengthOfYear, Saturn.DistanceFromSun, 40)}>
                    <SaturnPlanet className='object' />
                </div>

                <div className='orbit uranus' style={this.getOrbitStyles(Uranus.LengthOfYear, Uranus.DistanceFromSun, 30)}>
                    <UranusPlanet className='object' />     
                </div>

                <div className='orbit neptune bg' style={this.getOrbitStyles(Neptune.LengthOfYear, Neptune.DistanceFromSun, 20)}>
                    <NeptunePlanet className='object' />
                </div>

                <div className="commands">
                    <input type="number" value={this.state.width} onInput={(val: any) => {
                        this.setState({ width: val.target.value });
                    }} />
                </div>
            </div>
        );
    }
}