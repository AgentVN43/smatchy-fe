export const chatFlowConfig = {
  en: {
    INIT: {
      botText: "Hi! How can we help you today?",
      actions: [
        { type: "button", label: "Ask about an event", next: "EVENT_DETAIL" },
        { type: "button", label: "Contact support team", next: "SUPPORT_FORM" },
      ],
    },
    EVENT_DETAIL: {
      botText:
        "Looking for details about an event? You can explore all activities on the Smatchy app.",
      actions: [
        { type: "button", label: "View events in the app", next: "EXTERNAL" },
        { type: "button", label: "Contact support by email", next: "SUPPORT_FORM" },
      ],
    },
    SUPPORT_FORM: {
      botText: "Our support team is happy to help!\nsupport@smatchy.app",
      actions: [
        {
          type: "form",
          fields: [
            { name: "full_name", placeholder: "Full name" },
            { name: "email", placeholder: "Email" },
            { name: "subject", placeholder: "Subject" },
            { name: "message", placeholder: "Message" },
          ],
        },
      ],
    },
  },
  fr: {
    INIT: {
      botText: "Bonjour ! Comment pouvons-nous vous aider aujourd'hui ?",
      actions: [
        { type: "button", label: "Poser une question sur un événement", next: "EVENT_DETAIL" },
        { type: "button", label: "Contacter l'équipe support", next: "SUPPORT_FORM" },
      ],
    },
    EVENT_DETAIL: {
      botText:
        "Vous cherchez des détails sur un événement ? Vous pouvez explorer toutes les activités sur l'app Smatchy.",
      actions: [
        { type: "button", label: "Voir les événements dans l'app", next: "EXTERNAL" },
        { type: "button", label: "Contacter le support par email", next: "SUPPORT_FORM" },
      ],
    },
    SUPPORT_FORM: {
      botText: "Notre équipe support est ravie de vous aider !\nsupport@smatchy.app",
      actions: [
        {
          type: "form",
          fields: [
            { name: "full_name", placeholder: "Nom complet" },
            { name: "email", placeholder: "Email" },
            { name: "subject", placeholder: "Sujet" },
            { name: "message", placeholder: "Message" },
          ],
        },
      ],
    },
  },
};

