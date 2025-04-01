
import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Star, 
  Code2, 
  Box, 
  MousePointerClick,
  CirclePlay,
  FileCode,
  Mail
} from "lucide-react";

const Index = () => {
  const companiesSectionRef = useRef<HTMLElement>(null);
  
  const scrollToCompanies = () => {
    companiesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24">
        {/* Background with star pattern */}
        <div className="absolute inset-0 z-0 star-pattern opacity-10"></div>
        
        {/* Animated circles - Kurzgesagt style */}
        <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-accent/20 blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Star size={16} className="text-secondary" />
              <span className="text-sm font-medium">Welcome to Numlink Group</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Creating the Future <br />
              <span className="text-primary">of Digital Creativity</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Numlink Group brings together innovative companies focused on animation, 
              software development, and creative technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="kurzgesagt-button bg-primary hover:bg-primary/90 text-white"
                onClick={scrollToCompanies}
              >
                Explore Our Companies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Blob art - Kurzgesagt style */}
          <div className="relative h-80 sm:h-96 md:h-[500px] max-w-5xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-card border-4 border-secondary/50 rounded-2xl w-full h-full max-w-4xl max-h-96 shadow-xl overflow-hidden p-8 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">The Numlink Collective</h2>
                  <p className="text-lg text-muted-foreground mb-6">Where technology meets creativity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Moved above Companies Section */}
      <section className="py-16">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need animation software, 3D visualization services, or
              a creative partner for your next project, we're here to help.
            </p>
            <div className="flex items-center justify-center gap-2 text-center">
              <Mail size={20} className="text-secondary" />
              <span className="text-lg font-medium">Contact: imaad5257@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section ref={companiesSectionRef} className="py-20 bg-card/50" id="companies">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Companies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Numlink Group consists of specialized companies, each focused on
              pushing the boundaries of their respective fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Apertas */}
            <Card className="kurzgesagt-card border-primary/30">
              <CardContent className="p-0">
                <div className="h-40 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
                  <Code2 size={60} className="text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-3 w-3 rounded-full bg-secondary"></div>
                    <h3 className="text-2xl font-bold">Apertas</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    A software development company specializing in animation tools
                    and creative software solutions.
                  </p>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <FileCode size={16} className="text-secondary" />
                    Featured Product
                  </h4>
                  <div className="bg-background p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MousePointerClick size={16} className="text-accent" />
                      <span className="font-bold">Qorpa2D</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      An advanced 2D animation software designed for professional
                      animators and studios.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Numlink Studios */}
            <Card className="kurzgesagt-card border-accent/30">
              <CardContent className="p-0">
                <div className="h-40 bg-gradient-to-r from-accent to-accent/80 flex items-center justify-center">
                  <Box size={60} className="text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-3 w-3 rounded-full bg-secondary"></div>
                    <h3 className="text-2xl font-bold">Numlink Studios</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    A 3D animation studio creating stunning visuals and animations
                    for films, games, and educational content.
                  </p>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <CirclePlay size={16} className="text-secondary" />
                    Recent Work
                  </h4>
                  <div className="bg-background p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star size={16} className="text-secondary" />
                      <span className="font-bold">3D Animation Services</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      High-quality 3D animations for scientific explanations,
                      product demonstrations, and creative storytelling.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Numlink Group</h3>
              <p className="text-muted-foreground text-sm">
                Creating the future of digital creativity
              </p>
            </div>
            <div className="flex gap-8">
              <div>
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Companies</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-sm hover:text-primary">Apertas</a></li>
                  <li><a href="#" className="text-sm hover:text-primary">Numlink Studios</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-muted-foreground">Contact</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-sm hover:text-primary">About Us</a></li>
                  <li><a href="mailto:imaad5257@gmail.com" className="text-sm hover:text-primary">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Numlink Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
