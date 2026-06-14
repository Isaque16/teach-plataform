import FooterNav from "./FooterNav.tsx";
import FooterLogo from "./FooterLogo.tsx";
import FooterNavItem from "./FooterNavItem.tsx";
import FooterBottom from "./FooterBottom.tsx";

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white p-10">
      <div className="footer sm:footer-horizontal">
        <FooterLogo />

        <FooterNav title="Products">
          <FooterNavItem href="/pricing">Pricing</FooterNavItem>
          <FooterNavItem href="/overview">Overview</FooterNavItem>
          <FooterNavItem href="/browse">Browse</FooterNavItem>
          <FooterNavItem href="/accessibility" badge="Beta">
            Accessibility
          </FooterNavItem>
        </FooterNav>

        <FooterNav title="Solutions">
          <FooterNavItem href="/brainstorming">Brainstorming</FooterNavItem>
          <FooterNavItem href="/ideation">Ideation</FooterNavItem>
          <FooterNavItem href="/wireframing">Wireframing</FooterNavItem>
          <FooterNavItem href="#">Research</FooterNavItem>
        </FooterNav>

        <FooterNav title="Resources">
          <FooterNavItem href="/help">Help Center</FooterNavItem>
          <FooterNavItem href="/blog">Blog</FooterNavItem>
          <FooterNavItem href="/tutorials">Tutorials</FooterNavItem>
          <FooterNavItem href="/faqs">FAQs</FooterNavItem>
        </FooterNav>

        <FooterNav title="Support">
          <FooterNavItem href="/support">Contact Us</FooterNavItem>
          <FooterNavItem href="/teachdev">Developers</FooterNavItem>
          <FooterNavItem href="/teachdoc">Documentation</FooterNavItem>
          <FooterNavItem href="/integrations">Integrations</FooterNavItem>
        </FooterNav>

        <FooterNav title="Company">
          <FooterNavItem href="/about">About</FooterNavItem>
          <FooterNavItem href="/press">Press</FooterNavItem>
          <FooterNavItem href="/events">Events</FooterNavItem>
          <FooterNavItem href="#request-cta-section">
            Request Demo
          </FooterNavItem>
        </FooterNav>
      </div>

      <FooterBottom />
    </footer>
  );
}
