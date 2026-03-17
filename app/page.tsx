import Image from "next/image";
import Button2 from "./_components/buttons/button2";

export default function Home() {
  return (
    <section className="flex flex-row min-h-screen pt-12 bg-primary-200 bg-[url(/assets/huellas-dos.png)] bg-contain">
      <article className="flex lg:basis-[40%] justify-center items-center">        
        <Image
          src="/assets/macota-seccion-uno.avif"
          alt="Mascotas tiernas"
          width={400}
          height={400}
        />            
      </article>            
      <article className="flex flex-col lg:basis-[60%] p-4">
        <h1 className="font-heading font-bold text-4xl text-start">Cambia la vida de los más pequeños.</h1>
        <p>Con tu ayuda puedes mejorar la vida de muchas mascotas que día a día llegan a nuestro refujio.</p>
        <Button2 url="https://gmail.com" text="¡Haz tu donación!"/>
      </article>
    </section>
  );
}
