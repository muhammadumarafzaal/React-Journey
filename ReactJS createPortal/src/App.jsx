import React, { useState } from 'react'
import Modal from './components/Modal'
import Toast from './components/Toast'
import Dropdown from './components/Dropdown'
import Tooltip from './components/Tooltip'
import './index.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (message, type) => {
    setToast({ message, type })
  }

  return (
    <div className="container">
      <header>
        <h1>React Portals Masterclass</h1>
        <p className="description">
          Master the art of <code>createPortal()</code>. Rendering components outside the parent DOM tree while maintaining the React component hierarchy.
        </p>
      </header>

      <div className="demo-grid">
        {/* Modal Demo */}
        <div className="demo-card">
          <h3>1. Modals</h3>
          <p>
            Modals should overlay the entire application. Using portals ensures they aren't trapped by 
            <code> z-index</code> or <code>position: relative</code> of parent components.
          </p>
          <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </button>
        </div>

        {/* Toast Demo */}
        <div className="demo-card">
          <h3>2. Toast Notifications</h3>
          <p>
            Global alerts like Toasts need to be rendered at the root level to ensure visibility 
            regardless of where the trigger component is located.
          </p>
          <button className="btn-primary" onClick={() => showToast('Success! Your changes were saved.', 'success')}>
            Show Toast
          </button>
        </div>

        {/* Dropdown Demo */}
        <div className="demo-card">
          <h3>3. Dropdowns (Overflow Bypass)</h3>
          <p>
            This container has <code>overflow: hidden</code>. Notice how the dropdown menu still 
            breaks out of it because it's portaled to the document body.
          </p>
          <div className="overflow-box">
            <Dropdown 
              label="Menu Options" 
              items={['Profile', 'Settings', 'Logout', 'Help Center']} 
            />
          </div>
        </div>

        {/* Tooltip Demo */}
        <div className="demo-card">
          <h3>4. Tooltips</h3>
          <p>
            Tooltips portaled to the root avoid layout shifts and stacking context issues. 
            Hover over the <Tooltip text="This is a portaled tooltip!">highlighted text</Tooltip> to see it in action.
          </p>
        </div>
      </div>

      {/* Portal Components */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Hands-on with Portals"
      >
        <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
          This modal is rendered inside <code>#portal-root</code>, which is a sibling to <code>#root</code>. 
          This is the best practice for overlays to avoid CSS "leaks" from parent containers.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <button className="btn-primary" onClick={() => setIsModalOpen(false)}>
            Close Modal
          </button>
        </div>
      </Modal>

      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </div>
  )
}

export default App
