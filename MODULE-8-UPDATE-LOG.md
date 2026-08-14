# Module 8 Update Log — Analytics & Reporting

Change-tracking log for **Module 8: Analytics & Reporting**
(`modules/module-08-analytics.html`). Documented here first, applied later.

## Status Legend
- 🔵 **Planned** — documented, not yet applied
- 🟡 **In Progress** — partially applied
- ✅ **Done** — applied and verified

---

## Pending Changes

### Change 1 — Refocus analytics on real OOTB tooling (Marketing Performance / Tableau Next) and the Loyalty use case
**Status:** 🔵 Planned
**Module/File:** Module 8 (`modules/module-08-analytics.html`) — most of the module.

**User's steer:**
> "Analytics and reporting is not very email / MC Next focused but Loyalty. Can you look at
> this content to set up Email reporting and then look at library of content to update as
> we can for Loyalty use case?"

**Interpretation / two goals:**
1. Ground the module in the **real, current OOTB reporting tooling** that the Module 1
   setup actually installs — **Marketing Performance app** with embedded **Tableau Next**
   dashboards — instead of invented generic dashboards. (Email/engagement reporting is the
   OOTB path via the Marketing Engagement / SMS / Flow Reports analytics packages.)
2. Then extend/adapt the reporting **for the Loyalty use case** as far as the tooling
   actually supports (loyalty metrics, tier progression, lift) — flag where OOTB stops and
   custom/Tableau/Data Cloud query work begins, rather than presenting fabricated numbers
   as built-in.

**Problems in current Module 8 (audit):**
- **Invented UI/paths:** "Analytics" in left nav → "Marketing Performance" (Step 1),
  "Custom Reports → Create Report" (Lab 2), "Export → PDF/CSV/PowerPoint" (Lab 2 Step 5),
  "Journeys tab" inside Marketing Performance. These don't match the real path
  (**Setup → Marketing Cloud → Marketing Features → Marketing Performance**; dashboards are
  embedded **Tableau Next**; surfaces are the Marketing Performance tab + Performance tab on
  campaign/content — see Module 1 log Change 2).
- **Fabricated metrics presented as real dashboard output:** 2.8M sends, 28% open, per-email
  open/click rates, device %s, region %s, enrollment counts, tier counts, trail completion
  %s, loyalty-lift figures. With an empty/~200-member test org (backlog Change 5) none of
  these will appear — needs reframing as illustrative examples, not "you'll see X".
- **Loyalty-lift SQL is not ssot__/quoted** and uses likely-wrong joins
  (`LoyaltyProgramMember.ContactId`, `Order.CustomerId`) — same class of issue as
  QUERY-SYNTAX-FIXES.md. If kept, must be corrected + verified against org, or clearly
  marked illustrative.
- **No mention of Marketing Performance / Tableau Next** anywhere, despite that being the
  actual OOTB analytics surface set up in Module 1.
- **No mention of the analytics packages** (Marketing Engagement, SMS, Flow Reports) or
  **Scoring Rules** (Unified Individual / Unified Account Profile) that Module 1 setup
  installs — these are the real engagement-reporting foundation.

**Change needed (high level — refine before applying):**
- **Lab 1 (Email/engagement reporting):** rebuild around the **Marketing Performance** app
  and its embedded **Tableau Next** dashboards. Correct the navigation/paths. Reference the
  three surfaces (Marketing Performance tab, Performance on campaign, Performance on
  content). Note the analytics packages that power engagement/SMS/flow reports. Frame all
  numbers as illustrative.
- **Loyalty use case:** keep loyalty metrics (enrollment, tier progression, trail
  completion, loyalty lift) but distinguish **what's OOTB** (Marketing Performance /
  Tableau Next, Scoring Rules) from **what needs custom work** (Data Cloud queries /
  Tableau). Fix or clearly flag the loyalty-lift query.
- Reconcile numbers/counts with backlog **Change 5** (empty org / ~200 test members) and
  the demo-data qbrix that's "anticipated" (per Module 1 setup notes) — analytics may not
  be demoable with data yet; say so instead of showing fake dashboards.

**Dependencies / cross-refs:**
- Module 1 log **Change 2** (Marketing Performance install, analytics packages, scoring
  rules) — the setup that makes this module's tooling real.
- **QUERY-SYNTAX-FIXES.md** (ssot__ + verified fields) for the loyalty-lift SQL.
- Backlog **Change 5** (member counts / empty org).
- `project_pending_org_verification.md` (DMO/field names).

**Open questions for user:**
- How much to keep the "story" numbers as illustrative vs. strip them? (Tie to Change 5.)
- Is Tableau Next the confirmed dashboard tech to name throughout?
- Should Lab 2's "Custom Reports" builder be replaced with Data Cloud query + Tableau, or
  removed until the demo-data qbrix lands?

---

**Tracking started:** August 14, 2026
