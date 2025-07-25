import React, { useState } from 'react';
import { Plus, Mail, Check, AlertCircle, Users } from 'lucide-react';

const StakeholderAlignment = () => {
  const [stakeholders, setStakeholders] = useState([
    {
      id: 1,
      name: 'Michael Thompson',
      role: 'CFO',
      email: 'mthompson@familybusiness.com',
      alignmentStatus: 'aligned',
      lastContact: '2024-01-10',
      notes: 'Fully supportive of transition plan. Offered to help with financial planning.',
      importance: 'high'
    },
    {
      id: 2,
      name: 'Jennifer Martinez',
      role: 'Head of Operations',
      email: 'jmartinez@familybusiness.com',
      alignmentStatus: 'pending',
      lastContact: '2024-01-05',
      notes: 'Scheduled meeting for next week to discuss transition timeline.',
      importance: 'high'
    },
    {
      id: 3,
      name: 'Robert Chen',
      role: 'Board Member',
      email: 'rchen@familybusiness.com',
      alignmentStatus: 'not-aligned',
      lastContact: '2023-12-28',
      notes: 'Expressed concerns about business continuity. Needs reassurance about succession plan.',
      importance: 'medium'
    }
  ]);

  const [showAddStakeholder, setShowAddStakeholder] = useState(false);
  const [newStakeholder, setNewStakeholder] = useState({
    name: '',
    role: '',
    email: '',
    importance: 'medium',
    notes: ''
  });

  const [showCommunication, setShowCommunication] = useState(false);
  const [selectedStakeholder, setSelectedStakeholder] = useState(null);

  const addStakeholder = () => {
    if (newStakeholder.name && newStakeholder.role) {
      setStakeholders([
        ...stakeholders,
        {
          id: Date.now(),
          ...newStakeholder,
          alignmentStatus: 'pending',
          lastContact: new Date().toISOString().split('T')[0]
        }
      ]);
      setNewStakeholder({ name: '', role: '', email: '', importance: 'medium', notes: '' });
      setShowAddStakeholder(false);
    }
  };

  const updateStakeholderStatus = (id, status) => {
    setStakeholders(stakeholders.map(s => 
      s.id === id 
        ? { ...s, alignmentStatus: status, lastContact: new Date().toISOString().split('T')[0] }
        : s
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'aligned': return '#10b981';
      case 'not-aligned': return '#ef4444';
      default: return '#f59e0b';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'aligned': return 'Aligned';
      case 'not-aligned': return 'Not Aligned';
      default: return 'Pending';
    }
  };

  const communicationTemplates = {
    initial: {
      subject: "Important Update: My Transition Plans",
      body: "Dear [Name],\n\nI hope this message finds you well. I wanted to personally reach out to discuss some important changes I'm planning regarding my role in our family business.\n\nAfter careful consideration, I've decided to transition out of my current position to pursue [new direction]. This decision comes from a desire to align my career with my personal values and long-term goals, while ensuring the continued success of our business.\n\nI would greatly appreciate the opportunity to discuss this transition with you in detail, including:\n\n• Timeline and transition plan\n• How this will affect operations\n• Ways to ensure a smooth handover\n• Your thoughts and concerns\n\nWould you be available for a call or meeting in the next week? Your input and support during this transition would mean a great deal to me.\n\nThank you for your time and understanding.\n\nBest regards,\n[Your Name]"
    },
    followup: {
      subject: "Follow-up: Transition Plan Discussion",
      body: "Dear [Name],\n\nThank you for taking the time to discuss my transition plans with me. I wanted to follow up on our conversation and address any additional questions or concerns you might have.\n\nAs we discussed, the key points of my transition plan include:\n\n• [Transition timeline]\n• [Succession planning details]\n• [Knowledge transfer process]\n\nI'm committed to making this transition as smooth as possible for everyone involved. Please let me know if there are any specific areas where you'd like more clarity or if you have suggestions for improving the plan.\n\nI look forward to your continued support during this process.\n\nBest regards,\n[Your Name]"
    }
  };

  const alignedCount = stakeholders.filter(s => s.alignmentStatus === 'aligned').length;
  const alignmentPercentage = stakeholders.length > 0 ? (alignedCount / stakeholders.length) * 100 : 0;

  return (
    <div className="container">
      <div style={{ marginBottom: '40px' }}>
        <h1>Stakeholder Alignment</h1>
        <p style={{ color: '#64748b', fontSize: '18px' }}>
          Manage key relationships and ensure stakeholder buy-in for your transition plan.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="card mb-6">
        <h2 style={{ marginBottom: '24px' }}>Alignment Progress</h2>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '20px' }}>
          <div>
            <div style={{ fontSize: '36px', fontWeight: '700', color: '#667eea' }}>
              {alignedCount}/{stakeholders.length}
            </div>
            <div style={{ color: '#64748b' }}>Stakeholders Aligned</div>
          </div>
          
          <div style={{ flex: 1 }}>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${alignmentPercentage}%` }}></div>
            </div>
            <div style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
              {Math.round(alignmentPercentage)}% Complete
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <div style={{ textAlign: 'center', padding: '16px', background: '#d1fae5', borderRadius: '8px' }}>
            <div style={{ fontSize: '24px', fontWeight: '600', color: '#059669' }}>
              {stakeholders.filter(s => s.alignmentStatus === 'aligned').length}
            </div>
            <div style={{ color: '#059669', fontSize: '14px' }}>Aligned</div>
          </div>
          
          <div style={{ textAlign: 'center', padding: '16px', background: '#fef3c7', borderRadius: '8px' }}>
            <div style={{ fontSize: '24px', fontWeight: '600', color: '#d97706' }}>
              {stakeholders.filter(s => s.alignmentStatus === 'pending').length}
            </div>
            <div style={{ color: '#d97706', fontSize: '14px' }}>Pending</div>
          </div>
          
          <div style={{ textAlign: 'center', padding: '16px', background: '#fee2e2', borderRadius: '8px' }}>
            <div style={{ fontSize: '24px', fontWeight: '600', color: '#dc2626' }}>
              {stakeholders.filter(s => s.alignmentStatus === 'not-aligned').length}
            </div>
            <div style={{ color: '#dc2626', fontSize: '14px' }}>Not Aligned</div>
          </div>
        </div>
      </div>

      {/* Stakeholder List */}
      <div className="card mb-6">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2>Key Stakeholders</h2>
          <button 
            onClick={() => setShowAddStakeholder(true)}
            className="btn btn-primary"
          >
            <Plus size={16} style={{ marginRight: '8px' }} />
            Add Stakeholder
          </button>
        </div>

        <div className="stakeholder-list">
          {stakeholders.map((stakeholder) => (
            <div key={stakeholder.id} className="stakeholder-item">
              <div className="stakeholder-info">
                <h4>{stakeholder.name}</h4>
                <p>{stakeholder.role} • Last contact: {stakeholder.lastContact}</p>
                {stakeholder.notes && (
                  <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                    {stakeholder.notes}
                  </p>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span 
                  className={`status-indicator status-${stakeholder.alignmentStatus}`}
                >
                  {getStatusText(stakeholder.alignmentStatus)}
                </span>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={() => {
                      setSelectedStakeholder(stakeholder);
                      setShowCommunication(true);
                    }}
                    className="btn btn-secondary"
                    style={{ padding: '8px 12px', fontSize: '14px' }}
                  >
                    <Mail size={14} style={{ marginRight: '4px' }} />
                    Contact
                  </button>

                  {stakeholder.alignmentStatus !== 'aligned' && (
                    <button 
                      onClick={() => updateStakeholderStatus(stakeholder.id, 'aligned')}
                      style={{
                        padding: '8px',
                        border: 'none',
                        background: '#10b981',
                        color: 'white',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      <Check size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Stakeholder Modal */}
      {showAddStakeholder && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="card" style={{ width: '500px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2>Add New Stakeholder</h2>
              <button 
                onClick={() => setShowAddStakeholder(false)}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
              >
                ×
              </button>
            </div>

            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                value={newStakeholder.name}
                onChange={(e) => setNewStakeholder({...newStakeholder, name: e.target.value})}
                placeholder="Enter stakeholder name"
              />
            </div>

            <div className="form-group">
              <label>Role *</label>
              <input
                type="text"
                value={newStakeholder.role}
                onChange={(e) => setNewStakeholder({...newStakeholder, role: e.target.value})}
                placeholder="Enter their role/title"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={newStakeholder.email}
                onChange={(e) => setNewStakeholder({...newStakeholder, email: e.target.value})}
                placeholder="Enter email address"
              />
            </div>

            <div className="form-group">
              <label>Importance Level</label>
              <select
                value={newStakeholder.importance}
                onChange={(e) => setNewStakeholder({...newStakeholder, importance: e.target.value})}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <div className="form-group">
              <label>Notes</label>
              <textarea
                value={newStakeholder.notes}
                onChange={(e) => setNewStakeholder({...newStakeholder, notes: e.target.value})}
                placeholder="Any relevant notes about this stakeholder..."
                rows={3}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setShowAddStakeholder(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button 
                onClick={addStakeholder}
                className="btn btn-primary"
                disabled={!newStakeholder.name || !newStakeholder.role}
              >
                Add Stakeholder
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Communication Modal */}
      {showCommunication && selectedStakeholder && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="card" style={{ width: '700px', maxHeight: '80vh', overflow: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2>Contact {selectedStakeholder.name}</h2>
              <button 
                onClick={() => setShowCommunication(false)}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
              >
                ×
              </button>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '12px' }}>Communication Templates</h3>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="btn btn-secondary">Initial Outreach</button>
                <button className="btn btn-secondary">Follow-up</button>
                <button className="btn btn-secondary">Custom</button>
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                defaultValue={communicationTemplates.initial.subject}
                placeholder="Email subject"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                defaultValue={communicationTemplates.initial.body.replace('[Name]', selectedStakeholder.name)}
                rows={15}
                placeholder="Type your message here..."
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setShowCommunication(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button className="btn btn-primary">
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Communication Guidelines */}
      <div className="card">
        <h2 style={{ marginBottom: '24px' }}>Communication Best Practices</h2>
        
        <div className="grid grid-2">
          <div>
            <h3 style={{ marginBottom: '16px', color: '#10b981' }}>Do's</h3>
            <ul style={{ marginLeft: '20px', color: '#64748b' }}>
              <li style={{ marginBottom: '8px' }}>Be transparent about your reasons and timeline</li>
              <li style={{ marginBottom: '8px' }}>Show how you'll ensure business continuity</li>
              <li style={{ marginBottom: '8px' }}>Ask for their input and concerns</li>
              <li style={{ marginBottom: '8px' }}>Provide regular updates on your progress</li>
              <li style={{ marginBottom: '8px' }}>Express gratitude for their support</li>
            </ul>
          </div>

          <div>
            <h3 style={{ marginBottom: '16px', color: '#ef4444' }}>Don'ts</h3>
            <ul style={{ marginLeft: '20px', color: '#64748b' }}>
              <li style={{ marginBottom: '8px' }}>Spring the news on them suddenly</li>
              <li style={{ marginBottom: '8px' }}>Dismiss their concerns or questions</li>
              <li style={{ marginBottom: '8px' }}>Make it seem like a rejection of the business</li>
              <li style={{ marginBottom: '8px' }}>Leave them in the dark about next steps</li>
              <li style={{ marginBottom: '8px' }}>Burn bridges or create conflicts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeholderAlignment;