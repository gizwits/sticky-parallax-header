import React from 'react';
import { ImageBackground, Animated, Image } from 'react-native';
import styles from './HeaderBackgroundImage.styles';

const { createAnimatedComponent } = Animated;

const HeaderBackgroundImage = (props) => {
  const { backgroundHeight, backgroundImage, background } = props;
  const AnimatedImageBackground = createAnimatedComponent(ImageBackground);

  return (
    <AnimatedImageBackground
      style={[
        styles.headerStyle,
        {
          height: backgroundHeight,
        },
      ]}
      source={backgroundImage}>
      {background}
    </AnimatedImageBackground>
  );
};


const headerImagesAreEqual = (prevProps, props) =>
  prevProps.backgroundImage.uri === props.backgroundImage.uri &&
  prevProps.backgroundHeight === props.backgroundHeight &&
  prevProps.background === props.background;

const MemoHeaderBackgroundImage = React.memo(HeaderBackgroundImage, headerImagesAreEqual);

export default MemoHeaderBackgroundImage;
