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
