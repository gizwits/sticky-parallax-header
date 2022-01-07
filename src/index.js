import React from 'react';
import { AvatarHeader, TabbedHeader, DetailsHeader } from './predefinedComponents';
import StickyParallaxHeader from './StickyParallaxHeader';

const index = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  switch (props.headerType) {
    case 'TabbedHeader':
      return <TabbedHeader ref={ref} {...props} />;
    case 'AvatarHeader':
      return <AvatarHeader ref={ref} {...props} />;
    case 'DetailsHeader':
      return <DetailsHeader ref={ref} {...props} />;
    default:
      return <StickyParallaxHeader ref={ref} {...props} />;
  }
});

export default index;
