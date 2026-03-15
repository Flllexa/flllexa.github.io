import {
  Cloud,
  EyeOff,
  HardDrive,
  LockKeyhole,
  RefreshCw,
  ServerOff,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

import LegalPage from "@/components/LegalPage";

const PrivacyPolicy = () => {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title={
        <>
          Privacy built around{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            user-controlled data
          </span>
        </>
      }
      description="DevFlowInc applications are designed to run without central application servers for private databases. We do not collect personal user content, and we do not maintain privileged access to the private data stored in your local environment or in your own Google account."
      effectiveDate="March 15, 2026"
      summaryItems={[
        { value: "0", label: "central databases operated for user content" },
        { value: "Direct", label: "app-to-Google connection when sync is enabled" },
        { value: "Local", label: "processing and storage by default" },
      ]}
      secondaryAction={{ href: "/terms.html", label: "Read Terms of Use" }}
      sections={[
        {
          icon: ServerOff,
          title: "1. Information We Do Not Collect",
          paragraphs: [
            "We do not collect, sell, rent, or profile personal user data through a central application backend. Our applications are designed so that private databases, notes, bookmarks, and similar content are not copied into infrastructure controlled by DevFlowInc.",
          ],
        },
        {
          icon: HardDrive,
          title: "2. Local-First Architecture",
          paragraphs: [
            "Our products prioritize local execution and local storage whenever the product model allows it. That means the application logic runs on the user's device and private data stays on the device or in storage destinations selected by the user.",
          ],
        },
        {
          icon: Cloud,
          title: "3. Direct Google Account Connection",
          paragraphs: [
            "If an app offers backup, synchronization, or storage through Google services, the app connects directly to the user's Google account. DevFlowInc does not operate a proxy server that sits between the app and the user's storage provider.",
            "Because of that design, we do not keep a private shadow copy of user databases on our own systems.",
          ],
        },
        {
          icon: EyeOff,
          title: "4. Access to Private Data",
          paragraphs: [
            "We do not have routine access to the private content stored by users in the applications. Access permissions granted to Google APIs are permissions granted by the user to their own Google account connection, subject to the user's choices and Google's own policies.",
          ],
        },
        {
          icon: ShieldCheck,
          title: "5. Analytics, Logs, and Tracking",
          paragraphs: [
            "We do not use private application content to build advertising profiles or behavioral tracking systems. If a distribution platform or website provider generates basic technical logs for delivery, uptime, or abuse prevention, those records are managed under that provider's own operational policies.",
          ],
        },
        {
          icon: LockKeyhole,
          title: "6. Third-Party Services",
          paragraphs: [
            "Some features may rely on third-party services such as Google for authentication, synchronization, or storage. Those services operate under their own terms, privacy notices, and security practices.",
            "Users should review third-party terms before enabling integrations that depend on external platforms.",
          ],
        },
        {
          icon: UserRoundCheck,
          title: "7. User Security Responsibilities",
          paragraphs: [
            "Since data remains primarily in user-controlled environments, the user is responsible for protecting the device, account credentials, backup strategies, and granted permissions associated with the application.",
          ],
          bullets: [
            "Use strong passwords and account protection methods.",
            "Review Google permissions and connected apps regularly.",
            "Protect local devices and backups against unauthorized access.",
          ],
        },
        {
          icon: RefreshCw,
          title: "8. Policy Updates",
          paragraphs: [
            "We may update this Privacy Policy when product behavior, third-party integrations, or legal obligations change. The current version will always be published on this page with the latest effective date.",
          ],
        },
      ]}
    />
  );
};

export default PrivacyPolicy;
