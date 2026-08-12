# Data Kit Implementation Guide - Module 1

## Overview
This document details the implementation of **Salesforce CDP CRM Loyalty** data bundle and Data Kit deployment instructions in Module 1, Lab 1, Step 4.

## Implementation Date
June 23, 2026

## What Was Implemented

### Step 4A: Install Salesforce CDP CRM Loyalty Bundle
**Location:** Data Cloud Setup → Salesforce CRM → Standard Data Bundles

**Process:**
1. Navigate to Salesforce CRM in Data Cloud Setup left sidebar
2. View Standard Data Bundles section
3. Locate **Salesforce CDP CRM Loyalty** (version 1.8)
4. Click dropdown menu (⋮) → Install
5. Review objects to be installed:
   - Loyalty Program Member
   - Loyalty Ledger
   - Loyalty Program
   - Loyalty Promotion
   - Loyalty Tier
   - Related loyalty objects
6. Confirm installation
7. Wait for "Installed Version" column to populate with version 1.8

**Screenshot:** `mod1-step4a-add-data-bundle.jpg` ✅

### Step 4B: Deploy the Data Kit
**Location:** Setup → Developer Tools → Data Kits

**Process:**

#### 1. Navigate to Data Kits
- Setup → Quick Find: "Data Kit"
- Select Data Kits under Developer Tools
- List shows all available Data Kits
- Find **Loyalty Management Advanced**

**Screenshot:** `mod1-step4b-data-kit-list.jpg` ✅

#### 2. Review Data Kit Contents
- Click on Loyalty Management Advanced
- Review Data Kit detail page:
  - **API Name:** sfm_LoyaltyAdvancedDataKit
  - **Data Stream Bundles (1):**
    - Name: Loyalty Management: Advanced
    - Type: Bundle
    - Connector: Salesforce CRM
    - Developer Name: sfm_LoyaltyManagementAdvanced
  - **Data Models (0):** Uses standard DMOs
  - **Related List Enrichments (0):** None configured

**Screenshot:** `mod1-step4b-data-kit-detail.jpg` ✅

#### 3. Get Your Org ID
**Important Step:** Users need their Salesforce Org ID for deployment

**Navigation:**
1. Setup → Quick Find: "Company Information"
2. Select Company Information under Company Settings
3. Find **Salesforce.com Organization ID**
4. Copy the 15-character ID (format: 00Dxxxxxxxx)
5. Example: 00Dg70000075qOd

**Pro Tip Added:**
> Your Org ID is a unique 15 or 18-character identifier for your Salesforce org. It always starts with "00D". Keep this handy as you may need it for various Data Cloud configurations.

#### 4. Deploy the Data Kit
- Click **Data Kit Deploy** button (top right of detail page)
- Deploy dialog appears with:
  - **Data Space:** Dropdown (select "default")
  - **Org ID:** Text field (enter your 15-character Org ID)
  - Left panel shows: sfm_LoyaltyManagement... (bundle being deployed)
- Click red **Deploy** button
- Click **OK** to confirm

**Screenshot:** `mod1-step4b-data-kit-deploy.jpg` ✅

#### 5. Monitor Deployment
- Deployment status message appears
- Typical duration: **10-30 minutes**
- Factors affecting time:
  - Data volume (NTO: 500K loyalty members)
  - Number of related objects
  - System load
- Check status: **Deployment History** tab on Data Kit page

## Key Features Added

### 1. Org ID Retrieval Instructions
**Why Critical:** Users cannot deploy Data Kits without their Org ID, but many don't know where to find it.

**Solution:** Added complete step-by-step instructions with:
- Exact navigation path (Setup → Company Information)
- Where to find the ID on the page
- ID format explanation (15 chars, starts with "00D")
- Example for reference
- Pro Tip about when Org ID is needed

### 2. Data Kit Contents Explanation
**Why Important:** Users should understand what they're deploying.

**Solution:** Detailed breakdown of:
- Data Kit API Name
- Data Stream Bundle details (name, type, connector, developer name)
- Data Models count (0 = using standard DMOs)
- Related List Enrichments count

### 3. Three-Screenshot Flow
**Why Effective:** Visual confirmation at each step prevents errors.

**Screenshots:**
1. **List view** - Shows where Data Kit appears in Setup
2. **Detail view** - Shows what's included in the Data Kit
3. **Deploy dialog** - Shows exactly what fields to fill in

### 4. Pro Tips
Added strategic Pro Tips to:
- Explain what Org ID is and when it's needed
- Clarify that Data Kits automate object/field mapping
- Note that deployment runs in background
- Link to official Salesforce Help documentation

## User Experience Improvements

### Before This Update
❌ Users told to "deploy Data Kit" with no details  
❌ No guidance on finding Org ID  
❌ No visual confirmation of correct screens  
❌ Unclear what happens during deployment  

### After This Update
✅ Step-by-step navigation to Data Kits page  
✅ Clear instructions for retrieving Org ID  
✅ 3 screenshots showing exact UI at each step  
✅ Explanation of Data Kit contents  
✅ Deployment monitoring guidance  
✅ Time expectations set (10-30 minutes)  

## Technical Details

### Data Kit API Structure
```
Data Kit Name: Loyalty Management Advanced
API Name: sfm_LoyaltyAdvancedDataKit
Bundle: Loyalty Management: Advanced (sfm_LoyaltyManagementAdvanced)
Connector: Salesforce CRM
Type: Bundle (pre-configured)
Version: Aligned with Salesforce CDP CRM Loyalty v1.8
```

### Deployment Requirements
- **Org ID:** 15-character Salesforce Organization ID (format: 00Dxxxxxxxxxxx)
- **Data Space:** Must select target Data Space (usually "default")
- **Permissions:** Data Cloud Admin permission set required
- **Prerequisites:**
  - Data Cloud provisioned and activated
  - Salesforce Loyalty Management installed
  - Salesforce CDP CRM Loyalty bundle installed (Step 4A)

### Deployment Process
1. **Validation:** System validates Org ID and Data Space
2. **Bundle Deployment:** Deploys Data Stream Bundle configuration
3. **Object Mapping:** Automatically maps loyalty objects to DMOs
4. **Initial Sync:** Begins ingesting loyalty data from source org
5. **Status Update:** Updates Deployment History with success/failure

## Testing Checklist

### For Instructional Designers
- [ ] Verify all navigation paths are accurate
- [ ] Confirm screenshot filenames match placeholders
- [ ] Test Org ID retrieval instructions in a sandbox
- [ ] Validate time estimates (10-30 minutes)
- [ ] Check that Pro Tips add value

### For Learners
- [ ] Can navigate to Data Cloud Setup → Salesforce CRM
- [ ] Can find Standard Data Bundles section
- [ ] Can locate Salesforce CDP CRM Loyalty (v1.8)
- [ ] Can navigate to Setup → Data Kits
- [ ] Can find Loyalty Management Advanced Data Kit
- [ ] Can retrieve Org ID from Company Information
- [ ] Can successfully deploy Data Kit with Org ID
- [ ] Can monitor deployment in Deployment History

### For Screenshot Creators
- [ ] Capture Data Cloud Setup → Salesforce CRM page (✅ Complete)
- [ ] Capture Setup → Data Kits list view (✅ Complete)
- [ ] Capture Loyalty Management Advanced detail page (✅ Complete)
- [ ] Capture Deploy dialog with Data Space and Org ID fields (✅ Complete)
- [ ] Ensure all UI elements are visible (no cutoffs)
- [ ] Verify resolution is clear (2000px+ width recommended)

## Common Issues & Solutions

### Issue 1: "I don't see Loyalty Management Advanced in Data Kits"
**Cause:** Salesforce CDP CRM Loyalty bundle not installed yet  
**Solution:** Complete Step 4A first (install the bundle from Salesforce CRM page)

### Issue 2: "Deploy button is grayed out"
**Cause:** Missing Org ID or Data Space selection  
**Solution:** Ensure both fields are filled in the Deploy dialog

### Issue 3: "Where do I find my Org ID?"
**Cause:** Common question from new users  
**Solution:** Follow Step 4B instructions to navigate to Company Information

### Issue 4: "Deployment failed"
**Cause:** Various reasons (permissions, connectivity, invalid Org ID)  
**Solution:** 
1. Verify Org ID is correct 15-character format
2. Check Data Cloud Admin permission set is assigned
3. Review Deployment History for error details
4. Retry deployment after correcting issue

### Issue 5: "How long should deployment take?"
**Cause:** User unsure if system is working  
**Solution:** Set expectation of 10-30 minutes, can continue other work

## Related Documentation

### Internal
- [MODULE-1-UPDATE-SUMMARY.md](MODULE-1-UPDATE-SUMMARY.md) - High-level change summary
- [screenshot-tracker.md](screenshot-tracker.md) - All screenshot requirements
- [VISUAL-TEST-GUIDE.md](VISUAL-TEST-GUIDE.md) - Testing procedures

### External (Salesforce Help)
- [Install Standard Data Bundles Powered by Data Kits](https://help.salesforce.com/s/articleView?id=data.c360_a_install_standard_data_bundles_powered_by_data_kits.htm&type=5)
- [Data Kits Overview](https://help.salesforce.com/s/articleView?id=sf.c360_a_data_kits_overview.htm&type=5)
- [Deploy Data Kits](https://help.salesforce.com/s/articleView?id=sf.c360_a_deploy_data_kits.htm&type=5)

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | Jun 23, 2026 | Initial implementation with basic Data Kit instructions | Training Team |
| 1.1 | Jun 23, 2026 | Added Org ID retrieval instructions | Training Team |
| 1.2 | Jun 23, 2026 | Added 3-screenshot flow and detailed deployment steps | Training Team |

## Approval Status

- [x] Content complete
- [x] Screenshots captured (4/4)
- [x] Navigation paths verified
- [ ] Technical review pending
- [ ] User testing pending
- [ ] Final approval pending

---

**Document Owner:** MC Next Training Team  
**Last Updated:** June 23, 2026  
**Status:** Ready for Technical Review  
**Feedback:** Submit issues to training team
