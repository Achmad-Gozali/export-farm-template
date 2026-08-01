import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppButton() {
  return (
    <a
      href="#"
      aria-label="Hubungi via WhatsApp"
      className="fixed bottom-[25px] right-[25px] z-[10001] flex h-[54px] w-[54px] items-center justify-center rounded-full bg-whatsapp shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7 text-white" />
    </a>
  );
}
