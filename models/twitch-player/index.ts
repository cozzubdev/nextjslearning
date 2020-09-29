import PropTypes, { InferProps } from 'prop-types';

const twitchEmbedPropTypes = {
  id: PropTypes.string,
  channel: PropTypes.string,
  collection: PropTypes.string,
  video: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  playsInline: PropTypes.bool,
  autoplay: PropTypes.bool,
  muted: PropTypes.bool,
  allowFullscreen: PropTypes.bool,
  time: PropTypes.string,
  theme: PropTypes.string,
  hideControls: PropTypes.bool,
  onEnded: PropTypes.func,
  onPause: PropTypes.func,
  onPlay: PropTypes.func,
  onPlaybackBlocked: PropTypes.func,
  onPlaying: PropTypes.func,
  onOffline: PropTypes.func,
  onOnline: PropTypes.func,
  onReady: PropTypes.func,
  parent: PropTypes.arrayOf(PropTypes.string),
  withChat: PropTypes.bool,
};

export type TwitchEmbedProps = InferProps<typeof twitchEmbedPropTypes>;
