import React from 'react'
import Paperz from '../assets/image/paperz.svg'
import Dorfus from '../assets/image/dorfus.svg'
import Martino from '../assets/image/martino.svg'
import Square from '../assets/image/square.svg'
import Gobona from '../assets/image/gobona.svg'

const Brand = () => {
  return (
    <section class="brand">
    <div class="brands">
        <img src={Paperz} alt="pitchure of paperz symbole"/>
        <img src={Dorfus} alt="pitchure of dorfus symbole"/>
        <img src={Martino} alt="pitchure of martino symbole"/>
        <img src={Square} alt="pitchure of square symbole"/>
        <img src={Gobona} alt="pitchure of gobona symbole"/>
    </div>
</section>
  )
}

export default Brand