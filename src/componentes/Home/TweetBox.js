import React, { useState, useEffect } from 'react';

// ICONOS
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// COMPONENTES
import { Tweetbox, Form, Div, Avatar, DivBox, } from './styled';
import { Button } from '@mui/material';


// CÓDIGO

export default function () {

  return (

    <Tweetbox>
        
        <Form>

            <Div>

                <Avatar src="https://media.licdn.com/dms/image/D4D03AQFLEmaTpkRO_w/profile-displayphoto-shrink_800_800/0/1673631216262?e=1681344000&v=beta&t=vxeD5a9B_ute4I9D-NmAjzxoAoy7topS7wJdu4_Ni_g" alt="User photo"/>

                <div className='columns'>
                    
                    <input 
                        text="text"
                        placeholder="¿Qué está pasando?"
                    />

                </div>

            </Div>

            <Div>

                <DivBox>

                    <ImageIcon />
                    <GifIcon />
                    <FormatListBulletedIcon />
                    <InsertEmoticonIcon />
                    <CalendarTodayIcon />
                    <LocationOnIcon />

                </DivBox>

                <Button type="submit">Twittear</Button>

            </Div>

        </Form>

    </Tweetbox>
  );
}
