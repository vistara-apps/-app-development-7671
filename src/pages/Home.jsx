import React from 'react';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Users, MessageSquare } from 'lucide-react';
import Hero from '../components/Hero';

const Home = () => {
  const features = [
    {
      icon: <Target size={48} />,
      title: "Self-Assessment & Goal-Setting",
      description: "Discover your values, interests, and goals to create a meaningful path forward outside the family business."
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Transition Roadmapping",
      description: "Build comprehensive transition plans with financial projections, timelines, and strategic guidance."
    }, 
    {
      icon: <MessageSquare size={48} />,
      title: "Family Mediation",
      description: "Access trained mediators to resolve conflicts and align your family on the transition plan."
    },
    {
      icon: <Users size={48} />,
      title: "Stakeholder Alignment",
      description: "Effectively communicate with business stakeholders and gain their support for your transition."
    }
  ];

  return (
    <div>
      <Hero />

      <section className="features">
        <div className="container">
          <h2>Everything You Need for a Successful Transition</h2>
          <div className="grid grid-2">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div style={{ color: '#667eea', marginBottom: '24px' }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: '24px' }}>Ready to Take Control of Your Future?</h2>
          <p style={{ fontSize: '18px', marginBottom: '40px', color: '#64748b' }}>
            Join hundreds of family business heirs who have found their path to independence and fulfillment.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/register" className="btn btn-primary">
              Start Free Account
            </Link>
            <Link to="/mediation" className="btn btn-secondary">
              Premium Services ($99/month)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
