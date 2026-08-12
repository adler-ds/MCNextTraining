# Query Syntax Fixes — `ssot__` prefix + quoted identifiers

Cross-cutting tracker for correcting all Data Cloud SQL query examples across modules.

> **APPLIED Aug 12, 2026:** Changes 1–3 applied to Modules 1 & 4. Table names now use
> quoted `ssot__..._dlm`; every query step opens the Query Editor app + new query for
> Training; tier/points queries rewritten with related-DMO JOINs. **Still blocked on org
> verification:** exact DMO names (member-tier, points/currency), field names, and join
> keys are marked with ⚠️ placeholders in the HTML and must be confirmed against the live
> org, then finalized.

## Status Legend
- 🔵 **Planned** — documented, not yet applied
- 🟡 **In Progress** — partially applied
- ✅ **Done** — applied and verified

---

## The Rule

In the Data Cloud **Query Editor**, DMO API names are prefixed with **`ssot__`** and
wrapped in **double quotes**.

- **Before:** `FROM LoyaltyProgramMember__dlm`
- **After:** `FROM "ssot__LoyaltyProgramMember__dlm"`

**Open questions to confirm before applying:**
- Do **field/column** names also take the `ssot__` prefix and quotes
  (e.g. `"ssot__MemberTier__c"`), or only the table (DMO) names? Verify in the
  Query Editor before rewriting SELECT/WHERE/GROUP BY/ON clauses.
- Confirm exact quoting for table **aliases** and alias-qualified columns in JOINs
  (e.g. `i.Id` / `lpm.IndividualId__c`).

---

## Change 2 — Add "open Query Editor app" preamble before every query step 🔵 Planned

Before each query step, add an instruction telling the learner to:
1. Go to the **Query Editor** app.
2. Create a **new query** for **Training**.

This replaces / augments the current vague wording (e.g. "navigate to **Query** in the
left sidebar", "Go back to the Query interface"). Apply consistently to every query
block listed below.

**Confirm before applying:** exact navigation to the Query Editor app (App Launcher →
"Query Editor"?) and the precise "new query" action label, so wording matches the UI.

---

## Affected Query Blocks

### Module 1 — `modules/module-01-data-foundation.html` 🔵 Planned
- **L567–569:** `FROM UnifiedIndividual__dlm` → `FROM "ssot__UnifiedIndividual__dlm"`
- **L673–676:** `FROM LoyaltyProgramMember__dlm`, `WHERE MemberTier__c = 'Gold'`
- **L690–692:** `FROM LoyaltyProgramMember__dlm`, `GROUP BY MemberTier__c`
- **L708–717:** `FROM Individual__dlm i JOIN LoyaltyProgramMember__dlm lpm ON i.Id = lpm.IndividualId__c`
  - Note: this block also intersects the pending Lab 2 DMO-attribution fix (Member
    Tier / Points Balance live on separate DMOs — see `MODULE-1-UPDATE-SUMMARY.md`,
    Pending Change 1). Reconcile both changes together.

### Module 4 — `modules/module-04-consent.html` 🔵 Planned
- **L381–388:** `FROM CommunicationSubscriptionConsent__dlm`
- **L574–581:** `FROM CommunicationSubscriptionConsent__dlm`, `WHERE IndividualId = 'YOUR_TEST_INDIVIDUAL_ID'`

### Other modules
- Modules 2, 3, 5–8: no `__dlm` query examples found at time of writing. Re-grep
  (`FROM .*__dlm`, `ssot__`) before final pass in case queries are added later.

---

## Change 3 — Validate every queried field against the real DMO schema 🔵 Planned

**Every query must be checked field-by-field: only include columns that actually exist
on the DMO being queried.** Some current queries reference fields that are NOT on the
DMO.

**Known-wrong (confirmed by user):**
- `MemberTier__c` is **NOT** on the **LoyaltyProgramMember** DMO. (Tier lives on a
  separate DMO — see `MODULE-1-UPDATE-SUMMARY.md` Pending Change 1.) Same suspicion for
  `PointsBalance__c`.

**Full field inventory to verify (per query):**

Module 1 — `modules/module-01-data-foundation.html`
- **L567–569** `UnifiedIndividual__dlm`: `Id`, `FirstName`, `LastName`, `Email`
- **L673–676** `LoyaltyProgramMember__dlm`: `MemberTier__c` ❌, `PointsBalance__c` ❓,
  `EnrollmentDate__c`; `WHERE MemberTier__c = 'Gold'` ❌
- **L690–692** `LoyaltyProgramMember__dlm`: `MemberTier__c` ❌, `COUNT(*)`;
  `GROUP BY MemberTier__c` ❌
- **L708–717** JOIN `Individual__dlm i` × `LoyaltyProgramMember__dlm lpm`:
  `i.FirstName`, `i.LastName`, `i.Email`, `lpm.MemberTier__c` ❌, `lpm.PointsBalance__c` ❓;
  `ON i.Id = lpm.IndividualId__c` (verify join key exists)

Module 4 — `modules/module-04-consent.html`
- **L381–388** `CommunicationSubscriptionConsent__dlm`: `IndividualId`, `Channel`,
  `ConsentStatus`, `ConsentDate`, `SubscriptionName`
- **L574–582** `CommunicationSubscriptionConsent__dlm`: `IndividualId`, `Channel`,
  `ConsentStatus`, `ConsentDate`, `ConsentSource`; `WHERE IndividualId = ...`;
  `ORDER BY ConsentDate DESC`

Legend: ❌ confirmed not on DMO · ❓ suspected wrong, verify · (unmarked) verify exists.

**How to verify:** open each DMO in Data Cloud Data Model (or the Query Editor field
picker) and confirm each column name + its correct DMO. For fields that belong to a
different DMO (tier, points), either drop them or rewrite the query to source them from
the correct DMO (may require a JOIN). No repo schema file exists — reference docs are
PDFs in `referance docs/`, so validation must be done against the live org.

---

**Tracking started:** August 12, 2026
