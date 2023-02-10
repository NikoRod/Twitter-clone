import React from 'react'

// ICONOS
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PublishIcon from '@mui/icons-material/Publish';

// COMPONENTES
import { Post, Avatar, PostBody, PostDescription, PostFooter, Images } from './styled'

export const Posts = ({ name, username, text, avatar, imagePost, date }) => {
  return (
    <Post>

        <div className='post_avatar'>

            <Avatar src={avatar} alt="User photo" />

        </div>

        <PostBody>

            <div>

                <div>

                    <h3>
                        {name} 
                        <span> 
                            <VerifiedIcon className='post_icon' />    
                            @{username} 
                        </span>
                        <span className='post_date'>
                            · {date}
                        </span>
                                              
                    </h3>

                    <PostDescription>

                        <p>{text}</p>

                    </PostDescription>

                </div>

                <Images src={imagePost} />

                <PostFooter>

                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <EqualizerIcon fontSize='small' />
                    <PublishIcon fontSize='small' />

                </PostFooter>

            </div>

        </PostBody>

    </Post>
  )
}
