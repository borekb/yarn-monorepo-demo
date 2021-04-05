import React from 'react';
import { snakeCase } from '@demo/lib/utils';

function HomePage() {
  return (
    <div>
      Welcome to Next.js!
      <p>Using `snakeCase` from `lib`: {snakeCase('Lorem ipsum dolor sit amet')}</p>
    </div>
  );
}

export default HomePage;
