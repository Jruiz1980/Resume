import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Lightbulb, Cpu, Users, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

const VitaAccordion = () => {
  return (
    <Card className="shadow-lg">
      <CardContent className="p-4 md:p-6">
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          {/* Estudios */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-headline hover:no-underline">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span>Estudios</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-base">
              <div className="pl-9 space-y-4">
                <div>
                  <h4 className="font-semibold">Máster en Desarrollo de Software</h4>
                  <p className="text-sm text-muted-foreground">Universidad Tecnológica, 2018 - 2020</p>
                </div>
                <div>
                  <h4 className="font-semibold">Grado en Ingeniería Informática</h4>
                  <p className="text-sm text-muted-foreground">Universidad de la Ciudad, 2014 - 2018</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Experiencia Laboral */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-headline hover:no-underline">
              <div className="flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-primary" />
                <span>Experiencia Laboral</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-base">
              <div className="pl-9 space-y-6">
                <div>
                  <h4 className="font-semibold">Desarrollador Frontend Senior</h4>
                  <p className="text-sm text-muted-foreground">Innovatech Solutions | 2020 - Presente</p>
                  <ul className="mt-2 list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li>Lideré el desarrollo de la nueva plataforma de e-commerce usando React y Next.js.</li>
                    <li>Mejoré el rendimiento del sitio web en un 40% mediante la optimización de activos y código.</li>
                    <li>Mentoría a desarrolladores junior del equipo.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Desarrollador Web Junior</h4>
                  <p className="text-sm text-muted-foreground">Digital Creations | 2018 - 2020</p>
                   <ul className="mt-2 list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li>Desarrollo y mantenimiento de sitios web para clientes usando HTML, CSS y JavaScript.</li>
                    <li>Colaboré en la migración de un sitio a un CMS moderno.</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Proyectos */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-headline hover:no-underline">
              <div className="flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-primary" />
                <span>Proyectos</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-base">
              <div className="pl-9 space-y-4">
                <div>
                  <h4 className="font-semibold">Sistema de Gestión de Tareas</h4>
                  <p className="text-sm text-muted-foreground">Una aplicación full-stack para organizar tareas personales y de equipo.</p>
                  <Link href="#" className="mt-2 inline-flex items-center gap-2 text-sm text-primary hover:underline">
                    <LinkIcon className="h-4 w-4" />
                    Ver en GitHub
                  </Link>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Habilidades Duras */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-headline hover:no-underline">
              <div className="flex items-center gap-3">
                <Cpu className="h-6 w-6 text-primary" />
                <span>Habilidades Duras</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-base">
              <div className="pl-9 flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'SQL', 'Git'].map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          {/* Habilidades Blandas */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-headline hover:no-underline">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <span>Habilidades Blandas</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-base">
              <div className="pl-9 flex flex-wrap gap-2">
                {['Comunicación', 'Trabajo en equipo', 'Resolución de problemas', 'Liderazgo', 'Adaptabilidad', 'Pensamiento crítico'].map(skill => (
                  <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default VitaAccordion;
