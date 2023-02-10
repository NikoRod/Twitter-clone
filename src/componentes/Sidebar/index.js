import React from 'react'
import { Contenedor } from './styled'

//  ICONOS 
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

// COMPONENTES
import { IconOptions } from './IconOptions';



export const Sidebar = () => {
  return (
    <div>
        
        <Contenedor>

          <TwitterIcon className='twitter-logo' />

          <IconOptions active text="Inicio" Icon={HomeIcon} />
          <IconOptions text="Explorar" Icon={TagIcon} />
          <IconOptions text="Notificaciones" Icon={NotificationsNoneIcon} />
          <IconOptions text="Mensajes" Icon={MailOutlineIcon} />
          <IconOptions primary text="Guardados" Icon={BookmarkBorderIcon} />
          <IconOptions primary text="Listas" Icon={ListAltIcon} />
          <IconOptions primary text="Perfil" Icon={PermIdentityIcon} />
          <IconOptions primary text="Más opciones" Icon={MoreHorizIcon} />

          <Button variant='outlined' fullWidth>Twittear</Button>

        </Contenedor>

    </div>
  )
}