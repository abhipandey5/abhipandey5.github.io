import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

const professorMoments = [
  {
    src: '/Pictures/IMG-20250105-WA0000.jpg',
    alt: 'Photo with Prof. Sajal K Das',
    title: 'Prof. Sajal K Das',
    detail: 'Moment with two legendary profs. Prof. Ashok Kumar Das (Left), Prof. Sajal K Das (Middle).',
  },
  {
    src: '/Pictures/IMG-20250304-WA0027.jpg',
    alt: 'Photo with Prof. Elisa Bertino',
    title: 'Prof. Elisa Bertino',
    detail: 'A memorable interaction with a leading academician in cybersecurity and data science.',
  },
  {
    src: '/Pictures/PXL_20250304_094841305.MP.jpg',
    alt: 'Photo with Prof. Elisa Bertino in Norway',
    title: 'Prof. Elisa Bertino',
    detail: 'Academic exploration, international exposure, and a lasting research experience during her visit to IIIT-H.',
  },
  {
    src: '/Pictures/Picsart_25-11-19_22-34-58-819.jpg',
    alt: 'Roaming around Kongsberg in Norway',
    title: 'Kongsberg, Norway',
    detail: 'Exploring the scenic streets and local atmosphere during my Norway visit.',
  },
  {
    src: '/Pictures/Picsart_25-12-06_19-24-12-601.jpg',
    alt: 'Visit to Oslo in Norway',
    title: 'Oslo, Norway',
    detail: 'A city-side walk and cultural exploration during my international academic visit.',
  },
  {
    src: '/Pictures/WhatsApp Image 2026-08-24 at 1.10.21 AM.jpeg',
    alt: 'Portrait with professor',
    title: 'Academic Exchange',
    detail: 'A meaningful discussion captured during a key academic exchange program.',
  },
  {
    src: '/Pictures/WhatsApp Image 2026-08-24 at 1.10.22 AM (2).jpeg',
    alt: 'Professor and student photo',
    title: 'Academic Collaboration',
    detail: 'Shared ideas, mentorship, and inspiration from world-class academia.',
  },

];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// Portraits"
          title="Academic Memories"
          subtitle="Moments with distinguished professors, scholarly collaborations, and my international academic journey, including visits and conversations that continue to inspire my research."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {professorMoments.map((photo, index) => (
            <ScrollReveal key={photo.src} delay={index * 0.08}>
              <figure className="group overflow-hidden rounded-2xl border border-border bg-bg-card shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-1">
                <div className="aspect-[4/5] overflow-hidden bg-bg-secondary">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-lavender mb-2">
                    {photo.title.includes('Norway') ? 'Research Visit' : 'Academic Memory'}
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">{photo.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{photo.detail}</p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
