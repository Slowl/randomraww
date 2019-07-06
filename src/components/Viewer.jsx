import React from 'react'
import styled from 'styled-components'
import Video from './Video'
import Img from './Img'

const ViewerContainer = styled.div`
  background-color: #222222;
  max-width: 80%;
  margin: auto;
  border-radius: 15px;
  display: flex;
  justify-content: center;
`

const MediaContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    padding: .5em;
    width: auto;
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

  return (
    <ViewerContainer>
      {/* handle reddit vids */}
      {rawData && data.domain==="v.redd.it" && (
        <span>
          {data.media ? (
            <MediaContainer>
              <Video
                widht={1280}
                height={720}
                src={data.media.reddit_video.fallback_url}
              />
            </MediaContainer> ) : (
              <MediaContainer>
                <Video
                  widht={1280}
                  height={720}
                  src={data.crosspost_parent_list[0].media.fallback_url}
                />
              </MediaContainer>
            )
          }
        </span>

      )}

      {/* handle reddit img */}
      {rawData && data.domain==="i.redd.it" && (
        <div>
          <MediaContainer>
            <Img src={data.url} />
          </MediaContainer>
        </div>
      )}

      {/* handle imgur */}
      {rawData && (data.domain==="i.imgur.com" || data.domain==="imgur.com") && (
        <div>
          <MediaContainer>
            {
              data.post_hint === "image" ? (
                <Img src={data.url} />
              ) : (
                <Video
                  widht={1280}
                  height={720}
                  src={convertedGif(data.url)}
                />
              )
            }
            </MediaContainer>
        </div>
      )}

      {rawData && data.domain==="imgur.com" && data.post_hint==="link" && (
        <div>
          <MediaContainer>
            {data.preview.images ? (
              <Img src={data.preview.images[0].source.url} />
            ) : (
              <Video
                widht={1280}
                height={720}
                src={convertedGif(data.preview.videos[0].source.url)}
              />
            )}
          </MediaContainer>
        </div>
      )}

      {/* handle gfycat */}
      {rawData && data.domain==="gfycat.com" && (
        <div>
          {data.media ? (
            <MediaContainer>
              <div className="gfycat-container" dangerouslySetInnerHTML={{__html: data.media.oembed.html}} />
            </MediaContainer>
          ) : (
            <MediaContainer>
              <Video
                widht={1280}
                height={720}
                src={data.preview.reddit_video_preview.fallback_url}
              />
            </MediaContainer>
          )}
        </div>

      )}

    </ViewerContainer>
  )
}

export default Viewer
