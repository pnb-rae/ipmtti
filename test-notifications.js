#!/usr/bin/env node

/**
 * Test script for IPMTTI notification system
 * Run with: node test-notifications.js
 */

const testContactForm = async () => {
  console.log('🧪 Testing Contact Form...');
  
  const response = await fetch('http://localhost:3000/api/sendMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: 'contact',
      data: {
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        phone: '+254700000000',
        course: 'Driving',
        message: 'This is a test contact message from the notification system.',
        date: new Date().toISOString(),
      },
    }),
  });

  const result = await response.json();
  console.log('Contact Form Result:', result);
  return result;
};

const testApplicationForm = async () => {
  console.log('🧪 Testing Application Form...');
  
  const response = await fetch('http://localhost:3000/api/sendMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: 'application',
      data: {
        fullName: 'Test Applicant',
        emailAddress: 'applicant@example.com',
        mobileNumber: '+254700000000',
        course: 'Plant Operator',
        message: 'This is a test application submission.',
        date: new Date().toISOString(),
      },
    }),
  });

  const result = await response.json();
  console.log('Application Form Result:', result);
  return result;
};

const runTests = async () => {
  console.log('🚀 Starting IPMTTI Notification System Tests\n');
  
  try {
    // Test Contact Form
    const contactResult = await testContactForm();
    console.log('\n✅ Contact Form Test Completed\n');
    
    // Wait a bit between tests
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Test Application Form
    const applicationResult = await testApplicationForm();
    console.log('\n✅ Application Form Test Completed\n');
    
    // Summary
    console.log('📊 Test Summary:');
    console.log('Contact Form - Email:', contactResult.email ? '✅' : '❌');
    console.log('Contact Form - WhatsApp Text:', contactResult.whatsappText ? '✅' : '❌');
    console.log('Contact Form - WhatsApp Document:', contactResult.whatsappDocument ? '✅' : '❌');
    console.log('Application Form - Email:', applicationResult.email ? '✅' : '❌');
    console.log('Application Form - WhatsApp Text:', applicationResult.whatsappText ? '✅' : '❌');
    console.log('Application Form - WhatsApp Document:', applicationResult.whatsappDocument ? '✅' : '❌');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n💡 Make sure:');
    console.log('1. The development server is running (npm run dev)');
    console.log('2. Environment variables are configured in .env.local');
    console.log('3. The API endpoint is accessible at http://localhost:3000/api/sendMessage');
  }
};

// Run tests if this script is executed directly
if (require.main === module) {
  runTests();
}

module.exports = { testContactForm, testApplicationForm };
