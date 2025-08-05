import React from 'react';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface ContactUsPhoneProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}

const ContactUsPhone = ({ value, onChange }: ContactUsPhoneProps) => {
  return (
    <div className="relative">
      <PhoneInputWithCountrySelect
        international
        countryCallingCodeEditable={false}
        defaultCountry="US"
        value={value}
        onChange={onChange}
        className="w-full"
        placeholder="(555) 000-0000"
      />
    </div>
  );
};

export default ContactUsPhone;
