import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './ContactApp';

const element = <ContactApp />;

createRoot(document.getElementById('root')).render(element);
