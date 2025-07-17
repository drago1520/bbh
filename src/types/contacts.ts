// TypeScript interface for the contacts data structure
export interface ContactsData {
  title: string;
  subheading: string;
  gmaps: string;
  cta: string;
  address: string;
  phones: Array<{
    phone: string;
  }>;
  emails: Array<{
    email: string;
  }>;
  socials: Array<{
    platform: string;
    url: string;
  }>;
}

// Example usage of the contacts data
export const ContactsExample = {
  // Access the data like this:
  title: 'contactsData.title',
  subheading: 'contactsData.subheading',
  gmaps: 'contactsData.gmaps',
  cta: 'contactsData.cta',
  address: 'contactsData.address',

  // Arrays - loop through them:
  phones: 'contactsData.phones.map(phone => phone.phone)',
  emails: 'contactsData.emails.map(email => email.email)',
  socials: 'contactsData.socials.map(social => ({ platform: social.platform, url: social.url }))',
};

// Helper function to get all phone numbers as strings
export const getPhoneNumbers = (contactsData: ContactsData) => {
  return contactsData.phones.map(phone => phone.phone);
};

// Helper function to get all email addresses as strings
export const getEmailAddresses = (contactsData: ContactsData) => {
  return contactsData.emails.map(email => email.email);
};

// Helper function to get all social media links
export const getSocialLinks = (contactsData: ContactsData) => {
  return contactsData.socials.map(social => ({
    platform: social.platform,
    url: social.url,
  }));
};
