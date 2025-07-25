import React, { useState } from 'react';
import { Calendar, DollarSign, Users, Target } from 'lucide-react';

const TransitionPlan = () => {
  const [plan, setPlan] = useState({
    title: '',
    description: '',
    timelineMonths: 24,
    financialGoal: '',
    currentSavings: '',
    monthlyExpenses: '',
    stakeholders: []
  });

  const [showProjections, setShowProjections] = useState(false);

  const handleInputChange = (field, value) => {
    setPlan({
      ...plan,
      [field]: value
    });
  };

  const calculateProjections = () => {
    const monthly = parseFloat(plan.monthlyExpenses) || 0;
    const current = parseFloat(plan.currentSavings) || 0;
    const goal = parseFloat(plan.financialGoal) || 0;
    const months = parseInt(plan.timelineMonths) || 24;

    const totalNeeded = monthly * 12; // Annual expenses
    const emergencyFund = monthly * 6; // 6 months emergency fund
    const totalTarget = totalNeeded + emergencyFund;
    const monthlyRequired = Math.max(0, (totalTarget - current) / months);

    return {
      totalTarget,
      monthlyRequired,
      emergencyFund,
      annualExpenses: totalNeeded,
      currentSavings: current
    };
  };

  const milestones = [
    { month: 6, title: "Complete Skills Assessment", description: "Identify transferable skills and areas for development" },
    { month: 12, title: "Build Emergency Fund", description: "Accumulate 6 months of living expenses" },
    { month: 18, title: "Network & Explore", description: "Build connections in target industries" },
    { month: 24, title: "Execute Transition", description: "Formally leave family business or transition role" }
  ];

  return (
    <div className="container">
      <div style={{ marginBottom: '40px' }}>
        <h1>Transition Roadmap</h1>
        <p style={{ color: '#64748b', fontSize: '18px' }}>
          Create a comprehensive plan for your transition with timelines and financial projections.
        </p>
      </div>

      {/* Plan Overview */}
      <div className="card mb-6">
        <h2 style={{ marginBottom: '24px' }}>Plan Overview</h2>
        
        <div className="form-group">
          <label>Plan Title</label>
          <input
            type="text"
            value={plan.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="e.g., Transition to Impact Investment Career"
          />
        </div>

        <div className="form-group">
          <label>Plan Description</label>
          <textarea
            value={plan.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Describe your vision for life after the family business..."
            rows={4}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div className="form-group">
            <label>Timeline (Months)</label>
            <select
              value={plan.timelineMonths}
              onChange={(e) => handleInputChange('timelineMonths', e.target.value)}
            >
              <option value={12}>12 months</option>
              <option value={18}>18 months</option>
              <option value={24}>24 months</option>
              <option value={36}>36 months</option>
            </select>
          </div>

          <div className="form-group">
            <label>Financial Goal ($)</label>
            <input
              type="number"
              value={plan.financialGoal}
              onChange={(e) => handleInputChange('financialGoal', e.target.value)}
              placeholder="500000"
            />
          </div>

          <div className="form-group">
            <label>Current Savings ($)</label>
            <input
              type="number"
              value={plan.currentSavings}
              onChange={(e) => handleInputChange('currentSavings', e.target.value)}
              placeholder="100000"
            />
          </div>

          <div className="form-group">
            <label>Monthly Expenses ($)</label>
            <input
              type="number"
              value={plan.monthlyExpenses}
              onChange={(e) => handleInputChange('monthlyExpenses', e.target.value)}
              placeholder="8000"
            />
          </div>
        </div>

        <button 
          onClick={() => setShowProjections(!showProjections)}
          className="btn btn-primary mt-4"
          disabled={!plan.monthlyExpenses}
        >
          {showProjections ? 'Hide' : 'Show'} Financial Projections
        </button>
      </div>

      {/* Financial Projections */}
      {showProjections && plan.monthlyExpenses && (
        <div className="card mb-6">
          <h2 style={{ marginBottom: '24px' }}>Financial Projections</h2>
          
          {(() => {
            const projections = calculateProjections();
            return (
              <div className="grid grid-2">
                <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <DollarSign color="#667eea" size={24} />
                    <h3>Total Financial Target</h3>
                  </div>
                  <p style={{ fontSize: '28px', fontWeight: '600', color: '#667eea' }}>
                    ${projections.totalTarget.toLocaleString()}
                  </p>
                  <p style={{ color: '#64748b', fontSize: '14px' }}>
                    Including emergency fund and annual expenses
                  </p>
                </div>

                <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <Calendar color="#10b981" size={24} />
                    <h3>Monthly Savings Required</h3>
                  </div>
                  <p style={{ fontSize: '28px', fontWeight: '600', color: '#10b981' }}>
                    ${projections.monthlyRequired.toLocaleString()}
                  </p>
                  <p style={{ color: '#64748b', fontSize: '14px' }}>
                    To reach your target in {plan.timelineMonths} months
                  </p>
                </div>

                <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px' }}>
                  <h4>Emergency Fund</h4>
                  <p style={{ fontSize: '18px', fontWeight: '600', color: '#f59e0b' }}>
                    ${projections.emergencyFund.toLocaleString()}
                  </p>
                </div>

                <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px' }}>
                  <h4>Annual Expenses</h4>
                  <p style={{ fontSize: '18px', fontWeight: '600', color: '#ef4444' }}>
                    ${projections.annualExpenses.toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Timeline Milestones */}
      <div className="card mb-6">
        <h2 style={{ marginBottom: '24px' }}>Timeline & Milestones</h2>
        
        <div className="plan-timeline">
          {milestones.map((milestone, index) => {
            const isActive = milestone.month <= 6; // Mock current progress
            const isCompleted = milestone.month <= 0; // Mock completion status
            
            return (
              <div 
                key={index}
                className={`timeline-step ${isCompleted ? 'completed' : isActive ? 'active' : ''}`}
              >
                <div style={{ fontWeight: '600', marginBottom: '8px' }}>
                  Month {milestone.month}
                </div>
                <div style={{ fontSize: '14px', marginBottom: '4px' }}>
                  {milestone.title}
                </div>
                <div style={{ fontSize: '12px', opacity: 0.8 }}>
                  {milestone.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Items */}
      <div className="card">
        <h2 style={{ marginBottom: '24px' }}>Next Action Items</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            "Complete detailed skills assessment and gap analysis",
            "Research target industries and potential career paths", 
            "Start building emergency fund with automatic savings",
            "Schedule family meeting to discuss transition timeline",
            "Connect with mentor or coach in target field"
          ].map((action, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px',
              background: '#f8fafc',
              borderRadius: '8px',
              border: '1px solid #e2e8f0'
            }}>
              <input type="checkbox" />
              <span>{action}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <button className="btn btn-primary" style={{ marginRight: '16px' }}>
            Save Plan
          </button>
          <button className="btn btn-secondary">
            Export PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransitionPlan;