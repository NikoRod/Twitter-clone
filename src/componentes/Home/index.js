import React, { useState, useEffect } from 'react';

// COMPONENTES

import { Container, Header } from './styled';
import TweetBox from './TweetBox';
import { Posts } from './Post';


export const Home = () => {

  return (
    <Container>
        
      {/* Header */}
      <Header>

        <h2>Inicio</h2>

      </Header>

      {/* TweetBox */}

      <TweetBox />


      <Posts 
        key="1"  
        name="Niko Rodriguez"
        username="NikRod04"
        verifield=""
        text="Buenas a todos. Soy Nikolas Rodriguez, front - end developer. Les dejo
              el link hacia mi github, donde podrán encontrar algunos de los proyectos
              que he relizado. https://github.com/NikoRod"
        avatar="https://media.licdn.com/dms/image/D4D03AQFLEmaTpkRO_w/profile-displayphoto-shrink_800_800/0/1673631216262?e=1681344000&v=beta&t=vxeD5a9B_ute4I9D-NmAjzxoAoy7topS7wJdu4_Ni_g"
        imagePost="https://kinsta.com/es/wp-content/uploads/sites/8/2018/05/qu%C3%A9-es-github-1.png"
        date="2h."
      />


      <Posts 
        key="2"  
        name="Bill Gates"
        username="BillGates"
        verifield=""
        text="I’m live on @Reddit now. Ask me anything: https://b-gat.es/3Xltt8H"
        avatar="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
        imagePost="https://pbs.twimg.com/media/FmN-YjVaEAENSMo?format=jpg&name=medium"
        date="4 feb."
      />


      <Posts 
        key="3"  
        name="Elon Musk"
        username="elonmusk"
        verifield=""
        text="🎯"
        avatar="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
        imagePost="https://pbs.twimg.com/media/Foaz7GYX0AU9unl?format=jpg&name=900x900"
        date="8 feb."
      />

      <Posts 
        key="4"  
        name="AFA"
        username="afa"
        verifield=""
        text="#BibliotecaAFA Ya está incorporando todo el material bibliográfico de la 
              gran conquista de nuestro glorioso fútbol argentino ⭐️🇦🇷"
        avatar="https://pbs.twimg.com/profile_images/1604559776297385991/UoGVbhBu_400x400.jpg"
        imagePost="https://pbs.twimg.com/media/FkXSk28XgCELjN2?format=jpg&name=large"
        date="18 dec."
      />

      <Posts 
        key="5"  
        name="PlayStation"
        username="PlayStation"
        verifield=""
        text="Cupid's taking aim at Craftworld 💘 
              Help spread the love with new costumes and emotes for Sackboy: 
              A Big Adventure, arriving on Valentine's Day."
        avatar="https://pbs.twimg.com/profile_images/1278183948279922690/ybnDHXn7_400x400.jpg"
        imagePost="https://pbs.twimg.com/media/FoiMjbtWYA0yOIo?format=jpg&name=medium"
        date="9 feb."
      />


    </Container>
  )
}



