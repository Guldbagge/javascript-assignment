import React from 'react'
import BackgroundWavyLines from '../../assets/image/background-wavy-lines.svg'


const Newsletter = () => {
  return (
    <section class="newsletter">
    <img class= "background-wavy-lines" src={BackgroundWavyLines} alt=""/>
    <div class="container">
        <h2>Get News Updates By Signup </h2>
        <form>
            <input type="text" placeholder="username@domain.com"/>
            <button class="btn-yellow">Subscribe <i class="fa-solid fa-arrow-up-right"></i></button>
        </form>
    </div>
</section>
  )
}

export default Newsletter