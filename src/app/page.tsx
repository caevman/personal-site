// src/app/page.tsx
import { satoshi } from './fonts';

export default function Home() {
  return (
    <div className="hero">
      <div className="hero__description">
        <div className="font-satoshi font-bold hero__name">Cavan</div>
        <div className="font-satoshi font-bold hero__name">Gary</div>
      </div>
      <div className="personal-image-container">
        <img src="/headshot_gpt.png" />
      </div>
    </div>
  );
}
