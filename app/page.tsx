import Image from "next/image";
import { PiPawPrintThin } from "react-icons/pi";
import Button1 from "./_components/buttons/button1";
import Button3 from "./_components/buttons/button3";

export default function Home() {
  return (
    <section className="flex flex-wrap md:flex lg:flex items-center pt-10 bg-primary-200 bg-[url(/assets/huellas-dos.png)] bg-size-[120px] bg-no-repeat bg-position-[center_right_12rem] ">
      <div className="flex basis-5/5 md:basis-1/3 lg:basis-1/3 justify-center">
          <Image
            src="/assets/macota-seccion-uno.avif"
            alt="Mascotas tiernas"
            width={400}
            height={400}          
          />      
                    
      </div>            
      <div className="flex flex-wrap basis-5/5 md:basis-2/3 lg:basis-2/3 gap-4 md:gap-6 lg:gap-8 lg:items-start p-4 lg:p-10">
        <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-start">Encuentra a tu compañero de travesuras aquí.</h1>
        <p className="pr-8">Cambia la vida de los más pequeños. Con tu adopción puedes mejorar la vida de muchas mascotas que día a día llegan a nuestro refujio buscando un poco de cuidado, amor, respeto y sobre todo cariño.</p>
        <div className="flex gap-x-4">
          <Button1 url="/pets" text="¡Adopta ahora!" icon={<PiPawPrintThin />} />
          <Button3 url="https://www.facebook.com/ElRinconDeLasMascotas" text="Haz tu donación"/>
        </div>
      </div>
    </section>
    
    
  );
}
