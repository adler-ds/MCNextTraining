# Key Concepts Summary - Marketing Cloud on Core

*Extracted from reference PDFs and videos*

## Foundation: The Platform Architecture

### Built on Core + Data Cloud
Marketing Cloud Growth & Advanced (MCG/A) is built on top of:
- **Salesforce Core Platform** - All agents, apps, data & metadata
- **Data Cloud** - The unified data foundation

This creates **one agentic martech stack** where marketing, sales, service, and commerce work together.

---

## The Five Key Concepts

### 1. Data Streams (Connect & Unify)
**What:** Data sources that flow into Data Cloud
- CRM data (Lead, Contact, Account)
- External data sources
- Commerce data
- Behavioral data

**Key Point:** If data is not in Data Cloud, it won't be available in MCG/A!

**Important Details:**
- **Mappings**: Relationships between Data Cloud and source systems
- **Fields**: Available for segmentation and personalization
- **Refresh Rates**: How often data updates (consider how "fresh" data needs to be)

### 2. Identity Resolution Rules (Connect & Unify)
**What:** Criteria used to match and consolidate data from different sources

**Purpose:** Creates a **Unified Individual** record by:
- Running rule sets (e.g., "Exact Email" matching)
- Linking Contact from CRM + Subscriber from MCE + Prospect from MCAE
- Creating one unified profile

**Why It Matters:** The Unified Individual is the foundation for all segmentation

### 3. Segments (Analyze, Plan & Generate)
**What:** Creating audiences from all types of data

**How:** Using attributes to determine ideal campaign population
- Use segment builder with attribute library
- Apply complex rule groups
- Target specific populations

**Data Available:** All Data Cloud data for fine-tuning customer experience

### 4. Unified Individuals (Activate)
**What:** The filtered individuals that become the population of a segment

**Key Characteristic:** Consent lives with the Unified Individual at the channel level:
- Email consent
- SMS consent  
- WhatsApp consent

### 5. Consent (Activate)
**What:** Permission management at the channel level

**Management:**
- Communication subscriptions
- Preference pages
- Explicit opt-ins
- Automated publishing schedules
- Import consent data with proper formatting

---

## The Data Journey

### Data Lake Objects (DLOs) vs Data Model Objects (DMOs)

**DLOs (Raw Data):**
- First ingestion of data in original format
- 1-to-1 copy of source data
- *Analogy: Bulk grocery store order (unsorted)*
- Used for staging and auditing

**DMOs (Harmonized Data):**
- Result of mapping DLOs to standardized model
- Used for analysis, segmentation, and activation
- *Analogy: Groceries sorted into cupboard, freezer, fridge*
- Powers Segments, Calculated Insights, and Analytics

---

## Content Builder: Multi-Channel Content

### Centralized Content Management
- **Content Builder**: Central hub for all digital marketing assets
- **Salesforce CMS**: Create reusable blocks, images, templates
- **Workspaces**: Organize and share assets

### Brand Builder
Ensures brand consistency across:
- Email
- Forms
- Landing Pages

**Benefits:**
- Centrally manage brand-approved assets
- Create templates, content blocks, styles
- Enforce consistent brand identity
- Reduce manual review and errors

### Channel Capabilities
1. **Email Builder**: Drag-and-drop, A/B testing
2. **Form Builder**: Lead collection, preference updates
3. **Landing Page Builder**: Conversion pages
4. **Mobile Messaging**: SMS and WhatsApp
5. **Reusable Content Blocks**: Standardized components

### Advanced Features
- **Dynamic Content**: Show different content to specific audiences based on Data Graph attributes
- **AI Features**: 
  - Einstein Metrics Guard
  - Send Time Optimization
  - Generative AI capabilities
- **Governance**: Approval workflows using CMS roles

---

## Flow: The Automation Glue

### Three Fundamental Building Blocks
1. **Trigger**: What starts the flow
2. **Interaction**: Messaging options (the channels)
3. **Logic**: Wait elements and Decision Splits

### Flow Types

**Segment-Triggered Flows:**
- Scheduled campaigns
- Batch processing

**Event-Triggered Flows:**
- Real-time customer actions
- Immediate response

### Advanced Capabilities
- **Agent Handoff**: Integration with Service Cloud
- **Path Experimentation**: Multivariate testing
- **Profile Selection**: Target specific audiences
- **B2B and B2C Examples**: Flexible for different business models

---

## Unified Marketing Performance & Analytics

### The Problem with Legacy Platforms

**Marketing Cloud Engagement (MCE):**
- B2C transactional engine
- Data in Data Extensions
- Terms: "SubscriberKey", "Opt Out"

**Marketing Cloud Account Engagement (MCAE):**
- B2B lead nurture platform
- Data tied to Leads & Contacts
- Terms: "ProspectID", "UNSUBSCRIBE"

**Issue:** Disconnected platforms with different data models

### The Solution: "One Data Set" Architecture

**Concept:**
- Single unified data model in Data Cloud
- Data from MCE and MCAE ingested and transformed
- Mapped to standardized Data Model Objects

**Value:**
- Harmonized metrics (e.g., "Opt Out" + "UNSUBSCRIBE" → single value)
- Single source of truth
- Unified custom reporting

### Dashboard Views

**Micro View (Tactical):**
- In-the-moment campaign optimizations
- Campaign-level performance
- Accessible directly on Campaign records

**Macro View (Strategic):**
- High-level strategic planning
- Global performance metrics
- ROI benchmarking

### Advanced Analysis
- **Semantic Data Model**: For raw data exports
- **Metric Validation**: Ensure data accuracy
- **Channel-Specific Filtering**: Drill down by channel

---

## Setup & Implementation

### Marketing Cloud Setup Assistant
**Purpose:** Centralized hub for managing implementation

**Value:**
- Clear, real-time overview of configuration progress
- Streamline implementation process
- Identify roadblocks early
- Comprehensive checklist and progress tracker

### Basic Settings Prerequisites
1. Enable Data Cloud
2. Create Salesforce CRM connector
3. Add default email channel
4. Add data protection details to records
5. Select a data space
6. Enable content management and privacy tools

### Required Data Kits
Must install and deploy data kits that include:
- Data Model Objects (DMOs) for marketing assets
- Identity resolution rulesets
- Data stream configurations

### Channel Setup
- Configure email settings (SPF, DKIM)
- Set up reply mail management
- Configure SMS messaging
- Set up WhatsApp
- Set up mobile app messaging
- Custom mobile app events

### Reporting Setup
- Install and connect Analytics Objects
- Set up Marketing Performance
- Configure Analytics Reports and Dashboards
- Customize Analytics Page

---

## AI & Agentforce Features

### Agentforce Capabilities
- Launch campaigns in days
- Generate briefs and audiences
- Personalize content and journeys
- Recommend products and offers in real-time
- 24/7 conversations in every channel
- Self-optimizing campaigns

### Einstein Features
- **Einstein Metrics Guard**: Filter non-human clicks
- **Einstein Send Time Optimization**: Best send times per recipient
- **Einstein Engagement Scoring**: Predict engagement likelihood
- **Einstein Engagement Frequency**: Analyze behavioral data
- **Generative AI**: Content creation assistance

---

## Building Blocks for Campaigns

### The Three Pillars

**WHAT You Send → Content Builder**
- Create emails, forms, landing pages, SMS
- Drag-and-drop components
- OOTB fields for easy creation
- Ability to customize each touchpoint

**WHO You Send To → Segmentation**
- Target groups or individuals
- Deliver right message to right audience
- Use all Data Cloud data
- Fine-tune customer experience

**HOW You Send → Flow**
- Create unique customer journeys
- Based on entry point, decision splits, interactions
- Seamless handoff between marketing, sales, service, commerce
- Create customers for life

---

## Key Advantages of MC on Core

### 1. One Data Set
- Action on Salesforce and non-Salesforce data
- Understand how marketing impacts revenue
- Cross-departmental insights

### 2. One Workflow
- Build connected journeys across departments
- Use Salesforce Flow
- Seamless handoffs between teams

### 3. Build on Agentforce
- Automate end-to-end campaign creation
- Optimize campaign delivery
- Ready-to-use skills and Agent Builder

### 4. Native Integration
- Direct access to CRM data (no connectors needed)
- Real-time data synchronization
- No duplicate data management
- Standard Salesforce permissions and sharing
- Single login and authentication

---

## Best Practices

1. **Leverage existing CRM data** - No need to duplicate
2. **Use standard objects** - Easier maintenance and scaling
3. **Follow Salesforce naming conventions** - Consistency across clouds
4. **Design for the platform** - Take advantage of native features
5. **Test in sandbox first** - Standard Salesforce deployment practices
6. **Consider data freshness** - Match refresh rates to campaign needs
7. **Plan for consent** - Manage at channel level from the start

---

## Important Distinctions from Legacy MC

| Aspect | Legacy MC | MC on Core |
|--------|-----------|------------|
| Data Model | Subscribers, Data Extensions | Unified Individuals, Standard Objects |
| Interface | Classic MC Studio | Lightning Experience |
| Integration | MC Connect required | Native (built-in) |
| Authentication | Separate login | Single Salesforce login |
| Automation | Automation Studio | Flow + Journey Builder |
| Reporting | MC Analytics | Salesforce Reports & Dashboards |
| Data Location | Separate system | Data Cloud |

---

## Next Steps for Learning

1. Complete Setup Assistant tasks
2. Configure identity resolution rules
3. Install required data kits
4. Set up channels (email, SMS, WhatsApp)
5. Create first segment
6. Build first email in Content Builder
7. Create simple Flow journey
8. Enable Einstein features
9. Configure reporting dashboards
10. Test in sandbox before production

---

*This summary compiled from: Foundational Concepts PDF, Implementation Guide, Admin Onboarding PDF, Content Builder PDF, Segmentation & Consent PDF, and Unified Marketing Performance & Analytics PDF*
