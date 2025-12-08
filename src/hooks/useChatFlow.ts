import { useState } from "react";
import { postContact } from "../services/strapi";
import { useLocale } from "../contexts/LangContext";
import { chatFlowConfig } from "../config/chatFlowConfig";

// src/hooks/useChatFlow.ts
export type ChatStep = 'INIT' | 'EVENT_DETAIL' | 'SUPPORT_FORM';

type Action =
  | {
      type: "button";
      label: string;
      next: ChatStep | "EXTERNAL";
    }
  | {
      type: "form";
      fields: { name: string; placeholder: string }[];
      onSubmit: (values: Record<string, string>) => Promise<void>;
    };

interface StepConfig {
  id: ChatStep;
  botText: string;
  actions: Action[];
}

type LocaleKey = keyof typeof chatFlowConfig;

export const useChatFlow = () => {
  const { locale } = useLocale();
  const [step, setStep] = useState<ChatStep>("INIT");

  const localeKey: LocaleKey = (["en", "fr"] as const).includes(locale as any)
    ? (locale as LocaleKey)
    : "en";

  const localizedConfig: Record<ChatStep, StepConfig> = {
    INIT: {
      id: "INIT",
      botText: chatFlowConfig[localeKey].INIT.botText,
      actions: chatFlowConfig[localeKey].INIT.actions as Action[],
    },
    EVENT_DETAIL: {
      id: "EVENT_DETAIL",
      botText: chatFlowConfig[localeKey].EVENT_DETAIL.botText,
      actions: chatFlowConfig[localeKey].EVENT_DETAIL.actions as Action[],
    },
    SUPPORT_FORM: {
      id: "SUPPORT_FORM",
      botText: chatFlowConfig[localeKey].SUPPORT_FORM.botText,
      actions: [
        {
          ...(chatFlowConfig[localeKey].SUPPORT_FORM.actions[0] as any),
          onSubmit: async (values: Record<string, string>) => {
            await postContact({
              full_name: values.full_name,
              email: values.email,
              subject: values.subject,
              message: values.message,
              status_contact: "new",
            });
          },
        },
      ],
    },
  };

  return { ...localizedConfig[step], setStep };
};