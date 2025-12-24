// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="hero-container">
        <div className="hero-container__description">
        {/* <h1 className="font-bold">Cavan Gary</h1> */}
        <div className='font-satoshi font-bold hero-container__name'>
          Cavan Gary
        </div>

        </div>
        <div className="personal-image-container">
          <img src='/headshot_gpt.png'/>
        </div>
      </div>
    </main>
  );
}
