import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Shield } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: 'var(--space-2)',
          marginBottom: 'var(--space-6)',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-1)',
            background: 'rgba(255, 255, 255, 0.2)',
            padding: 'var(--space-2) var(--space-4)',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)'
          }}>
            <Star size={16} fill="currentColor" />
            <span>Trusted by 500+ family business heirs</span>
          </div>
        </div>
        
        <h1 style={{ position: 'relative', zIndex: 1 }}>
          Empower Your Future Beyond the Family Business
        </h1>
        
        <p style={{ position: 'relative', zIndex: 1 }}>
          Find your path forward with coaching, courses, and mediation services designed 
          specifically for next-generation family members seeking independence and fulfillment.
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: 'var(--space-4)', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1
        }}>
          <Button 
            as={Link} 
            to="/register" 
            size="xl"
            rightIcon={<ArrowRight size={20} />}
            style={{ 
              background: 'white',
              color: 'var(--primary-600)',
              boxShadow: 'var(--shadow-xl)'
            }}
          >
            Start Your Journey Free
          </Button>
          
          <Button 
            as={Link} 
            to="/mediation" 
            variant="outline"
            size="xl"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            Premium Services ($99/mo)
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'var(--space-8)',
          marginTop: 'var(--space-12)',
          opacity: 0.8,
          fontSize: 'var(--font-size-sm)',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Users size={16} />
            <span>500+ Families Served</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Shield size={16} />
            <span>Confidential & Secure</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Star size={16} fill="currentColor" />
            <span>4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
