import React from 'react';
import { Eye, Activity, Brain, MapPin, Shield, Smartphone, Users, ChevronRight, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Glimmr</span>
                <span className="block text-2xl mt-3 text-blue-200">
                  AI-Powered Eye Scanning for Early Disease Detection
                </span>
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                10-second eye scans to detect vision-threatening conditions and early signs of systemic diseases. Built for GPs and rural clinics.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition duration-150">
                  Request Demo <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                  alt="Eye examination"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mt-8">
            <div className="bg-blue-50 overflow-hidden rounded-lg p-6">
              <dt className="text-sm font-medium text-blue-500 truncate">Global Vision Impairment</dt>
              <dd className="mt-1 text-3xl font-semibold text-blue-900">2.2B+</dd>
            </div>
            <div className="bg-blue-50 overflow-hidden rounded-lg p-6">
              <dt className="text-sm font-medium text-blue-500 truncate">Preventable Cases</dt>
              <dd className="mt-1 text-3xl font-semibold text-blue-900">1B+</dd>
            </div>
            <div className="bg-blue-50 overflow-hidden rounded-lg p-6">
              <dt className="text-sm font-medium text-blue-500 truncate">Scan Time</dt>
              <dd className="mt-1 text-3xl font-semibold text-blue-900">10s</dd>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Glimmr?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Advanced AI technology making healthcare more accessible and predictive
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-blue-600">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Dual-Layer AI Detection</h3>
              <p className="mt-2 text-gray-500">
                Detects both eye diseases and systemic health risks in one scan
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-blue-600">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Smartphone Compatible</h3>
              <p className="mt-2 text-gray-500">
                Works with standard smartphone cameras and equipment
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-blue-600">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Privacy Compliant</h3>
              <p className="mt-2 text-gray-500">
                Secure, web-based platform meeting healthcare privacy standards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Early Detection of Multiple Conditions
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Our AI technology helps identify early signs of:
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Vision-threatening eye conditions',
                  'Diabetes complications',
                  'Stroke risk factors',
                  'Early dementia indicators',
                  'Cardiovascular issues'
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-blue-500" />
                    <span className="ml-3 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80"
                alt="Doctor examining results"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform healthcare delivery?</span>
            <span className="block text-blue-200 text-lg mt-3">
              Join our pilot program for rural clinics
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Eye className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Glimmr</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Glimmr. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;