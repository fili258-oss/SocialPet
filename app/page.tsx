import Image from "next/image";
import Button1 from "./_components/buttons/button1";
import Button3 from "./_components/buttons/button3";
import { GoArrowRight } from "react-icons/go";


export default function Home() {
  return (
    <section>
      <div className="flex flex-wrap md:flex lg:flex items-center pt-10 bg-primary-200 bg-[url(/assets/huellas-dos.png)] bg-size-[120px] bg-no-repeat bg-position-[center_right_12rem] ">
        <div className="flex basis-5/5 md:basis-1/3 lg:basis-1/3 justify-center">
            <Image            
              loading="eager"
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
            <Button1 url="/pets" text="¡Adopta ahora!" icon={<GoArrowRight />} />
            <Button3 url="https://www.facebook.com/ElRinconDeLasMascotas" text="Haz tu donación"/>
          </div>
        </div>
      </div> 
      <div className="bg-secondary-50 py-14 px-8">
        <article className="bg-white rounded p-4 mb-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-4xl text-center my-8">Busca tu mascota aquí</h2>
          <form action="">
            <div className="flex flex-wrap md:flex lg:flex items-center justify-center gap-4">
              <input className="border border-primary-500 rounded-md p-2" name="query" /> 
              <select className="border border-primary-500 rounded-md p-2" name="" id="">
                <option value="">Filtrar por raza</option>
                <option value="1">Minipinsher</option>
              </select> 
              <select className="border border-primary-500 rounded-md p-2" name="" id="">
                <option value="">Filtrar por edad</option>
                <option value="1">1 año</option>
              </select>
              <select className="border border-primary-500 rounded-md p-2" name="" id="">
                <option value="">Filtrar por Departamento</option>
                <option value="1">Nariño</option>
              </select>
              <select className="border border-primary-500 rounded-md p-2" name="" id="">
                <option value="">Filtrar por ciudad</option>
                <option value="1">Pasto</option>
              </select>
            </div>
            
          </form>
        </article>
        <article className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 grid-rows-2">
            <div className="bg-primary-100 p-4 rounded">Div 1</div>
            <div className="bg-primary-100 p-4 rounded">Div 2</div>
            <div className="bg-primary-100 p-4 rounded">Div 3</div>
            <div className="bg-primary-100 p-4 rounded">Div 4</div>
            <div className="bg-primary-100 p-4 rounded">Div 5</div>
            <div className="bg-primary-100 p-4 rounded">Div 6</div>
        </article>
      </div>     
      
    </section>
    
    
  );
}
