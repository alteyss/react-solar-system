import React from 'react';
import styled from 'styled-components';
import '../styles/index.scss';
import { Mercury, Neptune, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Sun } from '../constants';

const BASE_PERIOD   = 10;

const BASE_DISTANCE = 3.5;
const MAX_DISTANCE  = 52.5;

const BASE_RADIUS   = 0.5;
const MAX_RADIUS    = 1.25;

const ORBIT_UNIT    = 'px'; 
const OBJECT_UNIT   = 'rem'; 
const SUN_UNIT      = 'px'; 
const WIDTH         = 200;

export class SolarSystem extends React.Component {

    getOrbitSize(distance: number): number {
        let squareRatio = Math.sqrt(distance / Neptune.DistanceFromSun);
        // return Math.sqrt(distance / Neptune.DistanceFromSun) * MAX_DISTANCE + BASE_DISTANCE;
        return WIDTH * squareRatio;
    }

    getObjectSize(radius: number): number {
        return (radius / Jupiter.Radius) * MAX_RADIUS + BASE_RADIUS;
    }

    getSunSize(): number {
        let mercuryOrbitSize = this.getOrbitSize(Mercury.DistanceFromSun);
        return (mercuryOrbitSize / 2);
    }

    getOrbitStyles(lengthOfYear: number, distance: number, zIndex: number) {
        return {
            animationDuration: `${BASE_PERIOD * lengthOfYear}s`,
            height: `${this.getOrbitSize(distance)}${ORBIT_UNIT}`,
            width: `${this.getOrbitSize(distance)}${ORBIT_UNIT}`,
            zIndex
        };
    }

    getObjectStyles(radius: number): any {
        return styled.div`
            &::before {
                background-color: #000;
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
            <div className="solar-system">
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
                    <EarthPlanet className='object' />
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

                <div className='orbit neptune' style={this.getOrbitStyles(Neptune.LengthOfYear, Neptune.DistanceFromSun, 20)}>
                    <NeptunePlanet className='object' />
                </div>
            </div>
        );
    }
}