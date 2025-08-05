'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ContactUsPhone from './ContactUsPhone';
import ArrowRightIcon from '../../public/icons/arrow_right-white.svg';
import FormSubmitSuccess from './FormSubmitSuccess';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactUsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your message! We will get back to you soon.',
        });
        reset();
      } else {
        throw new Error(result.error || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjects = ['General', 'Investments'];

  // For the phone input
  const handlePhoneChange = (value: string) => {
    setValue('phone', value || '');
  };

  return (
    <div
      className={`bg-slate ${submitStatus ? 'aspect-[1/1] lg:h-full' : 'h-full min-h-[680px]'} order-1 flex w-full flex-col px-[25px] py-[50px] lg:order-2 lg:min-h-[680px] lg:w-1/2 lg:px-[50px]`}
    >
      {submitStatus ? (
        <FormSubmitSuccess />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-full flex-grow flex-col justify-between gap-[30px] text-white"
        >
          {/* First Row */}
          <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-8">
            {/* First Name */}
            <div className="w-full lg:w-1/2">
              <label
                htmlFor="firstName"
                className="mb-[10px] block text-xs leading-loose tracking-widest uppercase"
              >
                FIRST NAME*
              </label>
              <input
                id="firstName"
                {...register('firstName', { required: 'First name is required' })}
                className="w-full border-0 border-b border-[#ffffff40] bg-transparent p-2 text-white focus:border-white focus:ring-0 focus:outline-none"
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-400">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="w-full lg:w-1/2">
              <label
                htmlFor="lastName"
                className="mb-[10px] block text-xs leading-loose tracking-widest uppercase"
              >
                LAST NAME*
              </label>
              <input
                id="lastName"
                {...register('lastName', { required: 'Last name is required' })}
                className="w-full border-0 border-b border-[#ffffff40] bg-transparent p-2 text-white focus:border-white focus:ring-0 focus:outline-none"
              />
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-400">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col gap-[30px] lg:flex-row lg:gap-8">
            {/* Email */}
            <div className="w-full lg:w-1/2">
              <div className="border-0 border-b border-[#ffffff40]">
                <label
                  htmlFor="email"
                  className="mb-[10px] block text-xs font-medium tracking-wider uppercase"
                >
                  EMAIL*
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full bg-transparent p-2 text-white focus:border-white focus:ring-0 focus:outline-none"
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div className="w-full lg:w-1/2">
              <label
                htmlFor="phone"
                className="mb-[10px] block text-xs font-medium tracking-wider uppercase"
              >
                PHONE
              </label>
              <ContactUsPhone value={watch('phone')} onChange={handlePhoneChange} />
            </div>
          </div>

          {/* Subject */}
          <div className="w-full">
            <label
              htmlFor="subject"
              className="mb-[10px] block text-xs font-medium tracking-wider text-white uppercase"
            >
              SUBJECT*
            </label>
            <div className="relative">
              <select
                id="subject"
                {...register('subject', { required: 'Subject is required' })}
                className="block w-full appearance-none border-[1px] border-[#ffffff] bg-transparent p-[1rem] pr-10 text-white focus:border-white focus:ring-0 focus:outline-none"
              >
                <option value="" disabled className="!text-[#ffffff40]">
                  SELECT
                </option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <ArrowRightIcon className="pointer-events-none absolute top-1/2 right-2 h-5 w-5 -translate-y-1/2 rotate-90" />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="w-full">
            <label
              htmlFor="message"
              className="mb-[10px] block text-xs font-medium tracking-wider text-[#ffffff] uppercase"
            >
              MESSAGE*
            </label>
            <textarea
              id="message"
              rows={1}
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters',
                },
              })}
              className="w-full resize-none border-0 border-b border-[#ffffff40] bg-transparent p-2 text-white focus:border-white focus:ring-0 focus:outline-none"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-[150px] self-center border-1 border-white px-5 py-[18px] focus:outline-none"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUsForm;
