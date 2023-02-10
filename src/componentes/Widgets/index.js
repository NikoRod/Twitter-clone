import React from 'react';

// ICONOS
import SearchIcon from '@mui/icons-material/Search';

// COMPONENTES
import { Widget, Header, DivIcon, DivContent } from './styled'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

export const Widgets = () => {
  return (
    <Widget>
        
      <Header>

        <DivIcon>

          <SearchIcon className="searchIcon" />
          <input
            placeholder='Buscar en Twitter'
          />

        </DivIcon>

      </Header>

      <DivContent>

        <h2>Qué está pasando</h2>

        <TwitterTweetEmbed
          tweetId={'933354946111705097'}
        />

        <TwitterTweetEmbed
          tweetId={'933354946111705097'}
        />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{height: 400}}
        />

        <TwitterShareButton
          url={'https://facebook.com/saurabhnemade'}
          options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
        />

      </DivContent>

    </Widget>
  )
}