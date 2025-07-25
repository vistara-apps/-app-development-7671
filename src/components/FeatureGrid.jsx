import React from 'react';
import { Target, TrendingUp, Users, MessageSquare, ArrowRight } from 'lucide-react';
import Card from './ui/Card';

const FeatureGrid = () => {
  const features = [
    {
      icon: <Target size={48} />,
      title: "Self-Assessment & Goal-Setting",
      description: "Discover your values, interests, and goals to create a meaningful path forward outside the family business.",
      benefits: ["Personal clarity", "Goal alignment", "Values discovery"],
      color: "var(--primary-500)"
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Transition Roadmapping",
      description: "Build comprehensive transition plans with financial projections, timelines, and strategic guidance.",
      benefits: ["Financial planning", "Timeline creation", "Risk assessment"],
      color: "var(--success-500)"
    }, 
    {
      icon: <MessageSquare size={48} />,
      title: "Family Mediation",
      description: "Access trained mediators to resolve conflicts and align your family on the transition plan.",
      benefits: ["Conflict resolution", "Family alignment", "Professional guidance"],
      color: "var(--secondary-500)"
    },
    {
      icon: <Users size={48} />,
      title: "Stakeholder Alignment",
      description: "Effectively communicate with business stakeholders and gain their support for your transition.",
      benefits: ["Stakeholder buy-in", "Communication tools", "Transition support"],
      color: "var(--warning-500)"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
          <h2>Everything You Need for a Successful Transition</h2>
          <p style={{ 
            fontSize: 'var(--font-size-xl)', 
            color: 'var(--gray-600)', 
            marginTop: 'var(--space-4)',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Our comprehensive platform provides all the tools and support you need to confidently transition from your family business.
          </p>
        </div>
        
        <div className="grid grid-2">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              hover
              shadow="lg"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ 
                color: feature.color, 
                marginBottom: 'var(--space-6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                background: `${feature.color}15`,
                borderRadius: 'var(--radius-xl)',
                margin: '0 auto var(--space-6) auto'
              }}>
                {feature.icon}
              </div>
              
              <Card.Title style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
                {feature.title}
              </Card.Title>
              
              <Card.Description style={{ 
                textAlign: 'center', 
                marginBottom: 'var(--space-6)',
                flex: 1
              }}>
                {feature.description}
              </Card.Description>
              
              <div style={{ marginTop: 'auto' }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-2)',
                  marginBottom: 'var(--space-6)'
                }}>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--gray-600)'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: feature.color,
                        flexShrink: 0
                      }} />
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-2)',
                  color: feature.color,
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-semibold)',
                  cursor: 'pointer',
                  padding: 'var(--space-2)',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all var(--transition-fast)'
                }}>
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
