import React, { PureComponent } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

import './style.css';

export default class Video extends PureComponent {
  state = {
    expandView: false,
    url: this.props.url,
    playing: false,
    volume: 0.8,
    muted: false,
    playbackRate: 1.0,
    loop: false,
  }

  onPlay = () => {
    this.setState({ playing: true });
  }
  onPause = () => {
    this.setState({ playing: false });
  }
  onSeekMouseDown = () => {
    this.setState({ seeking: true });
  }
  onSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  }
  onProgress = (state) => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  }
  onEnded = () => {
    const expandView = false;
    this.setState({
      expandView,
      playing: this.state.loop,
    });
  }
  setPlaybackRate = (e) => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  }
  setVolume = (e) => {
    this.setState({ volume: parseFloat(e.target.value) });
  }
  load = (url) => {
    this.setState({ url });
  }
  playPause = () => {
    this.setState({ playing: !this.state.playing });
  }
  stop = () => {
    this.setState({ url: null, playing: false });
  }
  toggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  }
  ref = (player) => {
    this.player = player;
  }
  expandVideo = () => {
    let expandView = { ...this.state.expandView };

    if (!this.props.isMobile) { expandView = true; }

    this.setState({ expandView });

    setTimeout(() => {
      this.setState({
        playing: true,
      });
    }, 250);
  }
  renderLoadButton = (url, label) => (
    <button onClick={() => this.load(url)}>
      {label}
    </button>
  )

  render() {
    const {
      url, playing, volume, muted, loop, playbackRate,
    } = this.state;

    let videoClass = 'video';
    if (this.state.expandView) {
      videoClass = 'video full';
    }

    return (
      <section className={videoClass}>

        <div className="embed">
          <button onClick={this.expandVideo}>
            <img src={this.props.poster} alt="Play Video" />
          </button>

          <ReactPlayer
            ref={this.ref}
            className="react-player"
            width="100%"
            height="100%"
            url={url}
            playing={playing}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onEnded={this.onEnded}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
          />
        </div>
        <div className="copy">
          {this.props.children}
        </div>
      </section>
    );
  }
}

// Video.defaultProps = {
//   autoplay: false,
// };

Video.propTypes = {
  url: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
//   videoTitle: PropTypes.string.isRequired,
//   height: PropTypes.string.isRequired,
//   width: PropTypes.string.isRequired,
//   autoplay: PropTypes.bool,
};
