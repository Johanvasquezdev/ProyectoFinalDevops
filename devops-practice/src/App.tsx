import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Benefits from './components/Benefits';
import Pipeline from './components/Pipeline';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen bg-[var(--color-devops-bg)]">
      <Hero />
      <Benefits />
      <Timeline />
      <Pipeline />
      <Footer />
    </main>
  );
}

export default App;
