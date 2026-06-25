import React, { useState, useEffect } from 'react';
import { useEffectEvent } from '../hooks/useEvent';
import './Widgets.css';

export default function AutoSaveForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });
  
  const [saveStatus, setSaveStatus] = useState('Idle');
  const [lastSavedData, setLastSavedData] = useState(null);

  // 1. The Event Hook: Has access to latest formData, but won't trigger re-renders or effect cleanup
  const onAutoSave = useEffectEvent(() => {
    if (formData.title || formData.description) {
      console.log('🔄 Auto-saving...', formData);
      setSaveStatus('Saving...');
      
      // Simulating an API call
      setTimeout(() => {
        setSaveStatus('Saved at ' + new Date().toLocaleTimeString());
        setLastSavedData({...formData});
      }, 800);
    }
  });

  // 2. The Effect Hook: Only depends on mounting/unmounting. 
  // It NEVER resets when typing because onAutoSave isn't a dependency!
  useEffect(() => {
    console.log('⏰ Interval created (This should only log ONCE on mount)');
    
    const interval = setInterval(() => {
      onAutoSave();
    }, 4000); // Save every 4 seconds

    return () => {
      console.log('🛑 Interval destroyed');
      clearInterval(interval);
    };
  }, []); // <-- Empty dependency array! Magic of useEffectEvent

  const isDirty = formData.title !== lastSavedData?.title || formData.description !== lastSavedData?.description;

  return (
    <div className="widget-card animate-fade-in glass-panel">
      <div className="widget-header">
        <div className="widget-icon primary">📝</div>
        <div>
          <h3>Auto-Save Drafts</h3>
          <p className="widget-subtitle">Interval `useEffect` decoupled from State</p>
        </div>
        <div className={`status-badge ${saveStatus.includes('Saved') ? 'success' : saveStatus === 'Saving...' ? 'warning' : 'neutral'}`}>
            <span className={saveStatus === 'Saving...' ? 'spinner' : 'dot'}></span>
            {saveStatus}
        </div>
      </div>

      <div className="widget-content">
        <div className="alert-box info">
           <strong>Goal:</strong> Type below. Notice the interval does not reset on every keystroke, but it still saves the latest data!
        </div>

        <form className="modern-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Project Title</label>
            <input 
              type="text" 
              placeholder="e.g. Next-Gen AI Tool" 
              value={formData.title} 
              onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
            />
          </div>
          
          <div className="form-group">
            <label>Project Details</label>
            <textarea 
              rows="4"
              placeholder="Describe your revolutionary idea here..." 
              value={formData.description} 
              onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
            />
          </div>
        </form>

        <div className="form-footer">
            <span className="last-saved-info">
               {isDirty && (formData.title || formData.description) ? "Unsaved changes pending..." : "All up to date."}
            </span>
        </div>
      </div>
    </div>
  );
}
