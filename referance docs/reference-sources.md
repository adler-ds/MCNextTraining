# Reference Sources - Marketing Cloud on Core

This document tracks authoritative sources for MC on Core training materials.

## Official Salesforce Documentation

### Article ID: 005224378
- **URL:** https://help.salesforce.com/s/articleView?id=005224378&type=1
- **Type:** Salesforce Help Article
- **Status:** Pending verification
- **Topics:** Marketing Cloud on Core
- **Notes:** Official Salesforce documentation

---

## Video Resources

### Marketing Cloud Growth & Advanced Setup Overview (Winter 25')
- **URL:** https://salesforce.vidyard.com/watch/Aq5TjDsxyKs838uk9QVKJj
- **Type:** Video Tutorial
- **Release:** Winter 25' / 258 Release
- **Duration:** TBD
- **Status:** Available
- **Paired PDF:** `Getting Started_ Marketing Cloud Growth & Advanced _ Admin Onboarding.pdf` (39MB)
- **Topics Covered:**
  - Permissions and access management
  - Data Cloud setup and Data Space selection
  - Data Kits installation and Data Streams ingestion
  - Identity Resolution Rules configuration
  - Email setup including domain management and DNS configuration
  - Consent management and preference centers
  - Advanced features: Einstein Metrics Guard, Frequency/Scoring, Marketing Performance
  - Agentforce and AI capabilities
  - Segmentation activation features
  - Scoring Rules configuration
  - Data Graph setup
  - Landing Page and Web Tracking integration
  - User access review and page customization
  - Privacy Consent Status implementation
- **Notes:** Comprehensive setup guide with implementation PDF reference

### Content Builder Overview
- **URL:** https://salesforce.vidyard.com/watch/LHdyEEdmxDbByEMkuhs1ZG
- **Type:** Video Tutorial
- **Duration:** TBD
- **Status:** Available
- **Paired PDF:** `Getting Started_ Marketing Cloud Growth & Advanced _ Content Builder.pdf` (37MB)
- **Topics Covered:**
  - Centralized content management and CMS workspace
  - Multi-channel asset creation (Email, Forms, Landing Pages)
  - Brand Builder for multiple brands with styling
  - Email Builder with drag-and-drop and A/B testing
  - Form Builder for lead collection and preference updates
  - Mobile messaging (SMS and WhatsApp)
  - Reusable content blocks and custom templates
  - Dynamic Content and personalization using Data Graph attributes
  - AI features: Metrics Guard, Send Time Optimization, generative AI
  - Governance and approval workflows with CMS roles
- **Notes:** Covers Growth and Advanced editions, includes deck reference at http://sfdc.co/jFOvN
- **Google Drive Mirror:** https://drive.google.com/file/d/1Bxid2zWSGqACGFUjey_j7LDMsti7Fvz4/view (authentication required)

### Flow 101: Core Concepts & Execution
- **URL:** https://salesforce.vidyard.com/watch/pAeddwK73fNoBG3VA5gxc5
- **Type:** Video Tutorial
- **Duration:** TBD
- **Status:** Available
- **Topics Covered:**
  - Flow as the critical automation glue for marketing
  - Three fundamental building blocks: Trigger, Interaction, Logic
  - Wait elements and Decision Splits
  - Segment-Triggered Flows for scheduled campaigns
  - Event-Triggered Flows for real-time customer actions
  - Agent Handoff for Service Cloud integration
  - B2B and B2C practical examples
  - Path Experimentation for multivariate testing
  - Profile selection options
- **Notes:** Foundational Flow training for marketers, excludes technical setup/troubleshooting. Deck available at http://sfdc.co/cbHIrh
- **Audience:** Marketers seeking automation proficiency

### Unified Marketing: Performance & Analytics Strategy
- **URL:** https://salesforce.vidyard.com/watch/KddFg4Y4K8d5Uz3gme2y9T
- **Type:** Video Tutorial
- **Duration:** TBD
- **Status:** Available
- **Paired PDF:** `Getting Started_ MC Next _ Unified Marketing Performance & Analytics Strategy.pdf` (16MB)
- **Topics Covered:**
  - Unified data architecture integrating MCE and MCAE platforms
  - Data Cloud (Data 360) implementation
  - Standardized Data Model Objects
  - Dual-level dashboard views (micro and macro perspectives)
  - Semantic Data Model for raw data exports
  - Metric validation techniques
  - ROI benchmarking
  - Channel-specific performance filtering
  - Centralized reporting to address data fragmentation
- **Notes:** Addresses data fragmentation across legacy platforms. Deck available at http://sfdc.co/bTa5FJ
- **Key Focus:** Analytics and unified reporting strategy

---

## PDF Resources

### Foundational Concepts
- **File:** `MCG_A - Foundational Concepts.pdf` (14MB)
- **Type:** Reference Document
- **Status:** Available
- **Topics:** Core concepts and foundational knowledge for Marketing Cloud Growth & Advanced

### Segmentation & Consent
- **File:** `Getting Started_ Marketing Cloud Growth & Advanced _ Segmentation & Consent.pdf` (38MB)
- **Type:** Getting Started Guide
- **Status:** Available
- **Topics:** Segmentation strategies and consent management

### SMS & WhatsApp
- **File:** `Getting Started_ Marketing Cloud Growth & Advanced _ SMS & WhatsApp.pdf` (40MB)
- **Type:** Getting Started Guide
- **Status:** Available
- **Topics:** Mobile messaging setup and best practices

### Implementation Guide
- **File:** `mktg_implementation_guide.pdf` (796KB)
- **Type:** Technical Guide
- **Status:** Available
- **Topics:** Implementation best practices and technical guidance

### Agentforce Marketing Training Q&A
- **File:** `MC Next : Agentforce Marketing Training – Cumulative Q&A & Outstanding Actions.pdf` (541KB)
- **Type:** Training Q&A Document
- **Source:** Indianapolis Hands-On Training (April 8-9, 2026)
- **Status:** Available
- **Topics:** 
  - Product naming (Agentforce Marketing)
  - Data, Identity Resolution & Data Graphs
  - Consent management
  - Campaign building, Flow & Orchestration
  - Personalization & Content
  - Analytics & Reporting
  - Credit consumption & Digital Wallet
  - Account Engagement Plus (MCAE+)
  - Outstanding asks and action items
- **Key Value:** Real-world Q&A from live training sessions, includes known limitations and workarounds

### Business Units
- **File:** `MC Next Business Units.pdf` (955KB)
- **Type:** Expert Coaching / Architecture Guide
- **Release:** Spring '26 (Release 260)
- **Status:** Available
- **Audience:** Marketing Cloud Admins, Enterprise Architects, Marketing Operations Leaders
- **Topics:**
  - Definition and purpose of Business Units
  - When to use BUs vs. Data Cloud Governance
  - Edition requirements (Advanced only)
  - Critical limitations (50 BU limit, immutability, no deletion in 260)
  - CSM qualification framework and red flags
  - Competitor positioning (vs. HubSpot, Braze, Adobe)
  - Volume & performance sizing guidance
  - Technical architecture (1:1 Data Space relationship)
  - 2-layer permission model
  - Backfill process and implementation walkthrough
- **Key Value:** Enterprise-level guidance for multi-brand/multi-division implementations

### Advanced Implementation Guide
- **File:** `MC Advanced Implementation Guide.pdf` (35MB)
- **Type:** Professional Services Implementation Guide
- **Version:** 1.2 (Updated May 13, 2026 for Release 262)
- **Status:** Available
- **Audience:** Professional Services architects, implementation teams, technical consultants
- **Internal Only:** Not for external customer distribution
- **17 Major Sections:**
  1. Glossary of Terms
  2. Overview
  3. Resourcing and Timelines (4-6 month enterprise timeline)
  4. Baseline Setup
  5. Data Modelling (Unified Individual, Individual DMO, Identity Resolution)
  6. Critical Data Graph Configurations
  7. Segmentation & Activation
  8. Email
  9. Flows
  10. Lead Scoring
  11. CRM Integrations
  12. Reporting
  13. MCE+ Functionalities
  14. Zero Copy (BYOL) Implementations
  15. Consumption
  16. Troubleshooting Issues
  17. Known Issues and Limitations
- **Key Value:** THE comprehensive technical implementation guide for enterprise deployments
- **Critical Insight:** MCA is a downstream consumer of D360 data model - "joined at the hip"

### Consent Management FAQ
- **File:** `Marketing Cloud Next Consent Management_ Frequently Asked Questions.docx` (1.2MB)
- **Type:** FAQ Document
- **Status:** Reviewed and updated weekly
- **Topics:**
  - Account Engagement integration
  - Setup troubleshooting
  - Data Cloud/Flows integration
  - Double opt-in processes
  - Ingesting consent data (supported vs. unsupported methods)
  - Lead/Contact requirements
  - Handling consent at scale
  - Implicit consent use cases
  - MCE integration (262 release)
  - Preference center customization
  - Segmentation on consent data
- **Key Value:** Practical Q&A complementing the detailed Consent canvas

---

## Slack Canvas Resources (Internal Only)

### Data Graphs: Master Reference
- **Source:** Slack Canvas (Internal)
- **Status:** Available
- **Audience:** All tiers (Foundational, Operational, Advanced)
- **Topics:**
  - Data Graphs as backbone of personalization
  - Prerequisites (Identity Resolution, Data Kits, Data Cloud)
  - Core design principles (start small, expand with intent)
  - Consumption considerations
  - How to create your first Data Graph
  - Tips & best practices
  - Unified Individual field attribution problem
  - The deletion problem (why starting small is non-negotiable)
  - Recommendations by market segment (SMB, Mid-Market, Enterprise)
  - 9 major gotchas and common issues
  - Beyond the Data Graph: full personalization toolkit
  - Strategic decision framework
  - Key product limitations (Spring '26 / v260)
- **Key Value:** Deep technical reference for data graph architecture and design

### Consent in Marketing Cloud Next: Internal Overview
- **Source:** Slack Canvas (Internal)
- **Status:** Available
- **Audience:** 3 tiers (Foundational, Operational Depth, Advanced)
- **Topics:**
  - What consent is and how it works
  - Two paths for consent data (OOB methods vs. Data Stream/DMO mapping)
  - Communication Subscription Consent DMO
  - The consent cache layer (DynamoDB, 90-day TTL → 30 min upcoming)
  - Cache vs. DMO priority problem
  - Supported vs. unsupported consent update methods
  - Flow action types (Create Consent vs. MessagingConsent)
  - Channel-specific consent (Email, SMS, WhatsApp, Mobile App)
  - The priority problem and consent drift
  - Safe operating patterns
  - Unsupported consent modifications and drift risk
  - Consent roadmap FY27-FY28
- **Key Value:** Critical technical understanding of consent architecture and cache layer

### Customizable Preference Pages
- **Source:** Slack Canvas (Internal)
- **Last Updated:** April 21, 2026
- **Release:** Spring '26 (Release 260) - GA as of 260.12
- **Status:** Available
- **Audience:** All personas (5-min quick start)
- **Topics:**
  - What customizable preference pages are
  - What can be customized (Brand, content blocks, layout, images)
  - How to enable feature
  - Channel architecture (email vs. SMS, separate pages)
  - Critical limitations (multi-language not supported, single page per channel until 262)
  - Onboarding/learning paths
  - CSM qualification framework
  - Architect technical architecture
  - Support engineer known issues
  - Roadmap (262: multiple pages, future: unified cross-channel)
- **Key Value:** Practical guidance for branded preference center implementation

---

## Release Timeline Context

### Release 258 (Winter '25') - Initial Launch
- Data Streams, Identity Resolution, Segments, Consent foundation
- UEHD on Account Records postponed to 260

### Release 260 (Spring '26') - Major Feature Release
- Conversational Email GA
- Distributed Marketing & Alerts
- Improved Campaign Creation Agent with Brand Grounding
- API-Triggered Transactional Sending (On-Demand Flows)
- Business Units GA
- Email Dedicated IPs (auto-provisioned)
- UEHD on Account, Lead, Contact, Person Account
- Customizable Preference Pages GA (as of 260.12)
- Handlebars Developer Guide
- MCE+ Send via Flow
- Einstein Metrics Guard

### Release 262 (Summer '26') - CURRENT ROLLOUT ⭐
**Dates:** R0 (S8): May 18 | R1: June 6 | R2: June 13 | R3: June 19, 2026

**Key Features:**
- Dynamic From & Reply Addresses GA
- Multiple OOTB Preference Pages per channel
- Individual (non-Unified) data graphs for Flow
- BU Lifecycle Management (soft-delete)
- Account-Based Marketing Dashboard
- Custom Fonts
- Automated India SMS DLT Support
- Click-to-WhatsApp Ad Tracking
- RCS Performance Dashboard
- MCP Server for MCE+

### Release 264 (Winter '27) - Roadmap
**Safe Harbor - Subject to Change:**
- Form field pre-fill using Data Graph
- SMS Code Sharing between MCE/MCA
- Bi-directional consent sync (Phase 2)
- BU de-provisioning/deletion
- Content syndication (cross-BU)
- New streaming API and bulk data ingestion API for consent at scale

### Release 266 - Future Roadmap
**Safe Harbor - Subject to Change:**
- Dynamic URL parameters on Landing Pages
- BU implementation wizard
- Multi-language Preference Pages
- Agent-first / Slack-first BU operations
- Cross-Cloud BU expansion

---

## Additional Resources

*Add more reference sources below*

---

## How to Use This Document

1. Add new reference URLs as you discover them
2. Include a brief description of what each covers
3. Note if authentication is required
4. Mark sources as primary (official) or secondary (community/blogs)
5. Update status when content is reviewed and incorporated

## Categories

- **Official Documentation** - Salesforce Help, release notes, admin guides
- **Trailhead** - Learning modules and projects
- **Community** - Blog posts, user group content
- **Video** - Webinars, demos, tutorials
- **Technical** - API docs, developer guides
