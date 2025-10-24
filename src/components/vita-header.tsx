"use client";

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import Link from 'next/link';

const VitaHeader = () => {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-picture');

  return (
    <Card className="overflow-hidden shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-8 md:text-left">
          
          <div className="flex-shrink-0">
            {profileImage && (
              <Avatar className="h-32 w-32 border-4 border-primary/50 shadow-md md:h-36 md:w-36">
                <AvatarImage src={profileImage.imageUrl} alt="Juan Pérez" data-ai-hint={profileImage.imageHint} />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            )}
          </div>

          <div className="w-full flex-grow">
            <h2 className="text-4xl font-bold text-primary font-headline">Juan Pérez</h2>
            <p className="mt-1 text-lg text-muted-foreground">Estado Civil: Soltero</p>
            
            <Separator className="my-4" />
            
            <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:flex-wrap sm:justify-center md:items-start md:justify-start md:gap-x-6">
              <Link href="tel:+15551234567" className="flex items-center gap-2 text-foreground transition-colors hover:text-primary">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </Link>
              <Link href="mailto:juan.perez@example.com" className="flex items-center gap-2 text-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4 text-primary" />
                <span>juan.perez@example.com</span>
              </Link>
            </div>
            
            <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                      <Linkedin className="h-6 w-6" />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                      <Github className="h-6 w-6" />
                    </Link>
                </Button>
              </div>
              
              <Button variant="secondary" className="w-full md:w-auto" onClick={() => alert('Simulating PDF download...')}>
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VitaHeader;
