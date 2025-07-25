import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureGrid />
      
      {/* CTA Section */}
      <section style={{ 
        padding: 'var(--space-20) 0', 
        background: 'var(--gray-50)',
        borderTop: '1px solid var(--gray-200)'
      }}>
        <div className="container">
          <Card 
            padding="xl" 
            shadow="xl"
            style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--secondary-50) 100%)',
              border: '1px solid var(--primary-200)',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <h2 style={{ 
              marginBottom: 'var(--space-6)',
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--gray-900)'
            }}>
              Ready to Take Control of Your Future?
            </h2>
            
            <p style={{ 
              fontSize: 'var(--font-size-xl)', 
              marginBottom: 'var(--space-8)', 
              color: 'var(--gray-600)',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              Join hundreds of family business heirs who have found their path to independence and fulfillment.
            </p>
            
            {/* Benefits list */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-4)',
              marginBottom: 'var(--space-8)',
              textAlign: 'left'
            }}>
              {[
                'Free self-assessment tools',
                'Expert guidance & coaching',
                'Confidential family mediation',
                'Proven transition strategies'
              ].map((benefit, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--gray-700)'
                }}>
                  <CheckCircle size={20} style={{ color: 'var(--success-500)', flexShrink: 0 }} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: 'var(--space-4)', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Button 
                as={Link} 
                to="/register" 
                size="lg"
                rightIcon={<ArrowRight size={20} />}
              >
                Start Free Account
              </Button>
              
              <Button 
                as={Link} 
                to="/mediation" 
                variant="secondary"
                size="lg"
              >
                Premium Services ($99/month)
              </Button>
            </div>
            
            <p style={{
              marginTop: 'var(--space-6)',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-500)'
            }}>
              No credit card required • Cancel anytime • 30-day money-back guarantee
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
