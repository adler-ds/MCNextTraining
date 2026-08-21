# Updates Backlog — Round 2

Fresh set of notes for upcoming changes, started **August 14, 2026**. Documented here
first, applied later — **nothing in this file is applied yet.**

> Prior rounds:
> - `UPDATES-BACKLOG.md` — Changes 1–6 (tier criteria, tier labels, Module 6 wiring,
>   PointsBalance removal, member-count/empty-org DEFERRED, Send Time Optimization).
> - `MODULE-1-UPDATE-LOG.md` — Module 1 setup sequence, data-kit path, IR ruleset creation.
> - `MODULE-8-UPDATE-LOG.md` — Analytics refocus (on hold pending 3 open questions).

## Status Legend
- 🔵 **Planned** — documented, not yet applied
- 🟡 **In Progress** — partially applied
- ✅ **Done** — applied and verified

---

## Pending Changes

### Change 1 — M2 L1 Step 2: add the Push/Schedule config screen to the New Members dialog
**Status:** ✅ Applied Aug 14, 2026 — Steps 2/3/4 dialogs now end with "Click Next, accept
defaults (Standard Push, Do Not Schedule), then Save to open the canvas"; Step 2 gained the
"why we don't schedule in training" note (Steps 3/4 reference it). Step 2 filter changed to
operator **Last Number Of Days** / value **30**; pro-tip + "publish later" line reconciled.
Screenshot caption "within 30 days" left as-is (still accurate). Open question re: Lab 2
narrative consistency still noted below.
**Module/File:** Module 2 — Segmentation (`modules/module-02-segmentation.html`)
**Location:** Lab 1 → Step 2 "Create 'New Members' Segment" — the numbered New Segment
dialog `<ol>` (currently lines ~264–272). Item **6** is the **Description**; item **7** is
currently "Click Next to open the segment canvas."

**Problem / gap:**
The dialog jumps straight from Description → "Click Next to open the segment canvas." There's
actually a **publish/schedule configuration screen** in between that the steps skip.

**Change needed — after item 6 (Description):**
1. Click **Next** and **accept the defaults**: **Standard Push** and **Do Not Schedule**.
2. Then click **Save** to open the segment canvas.

(So the current item 7 "Click **Next** to open the segment canvas" is wrong — the final
action is **Save**, not Next, and it follows the Standard Push / Do Not Schedule screen.)

**Apply this "getting to canvas" flow to ALL segment-creation dialogs (confirmed):**
The same correction applies throughout Lab 1 wherever the dialog ends with "Click Next to
open the segment canvas":
- **Step 2** (New Members) — item 7
- **Step 3** (Gold Tier Members) — dialog `<ol>` currently lines ~316–324, last item
- **Step 4** (Spring Challenge Eligible) — dialog `<ol>` currently lines ~367–376, last item

In each, replace the final "Click **Next** to open the segment canvas" with:
**"Click Next, accept the defaults (Standard Push, Do Not Schedule), then click Save to open
the segment canvas."** Add the training rationale note (below) at least once (Step 2);
reference it or repeat briefly in Steps 3/4.

**Also fix the filter criteria (same Step 2):**
The enrollment-date filter (currently lines ~283–288) should use the relative-date operator,
not a computed value:
- DMO: **Loyalty Program Member**
- Field: **EnrollmentDate**
- Operator: **Last Number Of Days** _(was "Greater than or equal to")_
- Value: **30** _(was `TODAY() - 30`)_

Reconcile the Step 2 pro-tip + screenshot caption ("TODAY() - 30", "within 30 days")
with this — the operator does the relative windowing, so the value is just `30`.

**Note to add (training rationale):**
> If this were a segment that changes over time, it **should be scheduled** to refresh.
> For this training we will **not** schedule it — leaving it unscheduled keeps the data
> from going stale and prevents the segment from losing all its members after 30 days
> (which would otherwise happen as the relative `TODAY() - 30` window moves).

**Notes / open questions:**
- ✅ Resolved: the Push/Schedule → Save flow applies to **all three** creation dialogs
  (Steps 2, 3, 4) — see "Apply this 'getting to canvas' flow to ALL segment-creation
  dialogs" above.
- Reconcile with **Lab 2** (which is all about publishing + refresh schedules) — this note
  says "don't schedule at creation"; Lab 2 later has them publish. Make sure the narrative
  is consistent (create unscheduled now, publish/schedule decisions covered in Lab 2).
- Slight tension with the existing Step 2 pro-tip ("relative dates keep the segment
  current") — the new note explains why we deliberately DON'T schedule in training even
  though the relative date would otherwise age members out.

**Screenshot impact:** consider a screenshot of the Standard Push / Do Not Schedule screen
(e.g. `mod2-step2-push-schedule.jpg`).

---

### Change 2 — Add sending-domain / email authentication setup (MISSING from modules)
**Status:** ✅ Applied Aug 17, 2026 — added Module 1 Lab 1 **Step 8 "Configure Domain
Settings & Email Authentication"** (Setup Assistant → Email Setup; add sending domain +
SPF/DKIM/DMARC; From/Reply-To; verify). Includes the PDF's subdomain best-practice
(rewards.nto.com example) and DNS-propagation pro-tip. Checkpoint + success criteria updated.
Grounded in Admin Onboarding PDF ("Domain Settings and DNS Configuration"; "Email Setup —
DNS, Physical Address (CAN-SPAM)"). Screenshot placeholder `mod1-step8-domain-settings.jpg`.
**Verify:** exact MC Next UI path/labels for domain add + record entry against the org.
**Module/File:** Likely **Module 1** admin-setup sequence (or wherever the email channel is
configured); ties into `MODULE-1-UPDATE-LOG.md` Change 2 (Basic Settings → "Add default
email channel").

**Gap found (Aug 17, 2026):**
There are **no steps** in any HTML module for setting up a **sending domain / email
authentication** (SPF, DKIM, DMARC, from/reply-to address, DNS). Confirmed by grepping all
modules — zero hits.
- The only related content is `modules/module-01-getting-started.md` (lines 25–26: "Sender
  authentication (SPF, DKIM)", "Reply-to and from addresses") — but that's a **legacy
  MC-on-Core outline** (Email Studio / Journey Builder), NOT the MC Next lab modules. It's
  not real domain-setup content and doesn't belong to the current training flow.

**It IS in the library — so we can add it:**
- `referance docs/reference-sources.md:30` — the **Admin Onboarding** video+PDF explicitly
  covers *"Email setup including domain management and DNS configuration."*
- Source PDF: `referance docs/Getting Started_ Marketing Cloud Growth & Advanced _ Admin
  Onboarding.pdf` (39MB).
- `overview/key-concepts-summary.md:224` lists *"Configure email settings (SPF, DKIM)"*
  under Channel Setup, and line 212 lists "Add default email channel" as a Basic Settings
  prereq.

**Change needed:**
- Add a domain / email-authentication setup step to the Module 1 admin sequence (after /
  alongside "Add default email channel"). Pull the specifics (where domain management lives
  in MC Next Setup, SPF/DKIM/DMARC records, from/reply-to configuration, verification) from
  the Admin Onboarding PDF.
- Explain *why* it matters: deliverability + sender authentication; unverified/unauthenticated
  domains hurt inbox placement and can block sends.

**Notes / open questions:**
- Extract the exact MC Next UI path + record types from the Admin Onboarding PDF before
  writing (don't invent DNS/console steps).
- Confirm whether this is admin-only setup (Module 1) or should be referenced again in the
  email/content module.

---

### Change 3 — Add "Set up Company Information" reminder + why it matters
**Status:** ✅ Applied Aug 17, 2026 — added Module 1 Lab 1 **Step 7 "Set Up Company
Information"** (Setup → Company Information; confirm physical address, locale, time zone,
currency) with the CAN-SPAM / deliverability "why it matters" note. Cross-linked from the
Step 4 Org ID lookup ("you'll return to this page in Step 7"). Checkpoint + success criteria
updated. Grounded in PDF ("Your physical address in Marketing Cloud is linked to your company
information in the base CRM"). Screenshot placeholder `mod1-step7-company-information.jpg`.
**Verify:** confirm exactly which fields MC Next pulls into the email footer.
**Module/File:** **Module 1** (`modules/module-01-data-foundation.html`) — currently only a
passing mention at lines ~469–470 (search Company Information to grab the Org ID for the
data-kit deploy).

**Gap found (Aug 17, 2026):**
Company Information is referenced **only** as a way to find the Org ID — there is **no step**
that has the learner **verify/complete Company Information**, and **no explanation of why it
matters**.

**Why it matters (to capture in the step):**
- The org's **physical mailing address** in Company Information flows into email footers and
  is required for **CAN-SPAM / anti-spam compliance** (Module 5 line ~812 already flags the
  unsubscribe-link requirement but not the physical address).
- Default org locale / time zone / currency and the org-wide email context also derive from
  Company Information and affect sends and scheduling.

**Change needed:**
- Add a short setup step (early in Module 1) to review/complete **Company Information**
  (Setup → Company Information): confirm the org's physical address, default locale, time
  zone, and currency — with a note on the compliance/deliverability importance.
- Cross-link the existing Org ID lookup (lines ~469–470) to this step instead of introducing
  Company Information cold there.

**Library check:** not found as a discrete topic in `reference-sources.md`; likely folded
into the Admin Onboarding PDF's setup flow — verify there, otherwise this is net-new content
we author (it's standard Salesforce Setup, so low risk).

**Notes / open questions:**
- Confirm which fields MC Next actually pulls into email footers (physical address for
  CAN-SPAM) vs. what's just general org config, so the "why" is accurate.

---

### Change 4 — Add Email Direct Send API content to Module 6
**Status:** ✅ Applied Aug 21, 2026 — Module 6 (`modules/module-06-flows.html`), after Lab 3.
Added a **Core Lesson** "Sending Beyond Flows: The Email Direct Send API" (what it is / why /
how it differs / when to use vs. a Flow / how it works, with an NTO shipping-confirmation
example + Transactional Order Triggers mention) AND an **optional Advanced Hands-On** section
(External Client App + `sfap_api` JWT, create `ListEmail` send definition, POST to
single/bulk/preview endpoints with `individualId`/`recipients`, rate-limit note). New CSS for
`.comparison-table` + `.reference-note` in `styles/training.css`.

**Grounded in:** Aug '26 Agentforce Marketing Release Deck (GA Aug '26) + the 4 API docs now
in `reference-sources.md` (Connect/auth, Send Transactional Messages guide, Send Definitions
ref, Direct Email Send ref). Endpoints/base URL/attributes pulled from the Send Transactional
Messages guide.

**Verify against org:** exact External Client App / OAuth setup UI labels; confirm the
`sfap_api` scope + endpoint paths current at the trainee's release; whether High Scale Actions
/ Direct Email Send are enabled in the training org (API returns 403 if not).

**Deferred (separate future item):** deeper **Transactional Order Triggers** hands-on (Data
360 + Marketing Triggers Admin permission set + DMO field mapping) — ✅ now built as Change 5.

---

### Change 5 — Add Transactional Order Triggers hands-on to Module 6
**Status:** ✅ Applied Aug 21, 2026 — Module 6 (`modules/module-06-flows.html`), new optional
**Advanced Hands-On** section placed right after the Direct Send API hands-on (so the two Aug
'26 GA transactional features sit together). Covers: What You Need to Know (3 strategy-cards:
what it is / why / how it differs, real-time order/shipment/return off the Data Cloud model),
NTO shipment+return example, prerequisites (Data 360, **Marketing Triggers Admin** permission
set, mapped DMO fields, published content), **Step 1** map required DMO fields (order identity
+ Unified Individual ref, event type/status, payload fields — with the "resolve every mapping
warning using best judgement" caveat mirroring Module 1 IR), **Step 2** build the
event-triggered Flow with a Decision branch per event type (shipment → tracking email; return
→ return-received; order status → optional), **Step 3** activate/connect + test with a live
shipment then return event, pro-tip pairing it with the Direct Send API, and a hands-on
checkpoint. div balance 226=226.

**Grounded in:** Aug '26 Agentforce Marketing Release Deck (Transactional Order Triggers slide
— GA Aug '26; two config steps "Map Required DMO Fields" + "Build and Connect the Flow";
requires Data 360 + Marketing Triggers Admin permission set + mapped DMO fields) plus the Send
Transactional Messages guide.

**Verify against org:** exact order-event DMO/field names and the event-trigger source UI
labels; confirm the Marketing Triggers Admin permission set name at the trainee's release.

---

<!--
Entry template:

### Change N — <short title>
**Status:** 🔵 Planned
**Module/File:** <module + file path>
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

**Tracking started:** August 14, 2026
