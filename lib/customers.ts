export type CustomerStatus = 'Active' | 'Lead' | 'Recurring' | 'VIP' | 'Past Due' | 'Blacklisted';

export type CustomerRecord = {
  id: string;
  tenantId: string;
  name: string;
  company?: string;
  phone: string;
  email: string;
  propertyType: 'Residential' | 'Commercial' | 'Airbnb' | 'Vacation Rental';
  city: string;
  zip: string;
  nextService: string;
  frequency: string;
  lifetimeValue: string;
  outstandingBalance: string;
  lastBooking: string;
  status: CustomerStatus;
  tags: string[];
};

export const demoCustomers: CustomerRecord[] = [
  {
    id: 'CUS-1001',
    tenantId: 'tenant-demo',
    name: 'Maria Gonzalez',
    company: '',
    phone: '(713) 555-0148',
    email: 'maria@example.com',
    propertyType: 'Residential',
    city: 'Houston',
    zip: '77007',
    nextService: '07/02/2026',
    frequency: 'Bi-Weekly',
    lifetimeValue: '$4,820.00',
    outstandingBalance: '$0.00',
    lastBooking: '06/18/2026',
    status: 'Recurring',
    tags: ['Morning Preferred', 'Same Team']
  },
  {
    id: 'CUS-1002',
    tenantId: 'tenant-demo',
    name: 'Brazos Point MHC',
    company: 'Brazos Point MHC',
    phone: '(281) 555-0199',
    email: 'operations@example.com',
    propertyType: 'Commercial',
    city: 'Houston',
    zip: '77041',
    nextService: 'Needs Quote',
    frequency: 'Project',
    lifetimeValue: '$0.00',
    outstandingBalance: '$0.00',
    lastBooking: 'Not booked',
    status: 'Lead',
    tags: ['Commercial', 'Volume Opportunity']
  },
  {
    id: 'CUS-1003',
    tenantId: 'tenant-demo',
    name: 'Angela Reed',
    company: '',
    phone: '(832) 555-0122',
    email: 'angela@example.com',
    propertyType: 'Airbnb',
    city: 'Katy',
    zip: '77494',
    nextService: '07/01/2026',
    frequency: 'Turnover',
    lifetimeValue: '$9,430.00',
    outstandingBalance: '$175.00',
    lastBooking: '06/27/2026',
    status: 'Past Due',
    tags: ['Airbnb', 'High Value']
  }
];
