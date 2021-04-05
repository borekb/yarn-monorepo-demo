import NextImage from 'next/image';

const Image = ({ size }: { size: number }) => (
  <div>
    <NextImage
      loader={({ src }) => src} // custom loader to avoid `domains` in next.config.js
      src={`https://via.placeholder.com/${size}`}
      width={size}
      height={size}
      layout='fixed'
    />
  </div>
);

export default Image;
