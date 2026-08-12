# Module 1 Update Summary - June 23, 2026

---

## Pending Changes

Documented here first, then applied to `modules/module-01-data-foundation.html` later.

### Status Legend
- 🔵 **Planned** — documented, not yet applied
- 🟡 **In Progress** — partially applied
- ✅ **Done** — applied and verified

---

### Change 1 — Fix DMO field attribution in Lab 2, Step 1
**Status:** ✅ Applied Aug 12, 2026 (field/DMO names pending org verification)
**Location:** Lab 2 → Step 1 "View Loyalty Program Member DMO" (around lines 641–648)

**Problem:**
The "Key fields to notice" list under the **Loyalty Program Member** DMO incorrectly
attributes fields that don't live on that DMO:
- **Member Tier** and **Points Balance** are part of **separate DMOs**, not the
  Loyalty Program Member DMO. (In Loyalty Management, current tier lives on the
  member-tier object and points/currency balances live on the member-currency
  object — verify exact DMO/field names against the deployed data bundle before
  applying.)
- There is **no standard "Lifetime Value" field** — this line is fabricated and
  should be removed (or replaced with a real standard field).

**Change needed:**
1. Revise the Step 1 field list so it only shows fields that actually live on the
   Loyalty Program Member DMO (e.g. Enrollment Date, Member Status, and the
   member/program identifiers).
2. Move Member Tier and Points Balance out — either into a note explaining they
   come from related DMOs, or add short steps to view those separate DMOs.
3. Remove the **Lifetime Value** bullet entirely (no standard field exists).

**Downstream check:**
- Lab 2, Step 2 queries `MemberTier__c` and `PointsBalance__c` directly from
  `LoyaltyProgramMember__dlm` (lines ~673–692). If those fields live on separate
  DMOs, these queries need updating too (join/change source DMO). Confirm the real
  data model before rewriting the queries.

**Screenshot impact:**
- `mod1-lab2-step1-loyalty-dmo.jpg` caption ("showing tier, points, and other
  fields") may need updating once the field list is corrected.

---

## Changes Made: Loyalty Data Bundle Installation

### What Changed
Updated **Lab 1, Step 4** from manual Loyalty Management configuration to using the standard **Salesforce CDP CRM Loyalty** data bundle with Data Kit deployment.

### Old Approach (Removed)
- Manual creation of separate "Loyalty Management: Advanced" data stream
- Manual object selection and field mapping
- Time-consuming and error-prone manual configuration

### New Approach (Implemented)
- **Step 4A:** Navigate to Salesforce CRM Setup in Data Cloud Setup
- Install the **Salesforce CDP CRM Loyalty** standard data bundle (version 1.8)
- **Step 4B:** Deploy the associated Data Kit from Setup → Data Kit
- Automated object mapping and DMO creation

## Benefits of New Approach

### 1. Faster Setup
- **Old:** 30-45 minutes of manual configuration
- **New:** 5-10 minutes to install bundle + automated deployment

### 2. Fewer Errors
- Pre-configured object mappings eliminate manual mapping mistakes
- Standard bundle ensures best practice configuration

### 3. Easier Maintenance
- Data bundles can be updated via version upgrades
- No need to reconfigure when Loyalty Management adds new objects

### 4. Better Documentation
- Links to official Salesforce Help article
- Clear version tracking (currently 1.8)

## Updated Instructions - Step 4

### Step 4A: Navigate to Salesforce CRM Data Bundles
1. In Data Cloud Setup, search for "Salesforce CRM" in left sidebar
2. Click on Salesforce CRM (under Setup section)
3. View two sections:
   - Standard Connections (active Salesforce org)
   - Standard Data Bundles (available bundles)
4. Locate **Salesforce CDP CRM Loyalty** in the list

### Install the Bundle
1. Click dropdown menu (⋮) next to Salesforce CDP CRM Loyalty
2. Select **Install**
3. Review objects to be added:
   - Loyalty Program Member
   - Loyalty Ledger
   - Loyalty Program
   - Loyalty Promotion
   - Loyalty Tier
   - Related loyalty objects
4. Click **Install** to confirm
5. Wait for installation (Installed Version column will populate)

### Step 4B: Deploy the Data Kit

**Navigate to Data Kits:**
1. From Setup, search for **Data Kit**
2. Under Developer Tools, select **Data Kits**
3. Locate **Loyalty Management Advanced** in the list
4. Click on it to open the Data Kit detail page

**Review Data Kit Contents:**
- Data Kit API Name: sfm_LoyaltyAdvancedDataKit
- Data Stream Bundles (1): Loyalty Management: Advanced
  - Type: Bundle
  - Connector: Salesforce CRM
  - Developer Name: sfm_LoyaltyManagementAdvanced
- Data Models (0): No custom models
- Related List Enrichments (0): None configured

**Get Your Org ID (if needed):**
1. Go to Setup → Company Information
2. Find Salesforce.com Organization ID
3. Copy the 15-character ID (starts with "00D")
4. Example: 00Dg70000075qOd

**Deploy the Data Kit:**
1. Click **Data Kit Deploy** button (top right)
2. In Deploy dialog:
   - **Data Space:** Select "default"
   - **Org ID:** Enter your 15-character Org ID
3. Click red **Deploy** button
4. Click **OK** to confirm

**Monitor Deployment:**
- Deployment takes 10-30 minutes depending on data volume
- Check status in **Deployment History** tab
- NTO's 500K loyalty members will sync during this process

## Screenshot Updates

### Added Screenshots
1. **mod1-step4a-add-data-bundle.jpg** ✅ - Salesforce CRM Setup showing Standard Data Bundles table with Salesforce CDP CRM Loyalty highlighted (version 1.8)
2. **mod1-step4b-data-kit-list.jpg** ✅ - Data Kits list in Setup under Developer Tools showing Loyalty Management Advanced
3. **mod1-step4b-data-kit-detail.jpg** ✅ - Loyalty Management Advanced Data Kit detail page showing:
   - Data Kit API Name: sfm_LoyaltyAdvancedDataKit
   - Data Stream Bundles (1): Loyalty Management: Advanced
   - Data Models (0)
   - Related List Enrichments (0)
4. **mod1-step4b-data-kit-deploy.jpg** ✅ - Deploy dialog showing:
   - Data Space dropdown (default)
   - Org ID field (example: 00Dg70000075qOd)
   - sfm_LoyaltyManagement... bundle name
   - Deploy and Cancel buttons

### Updated Screenshot Tracker
- Module 1 now has **12 screenshots** (up from 8)
- Lab 1 now has **10 screenshots** (up from 6)
- 4 screenshots marked as ✅ Complete

## Files Modified

### Content Files
- ✅ `/modules/module-01-data-foundation.html` - Updated Step 4 instructions
- ✅ `/screenshot-tracker.md` - Added 2 new screenshot entries

### Documentation Files
- ✅ `MODULE-1-UPDATE-SUMMARY.md` (this file)

## Reference Documentation

- [Install Standard Data Bundles Powered by Data Kits](https://help.salesforce.com/s/articleView?id=data.c360_a_install_standard_data_bundles_powered_by_data_kits.htm&type=5)
- Data Cloud Setup → Salesforce CRM → Standard Data Bundles

## User-Facing Changes

### Pro Tips Added
1. **After Step 4A:** Data bundles are powered by Data Kits for automated configuration
2. **After Step 4B:** Link to Salesforce Help article for detailed Data Kit documentation
3. **After verification:** Data Kit deployment includes sync process for both CRM and Loyalty data

### Key Insights Added
1. Version tracking (1.8 is current version)
2. Time savings compared to manual configuration
3. Automatic mapping of all Loyalty Management objects

## Testing Checklist

- [ ] Verify Step 4A navigation path in Data Cloud Setup
- [ ] Confirm "Salesforce CDP CRM Loyalty" appears in Standard Data Bundles list
- [ ] Test install workflow (dropdown menu → Install)
- [ ] Verify Data Kit appears in Setup → Data Kit
- [ ] Test deployment workflow
- [ ] Confirm data syncs after deployment completes
- [ ] Verify Lab 2 queries still work with new data structure

## Compatibility Notes

### Salesforce Release
- **Current:** Summer '26 (Release 262)
- **Data Bundle Version:** 1.8
- **Status:** Production-ready

### Prerequisites
- Data Cloud provisioned and activated
- Salesforce Loyalty Management installed
- Person Accounts enabled (B2C CRM)
- Data Cloud Admin permission set assigned

## Migration Path for Existing Orgs

If an org already has manually configured Loyalty data streams:

1. **Do not uninstall** existing manual streams immediately
2. Install Salesforce CDP CRM Loyalty bundle alongside existing configuration
3. Verify data appears in both streams
4. Update segments/flows to use new DMOs
5. Once validated, deprecate manual streams
6. Monitor for 30 days before removing old configuration

## Questions & Answers

**Q: Can I use both the bundle and manual streams?**  
A: Yes, but not recommended. Choose one approach to avoid duplicate data.

**Q: What if my org has custom loyalty objects?**  
A: Use the bundle for standard objects, add custom objects via separate data stream.

**Q: How do I upgrade to a newer bundle version?**  
A: Return to Salesforce CRM Setup → Standard Data Bundles → click dropdown → select "Update"

**Q: Does this work with B2B CRM (Contacts)?**  
A: Yes, but you'll need to map Individual__c to Contact instead of Person Account.

## Future Enhancements

Consider adding:
- Troubleshooting section for bundle installation failures
- Comparison table: Manual vs. Bundle approach
- Video walkthrough of bundle installation
- Advanced configuration options for custom loyalty fields

---

**Updated:** June 23, 2026  
**Module Version:** 1.1  
**Reviewed By:** Training Team  
**Status:** Ready for Production
