import {
  Ban,
  Cloud,
  FileText,
  Gavel,
  RefreshCw,
  ServerOff,
  Shield,
  UserCog,
} from "lucide-react";

import LegalPage from "@/components/LegalPage";

const TermsOfUse = () => {
  return (
    <LegalPage
      eyebrow="Terms of Use"
      title={
        <>
          Terms for software that runs{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            under the user's control
          </span>
        </>
      }
      description="These Terms of Use explain the basic rules for using DevFlowInc websites, applications, and related materials. The products follow a local-first model, which means private application databases are stored locally or in user-selected services rather than on central DevFlowInc servers."
      effectiveDate="March 15, 2026"
      summaryItems={[
        { value: "Local-first", label: "software operation model" },
        { value: "No proxy", label: "between the app and user Google storage" },
        { value: "User-managed", label: "accounts, permissions, and backups" },
      ]}
      secondaryAction={{ href: "/privacy-policy.html", label: "Read Privacy Policy" }}
      sections={[
        {
          icon: FileText,
          title: "1. Acceptance of Terms",
          paragraphs: [
            "By accessing or using DevFlowInc websites or applications, you agree to these Terms of Use. If you do not agree with them, do not use the service.",
          ],
        },
        {
          icon: ServerOff,
          title: "2. Local-First Operation",
          paragraphs: [
            "The products are designed to process and store private data locally on the user's device or in storage environments chosen directly by the user. DevFlowInc does not provide a central hosted database for user application content.",
          ],
        },
        {
          icon: Cloud,
          title: "3. Google Account Integrations",
          paragraphs: [
            "If an app uses Google sign-in, synchronization, or cloud storage, that connection occurs directly between the app and the user's own Google account. Use of Google services remains subject to Google's own terms, API policies, and privacy rules.",
          ],
        },
        {
          icon: Shield,
          title: "4. No Access to Private Databases",
          paragraphs: [
            "Because our architecture avoids central application servers for private user databases, DevFlowInc does not normally possess, inspect, or administer the content stored in the user's own environment. Users remain responsible for the storage locations and permissions they choose.",
          ],
        },
        {
          icon: UserCog,
          title: "5. User Responsibilities",
          paragraphs: [
            "Users are responsible for operating the software in a secure and lawful way within their own devices and accounts.",
          ],
          bullets: [
            "Protect devices, credentials, and backup copies.",
            "Review and manage permissions granted to third-party providers.",
            "Use the software in compliance with applicable laws and platform rules.",
            "Keep local environments and connected accounts appropriately secured.",
          ],
        },
        {
          icon: RefreshCw,
          title: "6. Availability and Changes",
          paragraphs: [
            "We may improve, modify, suspend, or discontinue product features at any time. Features that depend on third-party providers may also change when those providers alter their APIs, policies, or technical requirements.",
          ],
        },
        {
          icon: Ban,
          title: "7. Disclaimer",
          paragraphs: [
            "The software is provided on an 'as is' and 'as available' basis to the fullest extent permitted by applicable law. We do not guarantee uninterrupted service, error-free behavior, or compatibility with every device, browser, account setup, or third-party platform.",
          ],
        },
        {
          icon: Gavel,
          title: "8. Limitation of Liability",
          paragraphs: [
            "To the fullest extent permitted by law, DevFlowInc is not liable for indirect, incidental, special, consequential, or punitive damages, including losses resulting from user-managed environments, local device failures, backups, or third-party account issues.",
          ],
        },
        {
          icon: RefreshCw,
          title: "9. Updates to These Terms",
          paragraphs: [
            "We may revise these Terms of Use from time to time. Continued use of the website or applications after an update means you accept the revised version.",
          ],
        },
      ]}
    />
  );
};

export default TermsOfUse;
