import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center bg-primary-50">
      <article className="flex-wrap">
        <h1 className="font-heading font-bold text-4xl text-center">Hola mundo</h1>
        <Image
          src="/assets/mascotas.avif"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <hr/>
      </article>
      <article className="flex-wrap">
        <h1 className="font-heading font-bold text-4xl text-center">Hola mundo</h1>
        <Image
          src="/assets/mascotas.avif"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </article>
      

    </section>
  );
}
