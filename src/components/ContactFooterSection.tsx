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
      className="flex h-11 w-11 items-center justify-center rounded-full border-[0.8px] border-[rgba(43,43,43,0.81)] text-[#2b2b2b] transition-colors duration-300 hover:border-[#334b35] hover:bg-[#334b35] hover:text-white"
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
            <p className="font-sans text-[26px] font-extrabold tracking-tight text-[#2b2b2b]">
              Native<span className="text-[#0170b9]">code</span>
            </p>
            <p
              className="mt-4 font-[family-name:var(--font-manrope)] text-base"
              style={{ color: "rgba(43,43,43,0.82)", lineHeight: "28.8px" }}
            >
              Nativecode menghadirkan hasil pertanian organik segar langsung
              dari petani lokal terpercaya — dari kebun hingga meja Anda,
              dengan kualitas dan keaslian yang selalu terjaga.
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
              Alamat
            </h5>
            <p className="mt-4 text-[15px] text-muted-foreground">
              Jl. Indonesia Raya, Sudirman, Jakarta Selatan, DKI Jakarta,
              10150
            </p>
          </div>
          <div>
            <h5
              className="font-sans font-medium"
              style={{ fontSize: "20px", letterSpacing: "2px" }}
            >
              Hubungi Kami
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
                href="mailto:halo@nativecode.id"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <Mail size={16} />
                halo@nativecode.id
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer
        style={{ backgroundColor: "#fef6e8" }}
        className="py-6 text-center text-sm text-muted-foreground"
      >
        Hak Cipta &copy; {new Date().getFullYear()} Nativecode. Semua Hak
        Dilindungi.
      </footer>
    </>
  );
}
