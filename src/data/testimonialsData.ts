// src/data/testimonialsData.ts

export type Testimonial = {
  id: string;
  name: string;
  title: string;
  text: string;
  photos: string[];
  instagram?: string;
};

export const testimonials: Record<"es" | "en", Testimonial[]> = {
  es: [
    {
      id: "claudio",
      name: 'Claudio "El Papu" Butch',
      title: "testimonial.claudio.title",
      text: "testimonial.claudio.text",
      photos: [
        "/images/testimonios/papu1.jpg",
        "/images/testimonios/papu2.jpg",
        "/images/testimonios/papu3.jpg",
      ],
      instagram: "https://www.instagram.com/claudiobucht_el_papu?igsh=MTJxZ256YW4xMTN4bg==",
    },
    {
      id: "florencia",
      name: 'Florencia "Tigresa" Parras',
      title: "testimonial.florencia.title",
      text: "testimonial.florencia.text",
      photos: [
        "/images/testimonios/tigresa1.jpg",
        "/images/testimonios/tigresa2.jpg",
        "/images/testimonios/tigresa3.jpg",
      ],
      instagram: "https://www.instagram.com/florenciaparras_/",
    },
    {
      id: "franco",
      name: "Franco Drappo",
      title: "testimonial.franco.title",
      text: "testimonial.franco.text",
      photos: [
        "/images/testimonios/franco1.jpg",
        "/images/testimonios/franco2.jpg",
        "/images/testimonios/franco3.jpg",
      ],
      instagram: "https://www.instagram.com/franco_ds09/",
    },
    {
      id: "gustavo",
      name: "Gustavo Muñoz",
      title: "testimonial.gustavo.title",
      text: "testimonial.gustavo.text",
      photos: [
        "/images/testimonios/munoz1.jpg",
        "/images/testimonios/munoz2.jpg",
        "/images/testimonios/munoz3.jpg",
      ],
      instagram: "https://www.instagram.com/gusty_munoz_/",
    },
    {
      id: "irioni",
      name: "Agustín Irioni",
      title: "testimonial.irioni.title",
      text: "testimonial.irioni.text",
      photos: [
        "/images/testimonios/irioni1.jpg",
        "/images/testimonios/irioni2.jpg",
        "/images/testimonios/irioni3.jpg",
      ],
      instagram: "https://www.instagram.com/irioniagustinn/",
    },
    {
      id: "elizondo",
      name: "Fernando Elizondo",
      title: "testimonial.elizondo.title",
      text: "testimonial.elizondo.text",
      photos: [
        "/images/testimonios/elizondo1.jpg",
        "/images/testimonios/elizondo2.jpg",
        "/images/testimonios/elizondo3.jpg",
      ],
      instagram: "https://www.instagram.com/fernandoelizondo_ch/",
    },
    {
      id: "gastongiraudo",
      name: "Gastón Giraudo",
      title: "testimonial.gastongiraudo.title",
      text: "testimonial.gastongiraudo.text",
      photos: [],
      instagram: "https://www.instagram.com/gaston_23giraudo/",
    },
    {
      id: "nofri",
      name: "Nicolás Nofri",
      title: "testimonial.nofri.title",
      text: "testimonial.nofri.text",
      photos: [
        "/images/testimonios/nofri1.jpg",
        "/images/testimonios/nofri2.jpg",
        "/images/testimonios/nofri3.jpg"
      ],
      instagram: "https://www.instagram.com/nico_nofri/",
    },
    {
      id: "bordi",
      name: "Mauricio Borda",
      title: "testimonial.bordi.title",
      text: "testimonial.bordi.text",
      photos: [
        "/images/testimonios/bordi1.jpg",
        "/images/testimonios/bordi2.jpg",
        "/images/testimonios/bordi3.jpg",
      ],
      instagram: "https://www.instagram.com/mauri_e_borda/",
    },
    {
      id: "delfina",
      name: "Delfina Brautigam",
      title: "testimonial.delfina.title",
      text: "testimonial.delfina.text",
      photos: [
        "/images/testimonios/delfina1.jpg",
        "/images/testimonios/delfina2.jpg",
        "/images/testimonios/delfina3.jpg"
      ],
      instagram: "https://www.instagram.com/brautidelfi/",
    },
    {
      id: "macbeth",
      name: "Gonzalo Macbeth",
      title: "testimonial.macbeth.title",
      text: "testimonial.macbeth.text",
      photos: [
        "/images/testimonios/macbeth1.jpg",
        "/images/testimonios/macbeth2.jpg",
        "/images/testimonios/macbeth3.jpg"
      ],
      instagram: "https://www.instagram.com/dsteammacbeth/",
    }
  ],
  en: [
    {
      id: "claudio",
      name: 'Claudio "El Papu" Butch',
      title: "testimonial.claudio.title",
      text: "testimonial.claudio.text",
      photos: [
        "/images/testimonios/papu1.jpg",
        "/images/testimonios/papu2.jpg",
        "/images/testimonios/papu3.jpg",
      ],
      instagram: "https://www.instagram.com/claudiobucht_el_papu?igsh=MTJxZ256YW4xMTN4bg==",
    },
    {
      id: "florencia",
      name: 'Florencia "Tigresa" Parras',
      title: "testimonial.florencia.title",
      text: "testimonial.florencia.text",
      photos: [
        "/images/testimonios/tigresa1.jpg",
        "/images/testimonios/tigresa2.jpg",
        "/images/testimonios/tigresa3.jpg",
      ],
      instagram: "https://www.instagram.com/florenciaparras_/",
    },
    {
      id: "franco",
      name: "Franco Drappo",
      title: "testimonial.franco.title",
      text: "testimonial.franco.text",
      photos: [
        "/images/testimonios/franco1.jpg",
        "/images/testimonios/franco2.jpg",
        "/images/testimonios/franco3.jpg",
      ],
      instagram: "https://www.instagram.com/franco_ds09/",
    },
    {
      id: "gustavo",
      name: "Gustavo Muñoz",
      title: "testimonial.gustavo.title",
      text: "testimonial.gustavo.text",
      photos: [
        "/images/testimonios/munoz1.jpg",
        "/images/testimonios/munoz2.jpg",
        "/images/testimonios/munoz3.jpg",
      ],
      instagram: "https://www.instagram.com/gusty_munoz_/",
    },
    {
      id: "irioni",
      name: "Agustín Irioni",
      title: "testimonial.irioni.title",
      text: "testimonial.irioni.text",
      photos: [
        "/images/testimonios/irioni1.jpg",
        "/images/testimonios/irioni2.jpg",
        "/images/testimonios/irioni3.jpg",
      ],
      instagram: "https://www.instagram.com/irioniagustinn/",
    },
    {
      id: "elizondo",
      name: "Fernando Elizondo",
      title: "testimonial.elizondo.title",
      text: "testimonial.elizondo.text",
      photos: [
        "/images/testimonios/elizondo1.jpg",
        "/images/testimonios/elizondo2.jpg",
        "/images/testimonios/elizondo3.jpg",
      ],
      instagram: "https://www.instagram.com/fernandoelizondo_ch/",
    },
    {
      id: "gastongiraudo",
      name: "Gastón Giraudo",
      title: "testimonial.gastongiraudo.title",
      text: "testimonial.gastongiraudo.text",
      photos: [],
      instagram: "https://www.instagram.com/gaston_23giraudo/",
    },
    {
      id: "nofri",
      name: "Nicolás Nofri",
      title: "testimonial.nofri.title",
      text: "testimonial.nofri.text",
      photos: [
        "/images/testimonios/nofri1.jpg",
        "/images/testimonios/nofri2.jpg",
        "/images/testimonios/nofri3.jpg"
      ],
      instagram: "https://www.instagram.com/nico_nofri/",
    },
    {
      id: "bordi",
      name: "Mauricio Borda",
      title: "testimonial.bordi.title",
      text: "testimonial.bordi.text",
      photos: [
        "/images/testimonios/bordi1.jpg",
        "/images/testimonios/bordi2.jpg",
        "/images/testimonios/bordi3.jpg",
      ],
      instagram: "https://www.instagram.com/mauri_e_borda/",
    },
    {
      id: "delfina",
      name: "Delfina Brautigam",
      title: "testimonial.delfina.title",
      text: "testimonial.delfina.text",
      photos: [
        "/images/testimonios/delfina1.jpg",
        "/images/testimonios/delfina2.jpg",
        "/images/testimonios/delfina3.jpg"
      ],
      instagram: "https://www.instagram.com/brautidelfi/",
    },
    {
      id: "macbeth",
      name: "Gonzalo Macbeth",
      title: "testimonial.macbeth.title",
      text: "testimonial.macbeth.text",
      photos: [
        "/images/testimonios/macbeth1.jpg",
        "/images/testimonios/macbeth2.jpg",
        "/images/testimonios/macbeth3.jpg"
      ],
      instagram: "https://www.instagram.com/dsteammacbeth/",
    }
  ],
};