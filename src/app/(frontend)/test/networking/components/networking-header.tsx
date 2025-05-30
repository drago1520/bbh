import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function NetworkingHeader() {
  return (
       <>
         <Image className="w-full h-40 object-cover" src='/networking.avif' alt="нетуъркинг събитие на BBH" width={1920} height={320} />
        <div className="my-8 flex flex-col items-center justify-center xl:my-12">
         <h1 className="scroll-m-20 text-2xl font-bold lg:text-4xl mb-2">Нетуъркинг</h1>
         <Breadcrumb>
           <BreadcrumbList>
             <BreadcrumbItem>
               <BreadcrumbLink href="/test/homepage">BBH</BreadcrumbLink>
             </BreadcrumbItem>
             <BreadcrumbSeparator />
             <BreadcrumbItem>
               <BreadcrumbLink href="/test/networking">Нетуъркинг</BreadcrumbLink>
             </BreadcrumbItem>
           </BreadcrumbList>
         </Breadcrumb>
        </div>
       </>
  );
}