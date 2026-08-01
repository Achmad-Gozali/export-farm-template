import Image from "next/image";
import { Phone, Printer, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";
import type { ComponentType } from "react";

function SocialIcon({
  icon: Icon,
  label,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border-[0.8px] border-[rgba(43,43,43,0.81)] text-[#2b2b2b] transition-opacity hover:opacity-80"
    >
      <Icon className="h-[18px] w-[18px]" />
    </a>
  );
}

export function ContactFooterSection() {
  return (
    <>
      <section
        id="contact-section"
        className="py-16"
        style={{ backgroundColor: "#f3eee9" }}
      >
        <div className="container mx-auto grid gap-12 px-6 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo-webekspor-footer.png"
              width={555}
              height={91}
              className="h-10 w-auto"
              alt="Web Ekspor"
            />
            <p
              className="mt-4 font-[family-name:var(--font-manrope)] text-base"
              style={{ color: "rgba(43,43,43,0.82)", lineHeight: "28.8px" }}
            >
              Showcase your natural produce, garden, healthy food store &amp;
              more with Bottanika, a theme with a fresh look especially made
              for organic lifestyle enthusiasts.
            </p>
            <div className="mt-4 flex gap-3">
              <SocialIcon icon={FacebookIcon} label="Facebook" />
              <SocialIcon icon={InstagramIcon} label="Instagram" />
              <SocialIcon icon={YoutubeIcon} label="YouTube" />
            </div>
          </div>
          <div>
            <h5
              className="font-sans font-medium"
              style={{ fontSize: "20px", letterSpacing: "2px" }}
            >
              Address
            </h5>
            <p className="mt-4 text-[15px] text-muted-foreground">
              Jl. Indonesia Raya, Sudirman, Jakarta Selatan, DKI Jakarta,
              Indonesia, 10150
            </p>
          </div>
          <div>
            <h5
              className="font-sans font-medium"
              style={{ fontSize: "20px", letterSpacing: "2px" }}
            >
              Contact Us
            </h5>
            <div className="mt-4 flex flex-col gap-2 text-[15px] text-muted-foreground">
              <a
                href="tel:0813345678"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <Phone size={16} />
                0813 3456 78
              </a>
              <a
                href="tel:02112313123"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <Printer size={16} />
                021 1231 3123
              </a>
              <a
                href="mailto:mail@example.com"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <Mail size={16} />
                mail@example.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer
        style={{ backgroundColor: "#fef6e8" }}
        className="py-6 text-center text-sm text-muted-foreground"
      >
        Copyright &copy; {new Date().getFullYear()} Web Ekspor Design. All
        Rights Reserved.
      </footer>
    </>
  );
}
