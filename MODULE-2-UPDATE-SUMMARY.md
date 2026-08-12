# Module 2 Update Summary — Segmentation

Change tracking log for **Module 2: Segmentation** (`modules/module-02-segmentation.html`).
Changes are documented here first, then applied to the module later.

---

## Status Legend
- 🔵 **Planned** — documented, not yet applied
- 🟡 **In Progress** — partially applied
- ✅ **Done** — applied and verified

---

## Pending Changes

### Change 1 — Add "Create New Segment" steps to Lab 1, Step 2
**Status:** ✅ Applied Aug 12, 2026 (field/DMO names pending org verification)
**Location:** Lab 1 → Step 2 "Create 'New Members' Segment" (around line 256–290)

**Problem:**
Step 2 currently jumps straight to entering segment criteria. It skips the actual
**New Segment** creation dialog that appears after clicking **New** in Step 1, so
learners don't know how to get to the segment canvas.

**Change needed:**
Insert the segment-creation steps at the top of Step 2's `step-content`, before the
`<strong>Criteria:</strong>` block. The dialog flow is:

1. Select **Use a Visual Builder**.
2. Select **Standard Segment**.
3. Click **Next**.
4. **Segment On:** Select **Profile Object → Loyalty Program Member**.
5. **Segment Name:** `New Members`
6. **Description:** `Members enrolled within the last 30 days`
7. Click **Next** to open the segment canvas.
8. Then proceed to add the filter criteria (existing content).
9. Accept the remaining defaults and click **Save**.

**Screenshot to add:**
- `mod2-step2-new-segment-dialog.jpg` — New Segment dialog showing "Use a Visual
  Builder" + "Standard Segment" selected, with Segment On = Profile Object /
  Loyalty Program Member and Segment Name = New Members.

**Notes:**
- Segment name changed from `NTO - New Members` to `New Members`. Existing
  "Segment Name" / "Description" lines in Step 2 become redundant once the numbered
  dialog steps are added — fold them into the new steps rather than duplicating.
- **Segment On** uses the **Profile Object** category → **Loyalty Program Member**.

---

### Change 2 — Add "Create New Segment" dialog steps to Step 4 (and Step 3)
**Status:** ✅ Applied Aug 12, 2026 (field/DMO names pending org verification)
**Location:** Lab 1 → Step 4 "Create 'Spring Challenge Eligible' Segment (Complex)"
(around lines 332–367). Step 3 "Gold Tier Members" (lines 295–329) has the same gap.

**Problem:**
Steps 3 and 4 both begin with "Click **New**" but then jump straight to Segment
Name / criteria — same gap as Step 2. Learners don't see the New Segment dialog
(Visual Builder → Standard Segment → Segment On) before the canvas.

**Change needed (resolves the open question from Change 1):**
- **Step 4 — confirmed by user:** build in the same New Segment dialog flow as
  Change 1 before the criteria:
  1. Select **Use a Visual Builder**
  2. Select **Standard Segment**
  3. Click **Next**
  4. **Segment On:** Profile Object → **Loyalty Program Member**
  5. **Segment Name:** `Spring Challenge Eligible` (drop the `NTO - ` prefix to
     match the Change 1 rename convention — confirm)
  6. **Description:** `Members eligible for Spring Hiking Challenge engagement trail`
  7. Click **Next** to open the segment canvas
  8. Then the existing rule-group criteria (Groups 1–3)
  9. Accept defaults, click **Save**
- **Step 3 — apply same for consistency** (user explicitly called out Step 4;
  Step 3 has the identical "Click New" pattern). Segment On = Loyalty Program
  Member, Name `Gold Tier Members`. Confirm before applying.

**Naming consistency:** if Step 2's segment is renamed `New Members` (no `NTO - `
prefix), apply the same drop to Steps 3 and 4 (`Gold Tier Members`,
`Spring Challenge Eligible`) — or keep the `NTO - ` prefix everywhere. Pick one
convention across all three segments.

**Screenshots to consider:**
- Reuse `mod2-step2-new-segment-dialog.jpg` for the dialog, or add per-step
  variants if the Segment Name differs visibly.

**Multi-DMO joins — Step 4 (confirmed by user):**
Step 4's rule groups pull attributes from **multiple DMOs**, not just Loyalty
Program Member, so the criteria steps must show how to traverse/join related DMOs
in the Segment Builder (not flat fields on a single DMO):
- **Rule Group 1 (Tier):** `MemberTier` — lives on a **separate tier DMO**, not
  Loyalty Program Member (see `MODULE-1-UPDATE-SUMMARY.md` Change 1 and query-tracker
  Change 3). Must be reached via the related DMO.
- **Rule Group 2 (Points):** `PointsBalance` — likewise on a **separate
  points/currency DMO**. Reach via related DMO.
- **Rule Group 3 (Exclusion):** already navigates to the **Loyalty Promotion
  Enrollment** related DMO (`PromotionName Not Equals`) — this one already models
  the related-DMO pattern; use it as the template for Groups 1 and 2.

**Change needed for the criteria steps:**
- Rewrite Groups 1 and 2 to first navigate to the correct related DMO (as Group 3
  already does) before selecting the field, rather than implying MemberTier /
  PointsBalance sit on Loyalty Program Member.
- Add a note/callout explaining the segment spans multiple related DMOs and how the
  Segment Builder joins them (relationship path / related attributes).
- **Confirm the exact DMO names and relationship paths** for tier and points against
  the live org before writing the steps (blocked on the same schema verification as
  query-tracker Change 3). Step 3 (Gold Tier) uses `MemberTier` + `MemberStatus` and
  has the same multi-DMO issue — reconcile together.

---

## Already Applied (via prior commits / shared updates)

- **Navigation bar:** Added links to Modules 4–8 in the top nav (matches all other
  modules). Present in current working tree diff.

---

**Module:** Module 2 — Segmentation
**File:** `modules/module-02-segmentation.html`
**Tracking started:** July 16, 2026
