import { BsInstagram, BsApple, BsTwitter, BsSpotify, BsYoutube } from 'react-icons/bs';

import "./SocialMedia.css"
import { useEffect } from 'react';

export function SocialMedia() {

  useEffect(() => {
    const svgs = document.querySelectorAll("svg"); 

    svgs.forEach((e) => {
      e.height.baseVal.valueAsString = "0.5em"
    })
  }, [])

  return (
    <section className="social-media">
        <a href="https://www.instagram.com/duki/" target='_blank'><BsInstagram/></a>
        <a href="https://music.apple.com/ar/artist/duki/408527217" target='_blank'><BsApple/></a>
        <a href="https://twitter.com/DukiSSJ " target='_blank'><BsTwitter/></a>
        <a href="https://open.spotify.com/artist/1bAftSH8umNcGZ0uyV7LMg" target='_blank'><BsSpotify/></a>
        <a href="https://www.youtube.com/channel/UCJUYcEdvnYFGajHBW0Nao3w" target='_blank'><BsYoutube/></a>
    </section>
  )
}

export default SocialMedia