import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Empower Your Future Beyond the Family Business</h1>
        <p>
          Find your path forward with coaching, courses, and mediation services designed 
          specifically for next-generation family members seeking independence and fulfillment.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: 'var(--space-4)', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: 'var(--space-8)'
        }}>
          <Button 
            as={Link} 
            to="/register" 
            size="xl"
            rightIcon={<ArrowRight size={20} />}
          >
            Start Your Journey Free
          </Button>
          
          <Button 
            as={Link} 
            to="/mediation" 
            variant="secondary"
            size="xl"
          >
            Premium Services ($99/mo)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

