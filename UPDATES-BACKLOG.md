# Updates Backlog

Fresh set of notes for upcoming changes. Documented here first, applied later — nothing
in this file is applied yet.

## Status Legend
- 🔵 **Planned** — documented, not yet applied
- 🟡 **In Progress** — partially applied
- ✅ **Done** — applied and verified

---

## Pending Changes

### Change 5 — Correct member counts: org is EMPTY, ~200 test members (DEFERRED — do later)
**Status:** 🔵 Planned — **user said do this LATER**, not now. Cross-cutting.
**Scope:** All modules + overview content.

**Reality vs. current content:**
- The org does **NOT** have 500K members — it will be **empty**.
- A **separate step** (to be written) will **load ~200 members** to test with.
- So all "500K", derived segment sizes (50K/75K/120K), "2M Person Accounts", and
  sync-time claims based on large volume are wrong and must be reconciled to the
  ~200-member test reality.

**Inventory of hardcoded counts to update (found Aug 13, 2026 — re-grep before applying):**
- `module-01-data-foundation.html`:
  - L69 stat-number **500K**
  - L250 "500K NTO Rewards members unified"
  - L358 pro-tip "NTO's **2M Person Accounts**, expect 1–2 hours"
  - L499 "NTO has **500K** loyalty members"
  - L520 pro-tip "1–2 hours for NTO's **500K** loyalty members"
- `module-02-segmentation.html`:
  - L61 "all **500K** members"
  - L73 stat-number **120K**
  - L298 "approximately **50,000** members"
  - L353 "approximately **75,000** Gold members"
  - L483 "5–10 minutes for **50K** members"
  - L859 "New Members (50K…)", L860 "Gold Tier (75K…)", L861 "Spring Challenge (120K…)"
- `module-03-data-graphs.html`:
  - L73 stat-number **500K**
  - L196 "500K send = 500K API calls" (illustrative — may keep as an example, confirm)
- `module-04-consent.html`:
  - L69 stat-number **500K**
- `module-06-flows.html`:
  - L415 "**~120K members**" (Spring Challenge segment description)
- `module-07-loyalty-integration.html`:
  - L704 "max **100K** members at a time" (batch guidance — likely keep, confirm)
- `module-08-analytics.html`:
  - L635 "hit **100K** members by Q4" (forward-looking example — likely keep, confirm)

**Notes / open questions (resolve when we do this):**
- Decide the target narrative: keep NTO's *story* as a large brand (500K) but make the
  *lab environment* clearly a ~200-member test org? Or change the story numbers too?
  (Segment preview counts like "≈50,000" MUST change — with ~200 members they'd be
  tiny/zero.)
- Some counts are illustrative math (L196 API calls, L635 projection, L704 batch limit)
  and may be fine to leave — confirm case by case.
- Add the new **"load ~200 test members"** step (likely Module 1) and make downstream
  preview counts consistent with it.
- Also fix `MODULE-1-UPDATE-SUMMARY.md` references to "500K loyalty members will sync"
  when this is applied.

---

### Change 1 — Gold Tier segment: exact tier-criteria steps (resolves a ⚠️ placeholder)
**Status:** ✅ Applied Aug 14, 2026 — Module 2 Step 3 now uses Attributes → Loyalty Member
Tier → drag Name → Is Equal To → "Gold Tier". Dropped the unverified MemberStatus=Active
rule and the "active" wording in the description (only tier criteria was confirmed).
**Module/File:** Module 2 — Segmentation (`modules/module-02-segmentation.html`)
**Location:** Step 3 "Create 'Gold Tier Members' Segment" — the tier criteria block
(currently ~line 330–334, the `⚠️ [verify exact DMO name in org]` placeholder).

> ⚠️ **Module-number check:** user said "Mod 3, step three for Gold Tier members," but
> the Gold Tier Members segment is built in **Module 2, Step 3**. Logged against Module 2.
> Confirm if Module 3 was actually intended.

**Problem:**
The tier criteria in Step 3 uses a placeholder ("Navigate to the related member tier
DMO", field `MemberTier`, value `Gold`) pending org verification. User has now provided
the real Segment Builder steps.

**Change needed — replace the placeholder tier steps with:**
1. Select **Attributes**.
2. Under **Related Data Model Objects**, select **Loyalty Member Tier**.
3. Drag **Name** to the canvas.
4. Set **Operator** to **Is Equal To**.
5. Set **Value** to **Gold Tier**.

**Confirms / updates pending org-verification items:**
- Related tier DMO display name = **Loyalty Member Tier** (was placeholder
  `ssot__LoyaltyMemberTier__dlm`).
- Tier field = **Name** (not `MemberTier`).
- Tier value = **"Gold Tier"** (not "Gold").

**Ripple effects to reconcile when applying:**
- Module 2 Step 4 (Spring Challenge) Rule Group 1 uses the same tier DMO — update its
  tier steps the same way (values "Silver Tier" / "Gold Tier"? — confirm exact tier
  value labels).
- Module 1 Lab 2 queries reference a placeholder tier DMO/field/value — update the
  query `ssot__` DMO name, field (`Name`?), and `WHERE`/join value to match. Confirm the
  DMO **API name** (query editor) vs. the **display name** "Loyalty Member Tier".
- Update `QUERY-SYNTAX-FIXES.md` and `project_pending_org_verification.md` (memory) once
  applied.

**Screenshot impact:** consider a screenshot of the Attributes → Related Data Model
Objects → Loyalty Member Tier → drag Name flow.

---

### Change 2 — Standardize tier value labels in segment creation
**Status:** ✅ Applied Aug 14, 2026 — Module 2 Step 3 (Gold Tier) and Step 4 Rule Group 1
(Silver Tier OR Gold Tier) + eligibility prose now use the "X Tier" labels. Left the
conceptual/data-model prose (lines ~149–197, 617–655) as-is per the segment-creation scope.
**Module/File:** Module 2 — Segmentation (`modules/module-02-segmentation.html`)
**Location:** Everywhere a tier value is entered in segment criteria — Step 3 (Gold Tier)
and Step 4 (Spring Challenge, Rule Group 1).

**Change needed:**
All tier values used in segment creation must be the full tier names with the "Tier"
suffix:
- **"Bronze Tier"**
- **"Silver Tier"**
- **"Gold Tier"**

Not bare "Bronze" / "Silver" / "Gold".

**Where to apply:**
- Step 3 (Gold Tier): value = **Gold Tier** (already in Change 1).
- Step 4 (Spring Challenge) Rule Group 1: **Silver Tier** OR **Gold Tier** (currently
  shows "Silver" / "Gold").
- Any other tier references in Module 2 segment steps.

**Notes / open questions:**
- Scope confirmed as **segment creation**. Leave non-segment tier references (e.g.
  descriptive prose, "Bronze/Silver/Gold" in data-model overviews, Module 1/3 query
  examples) as-is unless separately confirmed — the "Tier" suffix is the picklist/segment
  **value**, which may differ from how tier is described in narrative text.
- Confirm whether Module 1 Lab 2 query values and Module 3 references should also use the
  "X Tier" form (tie to the API-name-vs-display-name question in Change 1).

---

### Change 4 — Remove PointsBalance criterion from "Spring Challenge Eligible" segment
**Status:** ✅ Applied Aug 12, 2026
**Module/File:** Module 2 (`module-02-segmentation.html`) Step 4; Module 6 lab intro.

**Reason:** `PointsBalance >= 1000` is redundant — it's inferred by requiring Silver or
Gold tier (Bronze members are excluded, and the points threshold adds nothing on top of
the tier filter).

**Applied:**
- Module 2 Step 4: removed the points eligibility line, deleted **Rule Group 2 (Points)**
  entirely, renumbered the exclusion group to **Rule Group 2**, and updated the note +
  screenshot caption to drop "points".
- Module 6 new lab intro (line ~415): removed "PointsBalance >= 1000" from the segment
  description.

**Follow-ups:** the points/currency DMO is no longer needed for this segment, but the ⚠️
placeholder points/currency DMO still appears in the **Module 1 Lab 2 queries** (a
different teaching example) — leave those unless separately confirmed.

---

### Change 6 — Add Einstein Send Time Optimization (STO) to the training
**Status:** ✅ Applied Aug 14, 2026 — Module 6 Lab 1B: new Step 4 "Optimize Send Times with
Einstein" (enable via Setup → "Send Time" → Einstein Send Time Optimization; 72-hr window;
apply STO to the invitation + reminder emails). Activate renumbered to Step 5, checkpoint
updated. Module 1 got a call-out pointing to Module 6. **Note:** the "apply STO in the email
send settings" UI wording is best-effort — verify the exact label/location in the send config
against the org.
**Module/File:** **Module 6 (Flows)** (`modules/module-06-flows.html`) — both the *enable*
and the *use* steps live here, in a later lab, applied to the **Spring Challenge Invitation**
journey. Module 1 (`module-01-data-foundation.html`) gets a **one-line call-out** pointing
to Module 6 (STO is an advanced engagement concept, not foundations setup).

**Decision (Aug 14, 2026):** STO does **NOT** go in Module 1 as admin setup — it's a more
advanced concept and belongs with sends/journeys. Not worth a new module (would renumber
Modules 7/8). Enable + use are kept together in a later Module 6 lab. Usage attaches to the
**Spring Challenge Invitation** journey only (not the welcome series).

**User ask:**
> "We should look at how to use Einstein Send Time Optimization in the training."

**Part A — Admin setup step (confirmed copy from user):**
> **11. Enable Send Time Optimization**
> In Setup, search for **"Send Time"** and click **"Einstein Send Time Optimization"** under
> **"Einstein for Marketing"**.
> Click **"Enable"** (button changes to **Deactivate** once enabled).
> The status will stay **"In Progress" for 72 hours**.

- Path: **Setup → search "Send Time" → Einstein Send Time Optimization** (under **Einstein
  for Marketing**).
- This is step **"11."** in the user's running setup numbering — slots into the Module 1
  admin-setup sequence (after Marketing Performance / Analytics Packages / Scoring Rules in
  MODULE-1-UPDATE-LOG.md Change 2).
- **Call out the 72-hour "In Progress" window** — the model needs time to train, so STO
  won't be usable in a send immediately after enabling. This matters for demo/lab timing:
  enable it early (day 1 of setup) so it's ready by the time learners reach the send/flow labs.

**Part B — Usage in the training (needs design — open):**
Enabling STO is only half of it; the user explicitly wants **"how to USE"** it. Need to
find where an email send is configured (send timing / scheduling option) and add a step
showing the learner selecting **Send Time Optimization** instead of a fixed send time.
- Candidate locations: Module 6 (Flows — the journey email activities, e.g. the Welcome
  series or the Spring Challenge Invitation journey) and/or Module 5 (Content Builder / email
  send setup).
- Tie to the Loyalty use case: STO is a natural fit for the Spring Challenge Invitation and
  welcome-series sends — "send each member at their individual most-likely-to-engage time."
- Verify the exact UI: where the STO option appears in the MC Next send/flow config, what
  it's labeled, and any prerequisites (72-hr training complete, engagement data present —
  note the empty/~200-member org, Change 5, may mean no real engagement data to train on).

**Screenshot impact:** `mod1-stepN-enable-sto.jpg` (setup enable screen); usage screenshot(s)
in the send/flow config wherever Part B lands.

**Notes / open questions:**
- Confirm which module(s) get the *usage* steps (Module 6 vs. Module 5 vs. both).
- Does STO need engagement history to function? If the test org is empty (Change 5), the
  demo may only be able to *show the setting*, not demonstrate optimized send times — flag
  the same "anticipated demo-data qbrix" caveat used in the Module 8 review.
- Cross-ref MODULE-1-UPDATE-LOG.md Change 2 (the admin-setup sequence this step joins).

---

### Change 3 — Wire "Spring Challenge Eligible" segment into Module 6 (Flows)
**Status:** ✅ Applied Aug 12, 2026 (background agent)
**Module/File:** Module 6 — Flows (`modules/module-06-flows.html`)

**Problem (the disconnect):**
Module 2 builds the **Spring Challenge Eligible** segment (~120K members: Silver/Gold
tier AND points ≥ 1000 AND NOT already enrolled in the Spring Hiking Challenge; daily
8am refresh so enrollees drop out) and explicitly promises: *"In Module 6 you'll build
journeys that trigger off these segments."* But Module 6 never uses it — Lab 1 uses the
**New Members** segment (welcome series) and Lab 2 is **event-triggered** on a "Trail
Started" event. There is no segment-triggered **invitation** journey for the eligibility
segment that was purpose-built to invite members into the challenge.

**Objective of the segment (for reference):**
Audience for a Spring Hiking Challenge *invitation* campaign — high-value members who
qualify but haven't joined yet. The daily refresh + Rule Group 3 exclusion means once a
member enrolls they leave the segment (no repeat invites).

**Change being made:**
Add a **segment-triggered "Spring Challenge Invitation" journey** to Module 6 that uses
the Spring Challenge Eligible segment, and connect the narrative loop:
segment (Mod 2) → invitation journey (this) → member starts trail → event-triggered
trail-promotion flow (existing Lab 2). Update the module intro/scenario, labs overview,
success criteria, checkpoint, and summary to mention it.

**Constraints given to the agent:**
- Match existing HTML structure/classes (`lab-step`, `step-header`, `step-number`,
  `screenshot`, `key-insight`, `pro-tip`, `lab-checkpoint`).
- Prefer appending a new Lab (avoid renumbering existing Lab 2/3 and their screenshot
  IDs). Use `mod6-lab4-*` screenshot naming with `onerror` placeholder pattern.
- Use segment name **Spring Challenge Eligible** (no `NTO -` prefix) and tier value
  labels **Silver Tier / Gold Tier** (per Change 2). Don't invent DMO/field API names.

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

**Tracking started:** August 12, 2026
