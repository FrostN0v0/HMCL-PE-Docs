import React from 'react';
import ReactAplayer from 'react-aplayer';

export default class App extends React.Component {
  // event binding example
  onPlay = () => {
    console.log('on play');
  };

  onPause = () => {
    console.log('on pause');
  };

  // example of access aplayer instance
  onInit = ap => {
    this.ap = ap;
  };

  render() {
    const props = {
      theme: '#F57F17',
      lrcType: 3,
      audio: [
        {
          name: 'Unlasting',
          artist: 'LiSA',
          url: 'https://adorable0v0.top/music/unlasting.mp3',
          cover: 'https://adorable0v0.top/api/image/37.jpg',
          lrc: 'https://adorable0v0.top/music/unlasting.lrc',
          theme: '#ebd0c2'
        }
      ]
    };

    return (
      <div>
        <ReactAplayer
          {...props}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
        {/* example of access aplayer instance API */}
        <button onClick={() => this.ap.toggle()}>toggle</button>
      </div>
    );
  }
}