import React from 'react';
import { snakeCase } from '@demo/lib-utils/strings';
import Image from '@demo/lib-ui/Image';

function HomePage() {
  return (
    <div>
      Welcome to Next.js!
      <p>Using `snakeCase` from `lib-utils/strings`: {snakeCase('Lorem ipsum dolor sit amet')}</p>
      <p>Using `Image` from `lib-ui`:</p>
      <Image size={150} />
    </div>
  );
}

export default HomePage;
