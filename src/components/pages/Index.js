import React from 'react'

//Components
import { Parallax } from '../index/Parallax'
import { AboutIndex } from '../index/AboutIndex'
import { ServiciosIndex } from '../index/ServiciosIndex'
import { Testimonios } from '../index/Testimonios'

export const Index = () => {
    return (
        <main className="main">
            <Parallax/>
            <AboutIndex/>
            <ServiciosIndex/>
            <Testimonios/>
        </main>
    )
}
