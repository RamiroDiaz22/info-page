import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/34600123456"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="sr-only">WhatsApp</span>
      </a>
    </div>
  );
}
