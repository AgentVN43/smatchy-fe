import { useState } from "react";
import { postContact } from "../services/strapi";

// src/hooks/useChatFlow.ts
export type ChatStep = 'INIT' | 'EVENT_DETAIL' | 'SUPPORT_FORM';

type Action = {
  type: 'button';
  label: string;        // sau này → labelKey
  next: ChatStep | 'EXTERNAL';
} | {
  type: 'form';
  fields: { name: string; placeholder: string }[]; // placeholderKey
  onSubmit: (values: Record<string, string>) => Promise<void>;
}

interface StepConfig {
  id: ChatStep;
  botText: string;      // sau này → botTextKey
  actions: Action[];
}

export const useChatFlow = () => {
  const [step, setStep] = useState<ChatStep>('INIT');

  const config: Record<ChatStep, StepConfig> = {
    INIT: {
      id: 'INIT',
      botText: 'Hi! How can we help you today?',
      actions: [
        { type: 'button', label: 'Ask about an event', next: 'EVENT_DETAIL' },
        { type: 'button', label: 'Contact support team', next: 'SUPPORT_FORM' },
      ],
    },
    EVENT_DETAIL: {
      id: 'EVENT_DETAIL',
      botText: 'Looking for details about an event? You can explore all activities on the Smatchy app.',
      actions: [
         { type: 'button', label: 'View events in the app', next: 'EXTERNAL' },
         { type: 'button', label: 'Contact support by email', next: 'SUPPORT_FORM' },
       ],
     },
    SUPPORT_FORM: {
      id: 'SUPPORT_FORM',
      botText: 'Our support team is happy to help!\nsupport@smatchy.app',
      actions: [
        {
           type: 'form',
           fields: [
             { name: 'full_name', placeholder: 'Full name' },
             { name: 'email', placeholder: 'Email' },
             { name: 'subject', placeholder: 'Subject' },
             { name: 'message', placeholder: 'Message' },
           ],
           onSubmit: async (values: Record<string, string>) => {
             // gọi API gửi mail
             await postContact({
               full_name: values.full_name,
               email: values.email,
               subject: values.subject,
               message: values.message,
               status_contact: 'new',
             });
           },
         },
      ],
    },
  };

  return { ...config[step], setStep };
};