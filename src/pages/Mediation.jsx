import React, { useState } from 'react';
import { Calendar, Clock, Video, MessageSquare } from 'lucide-react';
import { usePaymentContext } from '../hooks/usePaymentContext';

const Mediation = () => {
  const [paid, setPaid] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const { createSession } = usePaymentContext();

  const handlePayment = async () => {
    try {
      await createSession("$99");
      setPaid(true);
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  const upcomingSessions = [
    {
      id: 1,
      date: '2024-01-15',
      time: '2:00 PM EST',
      mediator: 'Dr. Sarah Johnson',
      type: 'Family Alignment Meeting',
      participants: ['You', 'Father', 'Mother', 'Sister']
    }
  ];

  const pastSessions = [
    {
      id: 2,
      date: '2024-01-08',
      time: '3:00 PM EST',
      mediator: 'Dr. Sarah Johnson',
      type: 'Initial Assessment',
      summary: 'Discussed transition concerns and family expectations. Identified key areas for alignment.',
      resolution: 'Agreed on monthly check-ins and gradual transition approach.'
    }
  ];

  const availableSlots = [
    { date: '2024-01-20', time: '10:00 AM EST' },
    { date: '2024-01-20', time: '2:00 PM EST' },
    { date: '2024-01-22', time: '11:00 AM EST' },
    { date: '2024-01-22', time: '4:00 PM EST' },
    { date: '2024-01-25', time: '9:00 AM EST' },
    { date: '2024-01-25', time: '1:00 PM EST' }
  ];

  if (!paid) {
    return (
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card text-center">
            <h1>Family Mediation Services</h1>
            <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '32px' }}>
              Professional mediation to resolve conflicts and align your family on the transition plan.
            </p>

            <div style={{ background: '#f8fafc', padding: '32px', borderRadius: '12px', marginBottom: '32px' }}>
              <h2 style={{ color: '#667eea', marginBottom: '16px' }}>Premium Service</h2>
              <p style={{ fontSize: '48px', fontWeight: '700', color: '#1a1a1a', margin: '16px 0' }}>
                $99<span style={{ fontSize: '18px', fontWeight: '400' }}>/month</span>
              </p>
              <p style={{ color: '#64748b' }}>
                Includes unlimited mediation sessions, family coaching, and transition support
              </p>
            </div>

            <div style={{ textAlign: 'left', marginBottom: '32px' }}>
              <h3 style={{ marginBottom: '20px' }}>What's Included:</h3>
              <ul style={{ marginLeft: '20px', color: '#64748b' }}>
                <li style={{ marginBottom: '8px' }}>Certified family business mediators</li>
                <li style={{ marginBottom: '8px' }}>Video conferencing sessions via Zoom</li>
                <li style={{ marginBottom: '8px' }}>Session summaries and action items</li>
                <li style={{ marginBottom: '8px' }}>Follow-up support and check-ins</li>
                <li style={{ marginBottom: '8px' }}>Integration with your transition plan</li>
              </ul>
            </div>

            <button onClick={handlePayment} className="btn btn-primary" style={{ fontSize: '18px', padding: '16px 32px' }}>
              Subscribe & Start Mediation ($99/month)
            </button>

            <p style={{ color: '#64748b', fontSize: '14px', marginTop: '16px' }}>
              Cancel anytime. No long-term commitments.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '40px' }}>
        <h1>Family Mediation</h1>
        <p style={{ color: '#64748b', fontSize: '18px' }}>
          Resolve conflicts and align your family on the transition plan with professional mediation.
        </p>
      </div>

      {/* Upcoming Sessions */}
      <div className="card mb-6">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2>Upcoming Sessions</h2>
          <button 
            onClick={() => setShowBooking(true)}
            className="btn btn-primary"
          >
            Schedule New Session
          </button>
        </div>

        {upcomingSessions.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {upcomingSessions.map((session) => (
              <div key={session.id} style={{
                padding: '20px',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                background: '#f8fafc'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div>
                    <h3 style={{ marginBottom: '8px' }}>{session.type}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748b' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={16} />
                        {session.date}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={16} />
                        {session.time}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MessageSquare size={16} />
                        {session.mediator}
                      </div>
                    </div>
                    <div style={{ marginTop: '12px' }}>
                      <strong>Participants:</strong> {session.participants.join(', ')}
                    </div>
                  </div>
                  <button className="btn btn-primary">
                    <Video size={16} style={{ marginRight: '8px' }} />
                    Join Meeting
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: '#64748b', textAlign: 'center', padding: '40px' }}>
            No upcoming sessions. Schedule your first mediation session to get started.
          </p>
        )}
      </div>

      {/* Booking Modal */}
      {showBooking && (
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
          <div className="card" style={{ width: '600px', maxHeight: '80vh', overflow: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2>Schedule Mediation Session</h2>
              <button 
                onClick={() => setShowBooking(false)}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
              >
                ×
              </button>
            </div>

            <div className="form-group">
              <label>Session Type</label>
              <select>
                <option>Family Alignment Meeting</option>
                <option>Conflict Resolution</option>
                <option>Transition Planning</option>
                <option>Stakeholder Preparation</option>
              </select>
            </div>

            <div className="form-group">
              <label>Available Time Slots</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                {availableSlots.map((slot, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedSession(slot)}
                    style={{
                      padding: '12px',
                      border: '2px solid',
                      borderColor: selectedSession === slot ? '#667eea' : '#e2e8f0',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      background: selectedSession === slot ? '#f8fafc' : 'white',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontWeight: '600' }}>{slot.date}</div>
                    <div style={{ color: '#64748b', fontSize: '14px' }}>{slot.time}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Participants (invite by email)</label>
              <textarea 
                placeholder="Enter email addresses separated by commas..."
                rows={3}
              />
            </div>

            <div className="form-group">
              <label>Session Description</label>
              <textarea 
                placeholder="Describe what you'd like to discuss in this session..."
                rows={3}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setShowBooking(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary"
                disabled={!selectedSession}
              >
                Schedule Session
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Past Sessions */}
      <div className="card">
        <h2 style={{ marginBottom: '24px' }}>Session History</h2>

        {pastSessions.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {pastSessions.map((session) => (
              <div key={session.id} style={{
                padding: '20px',
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                  <div>
                    <h3>{session.type}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748b', fontSize: '14px' }}>
                      <span>{session.date}</span>
                      <span>{session.time}</span>
                      <span>{session.mediator}</span>
                    </div>
                  </div>
                  <span className="status-indicator status-aligned">Completed</span>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <h4 style={{ marginBottom: '8px' }}>Session Summary</h4>
                  <p style={{ color: '#64748b' }}>{session.summary}</p>
                </div>

                <div>
                  <h4 style={{ marginBottom: '8px' }}>Resolution & Next Steps</h4>
                  <p style={{ color: '#64748b' }}>{session.resolution}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: '#64748b', textAlign: 'center', padding: '40px' }}>
            No past sessions yet. Your session history will appear here after your first mediation.
          </p>
        )}
      </div>
    </div>
  );
};

export default Mediation;