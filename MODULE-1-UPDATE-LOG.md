# Module 1 Update Log — Data Foundation

Fresh change-tracking log for **Module 1: Data Foundation**
(`modules/module-01-data-foundation.html`). Changes are documented here first, then
applied to the module later.

> Prior Module 1 notes live in `MODULE-1-UPDATE-SUMMARY.md` (Loyalty Data Bundle work +
> the Aug 12 2026 DMO/query corrections). This log starts a new set going forward.

## Status Legend
- 🔵 **Planned** — documented, not yet applied
- 🟡 **In Progress** — partially applied
- ✅ **Done** — applied and verified

---

## Pending Changes

### Change 1 — Simplify data setup: deploy Loyalty Data Kit, skip the Sales Bundle install
**Status:** ✅ Applied Aug 14, 2026 — kept the existing steps but reframed with "Primary
path vs. fallback" callouts: Step 3 (Sales Data Bundle) marked (Fallback); Step 4 heading
now "Deploy the Loyalty Management Advanced Data Kit"; Step 4A = fallback bundle install,
Step 4B = primary data-kit deploy (Data Cloud Setup → Data Kits, needs Org ID). Did NOT
renumber steps (avoids screenshot-ID/cross-ref churn) — revisit if a full renumber is wanted.
**Location:** Lab 1 → Step 3 "Set Up Salesforce CRM Data Stream" (lines ~308–361) and
Step 4 "Install Salesforce CDP CRM Loyalty Data Bundle" (line ~363 onward).

**Problem / correction:**
The lab currently walks through **installing the Sales Data Bundle** (Step 3: Data
Streams → New → Salesforce CRM → Sales Data Bundle → Deploy) and then separately
installing the Loyalty bundle. That Sales Bundle install is **not needed**.

**Change needed:**
- You do **not** need to install the Sales Data Bundle. You can just **deploy the
  Loyalty Management Advanced data kit** directly.
- Correct path: **Data Cloud Setup → Data Kits → deploy** (the "Loyalty Management
  Advanced" data kit).
- Deploying the data kit **requires the org ID** for your org.
- **Fallback:** if the Data Kit is **not available**, then you fall back to doing the
  **Bundle install** (the current Step 3/4 bundle flow).

**Rework the steps to reflect this order:**
1. Primary path: go to Data Cloud Setup → Data Kits → deploy the Loyalty Management
   Advanced data kit (need org ID). (Step 4B in `MODULE-1-UPDATE-SUMMARY.md` already
   documents the Data Kit deploy dialog: Data Space = default, enter 15-char Org ID,
   Deploy → OK.)
2. Fallback path (only if the Data Kit isn't listed): install the Data Bundle as the
   current steps describe.

**Notes / open questions:**
- Confirm whether Step 3 (Sales Data Stream) should be **removed entirely** or **demoted
  to the fallback** — the Sales bundle brings Person Accounts/Orders, so verify the
  Loyalty data kit alone covers what later labs/modules need (Person Account +
  loyalty), or whether Person Account data comes from elsewhere.
- Reconcile with existing `MODULE-1-UPDATE-SUMMARY.md` (Data Kit deploy is already
  documented there as Step 4B) — this change makes the Data Kit the **primary** action
  and the Bundle install the **fallback**, which reorders that prior content.
- Screenshot impact: `mod1-step2-data-streams-list.jpg` / `mod1-step3-crm-stream-detail.jpg`
  (Sales bundle) may be demoted/removed; Data Kit deploy screenshots already exist.

---

### Change 2 — Add "Complete Marketing Cloud setup" step after the Data Cloud setup
**Status:** 🔵 Planned
**Location:** Lab 1, after the Data Cloud setup steps (Steps 1–6 end at "Query the
Unified Individual DMO", line ~559; Lab 1 Checkpoint at line ~593). New step goes after
the Data Cloud parts are complete.

**Problem / gap:**
The lab covers Data Cloud setup but never tells learners to complete the **Marketing
Cloud setup**, which is a required follow-on.

**Change needed — add a step stating:**
- Once the Data Cloud parts are set up, you must complete the **Marketing Cloud setup**.
- This is done from **standard Setup** (NOT Data Cloud Setup).
- Navigate to **Marketing Cloud → Basic Settings**.

**Basic Settings checklist (source found — see below):**
The 6 Basic Settings prerequisites (from `overview/key-concepts-summary.md` line 209,
originally the Admin Onboarding reference PDF):
1. Enable Data Cloud
2. Create Salesforce CRM connector
3. Add default email channel
4. Add data protection details to records
5. Select a data space
6. Enable content management and privacy tools

**Source of truth for this content:**
- `overview/key-concepts-summary.md` → "Basic Settings Prerequisites" (line ~209).
- Reference doc: `referance docs/Getting Started_ Marketing Cloud Growth & Advanced _
  Admin Onboarding.pdf` (per `referance docs/reference-sources.md`).

**Concrete example actions (confirmed):**
- **Select the Data Space** as **`default`**. Doing this **kicks off the "Enable
  Marketing Cloud" step** automatically — so selecting the data space is the trigger
  that starts enabling Marketing Cloud, not a separate manual action.
- (Other Basic Settings items from the checklist above follow — e.g. default email
  channel, data protection details, content management & privacy tools.)

**Next action — Deploy the Marketing Data Kits / Data Streams (confirmed, with copy):**
Once **Enable Marketing Cloud** is complete, deploy the **Data Streams** from within
Basic Settings. This installs a set of Data Kits and deploys their related data streams.

Data Kits installed by this step:
- Sales Data Kit
- Marketing Setup Objects Data Kit
- Connect Objects Data Kit
- Flows Integration Data Kit
- Email Channel Data Kit
- SMS Channel Data Kit
- WhatsApp Channel Data Kit
- Mobile App Messaging Data Kit

**Draft step copy (ready to adapt into the HTML step):**
> On the **Basic Settings** page (**Setup → Marketing Cloud → Basic Settings**), scroll
> down to **"Install the Marketing Data Kits"** and click the **Update** button 👉, then
> **Update** again in the modal pop-up.
>
> Clicking **Update** installs all of the listed Data Kits and deploys the related data
> streams.
>
> You'll see status updates (**Not Deployed → In Progress → Deployed**) in this section
> while the installs occur. **If you get any errors, it's okay** — you may have to hit the
> **Retry** button to run the job a second time.
>
> The initial update cycle takes about **20 minutes** to run. If you re-run it because of
> errors, it only re-runs the Data Kits that errored, so it's quicker.
>
> **Note:** if you get errors on the **Flows Integration Data Kit**, it shouldn't block
> your demo.

**Tone note:** source copy included a lighthearted Usain Bolt aside + a `:run:` emoji —
decide whether to keep the humor or use a more neutral training voice when writing the
final HTML.

**Screenshot:** consider `mod1-stepN-install-marketing-data-kits.jpg` (the "Install the
Marketing Data Kits" section with the Update button + deploy status list).

**Relationship to Change 1 (Loyalty Data Kit):** confirm ordering/overlap — Change 1's
Loyalty Management Advanced data kit deploy vs. this Basic Settings "Install the Marketing
Data Kits" bulk deploy. Sequence in the final lab: Data Cloud setup → deploy Loyalty data
kit (Change 1) → Basic Settings (select data space `default` → Enable Marketing Cloud →
Install the Marketing Data Kits / deploy Data Streams). Verify this is the intended order.

**Next action — Install Marketing Performance (~4 min) (confirmed, with copy):**
After the 1-click install and deploy of data kits + data streams completes, install the
**Marketing Performance** app to view OOTB embedded **Tableau Next** dashboards. Installing
it makes the dashboards available in three places:
1. A **"Marketing Performance"** tab on the Marketing Cloud app.
2. A **"Performance"** item (left navigation) within a specific **campaign**.
3. A **"Performance"** tab within a specific **content**.

Path: **Setup → Marketing Cloud → Marketing Features → Marketing Performance** (search
"Marketing Performance" in Setup).
- Ensure the **Prerequisites** steps are complete to install the app.
- Click **Install** — app installs in ~3–5 min.
- Once installed, click **Go to Permission Set** to assign users permission to view the
  dashboards.
- Click the **Marketing Performance** tab (next to Setup) to view success status.
- The Marketing Performance tab is then visible on the Marketing Cloud app page, and the
  Performance tab appears within a specific campaign and content.

**Next action — Install Analytics Packages (~30 min) — OPTIONAL (confirmed, with copy):**
> *Recommendation: use the **Marketing Performance** app for OOTB reporting needs, NOT the
> DCR analytics packages.*
After the 1-click install/deploy of data kits + data streams completes, you can install
the analytics packages (makes reports + dashboards available). A qbrix to support demoing
analytics data in embedded dashboards is anticipated; guide to be updated when available.

Path: **Setup → Marketing Cloud → Reporting and Optimization → Analytics** (search
"Analytics" in Setup). Install these **for all users** (checkboxes do NOT auto-populate):
- Marketing Engagement Analytics Package
- SMS Analytics Package
- Flow Reports Analytics Package

Select each package for all users, then click **Install**.
- Note: Opportunity Influence can be set up, but there will be **no engagement data** for
  it to demo.

**Next action — Publish Scoring Rules (confirmed, with copy):**
Path: **Setup → Marketing Cloud → Reporting and Optimization → Customer Engagement** →
click **Scoring Setup**. Select the **Unified Individual** and **Unified Account Profile**,
then click **Publish**.

**Overall setup sequence now spans (candidate step numbering for the lab):**
Data Cloud setup → deploy Loyalty data kit (Change 1) → Basic Settings (data space
`default` → Enable Marketing Cloud → Install the Marketing Data Kits / deploy Data
Streams) → Install Marketing Performance → (optional) Install Analytics Packages →
Publish Scoring Rules.

**Relationship to Change 1 (Loyalty Data Kit):** confirm ordering/overlap — Change 1's
Loyalty Management Advanced data kit deploy vs. this Basic Settings "Install the Marketing
Data Kits" bulk deploy. Sequence in the final lab: Data Cloud setup → deploy Loyalty data
kit (Change 1) → Basic Settings (select data space `default` → Enable Marketing Cloud →
Install the Marketing Data Kits / deploy Data Streams). Verify this is the intended order.

**Notes / open questions:**
- Some Basic Settings items overlap the Data Cloud steps already in Lab 1 (Enable Data
  Cloud, Salesforce CRM connector, Select a data space). When writing the step, either
  cross-reference those earlier steps or frame Basic Settings as the consolidating
  checklist — avoid duplicating instructions.
- This setup sequence is getting long (Basic Settings → Marketing Data Kits → Marketing
  Performance → Analytics Packages → Scoring Rules). Consider whether it should be its
  own **Lab** (or a dedicated "Admin Setup" section) in Module 1 rather than a single
  Step 7. Decide structure when applying.
- Add matching checkpoint-list items ("✓ Marketing Cloud Basic Settings completed",
  "✓ Marketing Performance installed", "✓ Scoring Rules published").
- Screenshots: `mod1-stepN-mc-basic-settings.jpg`, `mod1-stepN-install-marketing-data-kits.jpg`,
  `mod1-stepN-marketing-performance.jpg`, `mod1-stepN-analytics-packages.jpg`,
  `mod1-stepN-scoring-setup.jpg`.
- **Marketing Performance uses Tableau Next dashboards** — this is the real OOTB reporting
  story and ties directly to the Module 8 review below (Module 8 currently invents
  generic dashboards/reports instead of pointing at Marketing Performance / Tableau Next).

---

### Change 3 — Identity Resolution is NOT pre-configured: add a "Create the IR Ruleset" step
**Status:** ✅ Applied Aug 14, 2026 — Module 1 Lab 1 Step 5 rewritten from "Review" to
"Create the Identity Resolution Ruleset" (Individual + Account rulesets; new-ruleset flow;
per-DMO warning resolution with best-judgement mapping caveat + Device→Advertiser Id
example; Match Rules = Fuzzy Name + Normalized Email; recon = Individual Id → Source
Priority; auto-selects in Basic Settings). Removed the fabricated Email Exact/Customer ID
rules and the "2M customers ran overnight" prose. Updated Lab 1 success criteria + checkpoint
to "create/configure" framing. **Screenshots:** placeholders added (mod1-step5a-new-ruleset,
mod1-step5c-match-rules) — real captures still needed. The data-mapping warning screenshot is
now wired to the real capture **`DLO-Error-Example.jpg`** (Device DMO → Advertiser Id, Aug 14
2026); the earlier `mod1-step5b-*` placeholder is retired. **"MCAI" is confirmed an EXAMPLE Ruleset ID**
(Aug 14, 2026) — HTML already phrases it "for example, MCAI"; no change needed. **Open item
still pending:** confirm ordering vs. Marketing Data Kits install (Change 2).
**Location:** Lab 1 → **Step 5 "Review Identity Resolution Ruleset"** (lines ~525–553).
Also touches the concept prose (lines ~157–195, 529–551) and the Basic Settings sequence
(Change 2) — the ruleset auto-selects back in Basic Settings once created.

**Problem / correction:**
Current Step 5 tells the learner to *review* an already-existing IR ruleset ("Review the
ruleset configured for NTO... you'll likely see Email Exact Match / Customer ID Match").
**In this org Identity Resolution is NOT set up** — the learner has to **create it from
scratch**. So this step must change from *review* to *build*.

**Why manual (context from user):**
> All SDO Orgs by default have the Marketing Cloud Engagement (MCE) + SKU enabled, so to
> get an out-of-the-box IR Ruleset you'd need extra steps including **connecting MCE with
> Data Cloud**. Instead, these steps create the IR **manually**.

**Timing:** Wait until the **previous setup step is fully done** before starting this
(~3–5 min of work). Slots into the Module 1 admin-setup sequence (Change 2).

---
**Draft step copy — Create an Identity Resolution Ruleset (Individual):**

1. **App Launcher → Data Cloud app.** Navigate to the **Identity Resolutions** tab.
2. Click **New** to start setting up your identity resolution.
3. Select **Create New Ruleset**, click **Next**.
4. Select **Primary Data Model Object = Individual**.
5. Enter a **4-character Ruleset ID** (e.g. **MCAI**). Click **Next**.
6. Enter a **Ruleset Name**, click **Save**.
7. On the **Identity Ruleset record page**, resolve the **warnings in the right column**:
   - **Data mapping warning: "Map required field Lead_Home"** — click the hyperlinked
     field text to open the data mapping screen. In the **left column**, map **Phone** to
     **Contact Point Phone → Formatted E164 Phone Number** (right column). **Save** the
     mapping update and go back to the identity ruleset record page.
     > ⚠️ **The data mappings are NOT 100% accurate / not just this one field.** The
     > Phone → E164 map is only an *example*. For **each DLM**, look at the **right side**
     > and resolve **every** warning shown. Each unmapped DLM shows a **⚠️ warning triangle**
     > that, on hover, reads e.g. *"The following attributes should be mapped to
     > successfully use Identity Resolution, Segmentation, and Activation: &lt;field&gt;"*
     > (screenshot example: **Device** DLM → *Advertiser Id*). The learner should use
     > **their best judgement** on which field to map for each warning — the mappings vary
     > by DLM and aren't a fixed list.
     > Reference screenshot: `screenshots/Screenshot 2026-08-14 at 1.12.36 PM.heic`
     > (a "Review Warning" tooltip on the Device DLM). Convert to jpg/png + rename to a
     > `mod1-idr-*` convention when adding to the module.
   - **Reconciliation rule warning** — click the linked object/field **individual.Individual
     Id**. Under **Reconciliation Rules → Individual**, select **Individual Id**. **Disable**
     the default reconciliation rule (it's enabled by default). Update the field
     reconciliation rule to **Source Priority**. Click **Save**.
8. **Configure Matching Rules:** click **Match Rules → Configure → Next → Configure**.
   Select **Fuzzy Name** & **Normalized Email**. Click **Next → Next → Save**.
9. **Run ruleset** — should start automatically once configured.
10. Go back to **Setup → Marketing Cloud → Basic Settings** — your **Individual ruleset**
    should now be **auto-selected**.

**Then repeat for the Account (Account Individual) ruleset:**
- Same flow, but the **Account ruleset is more streamlined** and does **NOT require
  resolving any warnings**.

---

**Ripple effects / reconcile when applying:**
- **Rewrite the concept/prose** that implies IR already ran (e.g. line ~551 pro-tip "For
  NTO's 2M customers, it likely ran overnight during setup" — false; the learner is
  creating and running it now). Reframe the 4–24 hr first-run note as "your run will start
  when you finish configuring" — and reconcile the volume with the empty/~200-member org
  (backlog **Change 5**), so no "2M customers" run-time claim.
- Replace the fabricated **Email Exact Match / Customer ID Match** code-block (lines
  ~534–539) with the **actual** matching rules configured here: **Fuzzy Name** +
  **Normalized Email**, reconciliation = **Source Priority** on Individual Id.
- **Cross-ref Change 2:** Basic Settings shows the ruleset auto-selected after creation —
  sequence is Basic Settings (data space `default` → Enable MC → Install Marketing Data
  Kits) → **create IR rulesets (this)** → back to Basic Settings to confirm auto-select.
  Confirm exact ordering (does IR come before or after Marketing Data Kits install?).
- Resolves the **"verify against org" IR item** flagged earlier — the real ruleset config
  is now known (Fuzzy Name + Normalized Email, E164 phone mapping, Source Priority recon).

**Screenshot impact:** Step 5 needs a **series** of new screenshots (currently one
`mod1-step5-identity-resolution.jpg`): new ruleset dialog, Primary DMO/Ruleset ID, data
mapping (Phone → E164), reconciliation rule (Source Priority), match rules (Fuzzy Name +
Normalized Email), run status, Basic Settings auto-selected. Suggest `mod1-step5a..h-*` or
`mod1-idr-*` naming. Account ruleset can reuse/short-form.

**Open questions:**
- Ruleset ID "MCAI" — is that the intended ID to teach, or just an example? (User wrote
  "ex. MCAI".)
- Exact ordering vs. Marketing Data Kits install and the rest of Change 2 sequence.
- Whether to keep any "review the ruleset" framing as a follow-on after creation.
- **Data mapping is judgement-based, not a script:** because the required mappings differ
  per DLM and aren't a fixed list, the step should teach the learner **how to find and
  resolve the warnings** (look at each DLM's right column, hover the ⚠️, map the named
  attribute) rather than list exact field-by-field mappings. Decide how to phrase this so
  it's actionable without being prescriptive — likely one worked example (Phone → E164, or
  Device → Advertiser Id) + the general "resolve all warnings using best judgement" rule.

---

<!--
Entry template:

### Change N — <short title>
**Status:** 🔵 Planned
**Location:** <section + approx line>

**Problem:**
<what's wrong / missing>

**Change needed:**
<specific change>

**Screenshot impact:** <if any>
**Notes / open questions:** <anything to confirm before applying>

---
-->

---

**Tracking started:** August 13, 2026
