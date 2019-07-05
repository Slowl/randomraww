import React from 'react'
import styled from 'styled-components'

const ViewerContainer = styled.div`
  margin: auto;
  background-color: #282828;

  img {

  }

  video {

  }
`

const Viewer = ({ rawData }) => {

  const data = rawData.data
  rawData && console.log(rawData.data)
  // check data sendend in the props and fix gifs/vids display
  const convertedGif = (gifvUrl) => {
    if (data.domain==="i.imgur.com") {
      const videoUrl = gifvUrl.replace(".gifv", ".mp4")
      return videoUrl
    }
  }

  //create media components
  //handle crosspost shit
  return (
    <ViewerContainer>

      {/* handle reddit vids */}
      {rawData && data.domain==="v.redd.it" && (
        <span>
          {data.media ? (
            <div>
              <div>{data.title}</div>
              <video
                key={data.media.reddit_video.fallback_url}
                width={data.media.reddit_video.width}
                height={data.media.reddit_video.height}
                controls
                preload="true"
                autoPlay="autoplay"
                loop="loop">
               <source src={data.media.reddit_video.fallback_url} type="video/mp4" />
              </video>
            </div> ) : (
              <div>
                <div>{data.title}</div>
                <video
                  key={data.crosspost_parent_list[0].media.fallback_url}
                  width={data.crosspost_parent_list[0].media.reddit_video.width}
                  height={data.crosspost_parent_list[0].media.reddit_video.height}
                  controls
                  preload="true"
                  autoPlay="autoplay"
                  loop="loop">
                 <source src={data.crosspost_parent_list[0].media.reddit_video.fallback_url} type="video/mp4" />
                </video>
              </div>
            )
          }
        </span>

      )}

      {/* handle reddit img */}
      {rawData && data.domain==="i.redd.it" && (
        <div>
          <div>{data.title}</div>
          <img key={data.url} src={rawData && data.url} alt="random reddit content" />
        </div>
      )}

      {/* handle imgur */}
      {rawData && data.domain==="i.imgur.com" && (
        <div>
          <div>{data.title}</div>
          {
            data.post_hint === "image" ? (
              <img key={data.url} src={data.url} alt="random reddit content" />
            ) : (
              <div>
                {data.domain==="imgur.com" ? (
                  <video
                    key={data.url}
                    width="320"
                    height="480"
                    controls
                    preload="true"
                    autoPlay="autoplay"
                    loop="loop">
                   <source src={convertedGif(data.url)} type="video/mp4" />
                  </video>
                ) : (
                  <video
                    key={data.url}
                    width="320"
                    height="480"
                    controls
                    preload="true"
                    autoPlay="autoplay"
                    loop="loop">
                   <source src={convertedGif(data.url)} type="video/mp4" />
                  </video>
                )}
              </div>
            )
          }
          </div>
      )}

      {rawData && data.domain==="imgur.com" && data.post_hint==="link" && (
        <div>
          <div>{data.title}</div>
          {data.preview.images ? (
            <img key={data.preview.images[0].source.url} src={data.preview.images[0].source.url} alt="random reddit content" />
          ) : (
            <video
              key={data.preview.videos[0].source.url}
              width={data.preview.videos[0].source.width}
              height={data.preview.videos[0].source.height}
              controls
              preload="true"
              autoPlay="autoplay"
              loop="loop">
             <source src={convertedGif(data.preview.videos[0].source.url)} type="video/mp4" />
            </video>
          )}
        </div>
      )}

      {/* handle gfycat */}
      {rawData && data.domain==="gfycat.com" && (
        <div>
          {data.media ? (
            <div>
              <div>{data.title}</div>
              <div dangerouslySetInnerHTML={{__html: data.media.oembed.html}} />
            </div>
          ) : (
            <div>
              <div>{data.title}</div>
              <video
                key={data.preview.reddit_video_preview.fallback_url}
                width={data.preview.reddit_video_preview.width}
                height={data.preview.reddit_video_preview.height}
                controls
                preload="true"
                autoPlay="autoplay"
                loop="loop">
               <source src={data.preview.reddit_video_preview.fallback_url} type="video/mp4" />
              </video>
            </div>
          )}
        </div>

      )}

    </ViewerContainer>
  )
}

export default Viewer
