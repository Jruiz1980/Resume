import VitaHeader from '@/components/vita-header';
import VitaAccordion from '@/components/vita-accordion';

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-body text-foreground">
      <div className="container mx-auto max-w-4xl p-4 py-8 md:p-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-primary font-headline">
          Interactive Vita
        </h1>
        <div className="space-y-8">
          <VitaHeader />
          <VitaAccordion />
        </div>
      </div>
    </main>
  );
}
