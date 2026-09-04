import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Damian Basilio';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0b0b0c',
          color: '#ededef',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 30, color: '#9A6E4E', letterSpacing: 2 }}>
          damianbasilio.dev
        </div>
        <div style={{ fontSize: 78, marginTop: 24, lineHeight: 1.1 }}>
          Damian Basilio
        </div>
        <div style={{ fontSize: 34, marginTop: 24, color: '#8a8a94' }}>
          I build backends and I&apos;m learning how to break them.
        </div>
      </div>
    ),
    size,
  );
}
