import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Andrew Beaver",
  description: "Get in touch with Andrew Beaver.",
};

export default function ContactPage() {
  return <ContactContent />;
}
