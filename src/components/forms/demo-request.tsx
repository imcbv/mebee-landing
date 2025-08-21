'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  message?: string;
}

interface DemoRequestFormProps {
  onClose?: () => void;
}

export function DemoRequestForm({ onClose }: DemoRequestFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Auto close after success
    setTimeout(() => {
      onClose?.();
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-mebee-dark-navy mb-2">Request Submitted!</h3>
        <p className="text-mebee-navy/70">We&apos;ll be in touch within 24 hours to schedule your demo.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-mebee-dark-navy mb-2">Book Your Demo</h2>
        <p className="text-mebee-navy/70">See MeBee in action for your team</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-mebee-dark-navy mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-mebee-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mebee-yellow focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-mebee-dark-navy mb-1">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-mebee-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mebee-yellow focus:border-transparent"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-mebee-dark-navy mb-1">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-mebee-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mebee-yellow focus:border-transparent"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-mebee-dark-navy mb-1">
            Role *
          </label>
          <select
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-mebee-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mebee-yellow focus:border-transparent"
          >
            <option value="">Select your role</option>
            <option value="Brand Manager">Brand Manager</option>
            <option value="Marketing Director">Marketing Director</option>
            <option value="Content Operations">Content Operations</option>
            <option value="Channel/Trade Marketing">Channel/Trade Marketing</option>
            <option value="Regional Marketing">Regional Marketing</option>
            <option value="Creative Director">Creative Director</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-mebee-dark-navy mb-1">
            Tell us about your use case (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-mebee-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mebee-yellow focus:border-transparent resize-none"
            placeholder="What challenges are you facing with digital assets?"
          />
        </div>

        <div className="flex gap-3 pt-4">
          {onClose && (
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-mebee-navy/20 text-mebee-navy hover:bg-mebee-navy/5"
            >
              Cancel
            </Button>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-mebee-yellow text-mebee-dark-navy hover:bg-mebee-yellow/90 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Book Demo'}
          </Button>
        </div>
      </form>
    </div>
  );
}