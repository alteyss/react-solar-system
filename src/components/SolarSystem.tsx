import React from 'react';
import styled from 'styled-components';
import '../styles/index.scss';
import { Mercury, Neptune, Venus, Earth, Mars, Jupiter, Saturn, Uranus } from '../constants';

const BASE_PERIOD   = 10;

const BASE_DISTANCE = 3.5;
const MAX_DISTANCE  = 52.5;

const BASE_RADIUS   = 0.5;
const MAX_RADIUS    = 1.25;

export class SolarSystem extends React.Component {

    getOrbitSize(distance: number): number {
        return Math.sqrt(distance / Neptune.DistanceFromSun) * MAX_DISTANCE + BASE_DISTANCE;
    }

    getObjectSize(radius: number): number {
        return (radius / Jupiter.Radius) * MAX_RADIUS + BASE_RADIUS;
    }

    getOrbitStyles(lengthOfYear: number, distance: number, zIndex: number) {
        return {
            animationDuration: `${BASE_PERIOD * lengthOfYear}s`,
            height: `${this.getOrbitSize(distance)}rem`,
            width: `${this.getOrbitSize(distance)}rem`,
            zIndex
        };
    }

    getObjectStyles(radius: number): any {
        return styled.div`
            &::before {
                background-color: #000;
                width: ${this.getObjectSize(radius)}rem;
                height: ${this.getObjectSize(radius)}rem;
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

        return (
            <div className="solar-system">
                <div className='orbit sun'>
                    <div className='object' />
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