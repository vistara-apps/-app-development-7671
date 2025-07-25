import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Target, TrendingUp, Users, MessageSquare, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  // Mock data - in a real app, this would come from an API
  const progress = {
    assessment: true,
    transitionPlan: false,
    mediation: false,
    stakeholderAlignment: false
  };

  const recentActivity = [
    { action: "Completed Self-Assessment", date: "2 days ago", type: "assessment" },
    { action: "Started Transition Plan", date: "1 week ago", type: "plan" },
    { action: "Joined FamilyForward", date: "2 weeks ago", type: "account" }
  ];

  return (
    <div className="container" style={{ paddingTop: '40px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1>Welcome back, {user.name}!</h1>
        <p style={{ color: '#64748b', fontSize: '18px' }}>
          Continue your journey towards independence from {user.familyBusinessRole} role.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="card mb-6">
        <h2 style={{ marginBottom: '24px' }}>Your Progress</h2>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${Object.values(progress).filter(Boolean).length * 25}%` }}
          ></div>
        </div>
        <p style={{ color: '#64748b', marginTop: '8px' }}>
          {Object.values(progress).filter(Boolean).length} of 4 steps completed
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-2 mb-6">
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Target color={progress.assessment ? '#10b981' : '#667eea'} size={24} />
            <h3>Self-Assessment</h3>
            {progress.assessment && <CheckCircle color="#10b981" size={20} />}
          </div>
          <p style={{ color: '#64748b', marginBottom: '20px' }}>
            {progress.assessment 
              ? "Assessment completed! Review your results anytime."
              : "Discover your values and goals for life after the family business."
            }
          </p>
          <Link 
            to="/assessment" 
            className={`btn ${progress.assessment ? 'btn-secondary' : 'btn-primary'}`}
          >
            {progress.assessment ? 'View Results' : 'Start Assessment'}
          </Link>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <TrendingUp color={progress.transitionPlan ? '#10b981' : '#667eea'} size={24} />
            <h3>Transition Plan</h3>
            {progress.transitionPlan && <CheckCircle color="#10b981" size={20} />}
          </div>
          <p style={{ color: '#64748b', marginBottom: '20px' }}>
            Create a comprehensive roadmap with timelines and financial projections.
          </p>
          <Link 
            to="/transition-plan" 
            className={`btn ${progress.transitionPlan ? 'btn-secondary' : 'btn-primary'}`}
          >
            {progress.transitionPlan ? 'Continue Plan' : 'Create Plan'}
          </Link>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <MessageSquare color={progress.mediation ? '#10b981' : '#667eea'} size={24} />
            <h3>Family Mediation</h3>
            {progress.mediation && <CheckCircle color="#10b981" size={20} />}
          </div>
          <p style={{ color: '#64748b', marginBottom: '20px' }}>
            Professional mediation to align your family on the transition plan.
          </p>
          <Link 
            to="/mediation" 
            className="btn btn-primary"
          >
            Schedule Session
          </Link>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Users color={progress.stakeholderAlignment ? '#10b981' : '#667eea'} size={24} />
            <h3>Stakeholder Alignment</h3>
            {progress.stakeholderAlignment && <CheckCircle color="#10b981" size={20} />}
          </div>
          <p style={{ color: '#64748b', marginBottom: '20px' }}>
            Communicate effectively with business stakeholders and gain their buy-in.
          </p>
          <Link 
            to="/stakeholder-alignment" 
            className="btn btn-primary"
          >
            Manage Stakeholders
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h2 style={{ marginBottom: '24px' }}>Recent Activity</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {recentActivity.map((activity, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px',
              background: '#f8fafc',
              borderRadius: '8px'
            }}>
              <span>{activity.action}</span>
              <span style={{ color: '#64748b', fontSize: '14px' }}>{activity.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;