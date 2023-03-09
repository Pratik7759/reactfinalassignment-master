import React from 'react'
import './Form.scss'

export default function Form() {
  return (
   
    <div class="grand-parent-form-container">
      <div class="parent-form-heading">
        <div class="form-heading">Contact us</div>
      </div>
      <div class="parent-form-container">
        <div class="form-container">
          <input type="text" placeholder="Name" /><br />
          <input type="number" placeholder="Phone" /><br />
          <input type="email" placeholder="Email" /><br />
          <input type="text" class="form-message" placeholder="Message" />

          <div class="parent-form-button">
            <button class="form-button">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
