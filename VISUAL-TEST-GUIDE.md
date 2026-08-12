# Visual Testing Guide - MC Next Training

## Purpose
This guide helps you verify that all UI fixes are working correctly across all 8 training modules.

## What to Check in Each Module

### 1. Section Separation ✅
- **Expected:** Clear visual separation between sections (Lab 1, Lab 2, etc.)
- **How to test:** Scroll through module and verify each section starts cleanly
- **Red flag:** Content from one section appears in another section's header area

### 2. Lab Intro ("Your Mission") ✅
- **Expected:** Blue background box with proper padding, clear heading
- **How to test:** Look for "🎯 Your Mission" sections in labs
- **Red flag:** Text cramped, overlapping with other elements, or no visual separation

### 3. Success Criteria ✅
- **Expected:** Checkmark icon, bulleted list with proper spacing
- **How to test:** Look for "✅ Success Criteria:" in each lab
- **Red flag:** List items cramped or overlapping with step content below

### 4. Step-by-Step Instructions ✅
- **Expected:** Orange numbered circles, clear step headers, indented content
- **How to test:** Verify steps 1, 2, 3... have consistent layout
- **Red flag:** Step content not indented, numbers overlapping text

### 5. Screenshot Placeholders ✅
- **Expected:** Striped placeholder box or actual screenshot, with caption and filename below
- **How to test:** Look for 📸 icons and filename codes like `mod1-step1-xxx.jpg`
- **Red flag:** Placeholder breaking out of container, overlapping other content

### 6. Pro Tips & Key Insights ✅
- **Expected:** 
  - Pro Tips: Green left border, light green background
  - Key Insights: Orange left border, light yellow background
- **How to test:** Look for "💡 Pro Tip:" and "💡 Key Insight:" boxes
- **Red flag:** Boxes too narrow, text cramped, or overlapping

### 7. Lab Checkpoint ✅
- **Expected:** Green border, green heading, checklist of questions
- **How to test:** Look for "🎉 Lab X Checkpoint" at end of each lab
- **Red flag:** Border broken, checklist cramped

### 8. Module Summary ✅
- **Expected:** Dark blue gradient background, two-column grid on desktop
- **How to test:** Scroll to bottom of module, verify "🎉 Module X Complete!"
- **Red flag:** Text hard to read (should be white on dark blue)

### 9. Quiz Section ✅
- **Expected:** Light blue background, radio buttons with hover effect
- **How to test:** Find "✅ KNOWLEDGE CHECK" section
- **Red flag:** Radio buttons not aligned, options cramped

### 10. Footer ✅
- **Expected:** Dark blue background, centered white text, yellow links
- **How to test:** Scroll to very bottom of page
- **Red flag:** Footer missing or broken layout

## Quick Test Commands

### Open All Modules at Once
```bash
cd "/Users/dadler/Documents/MC Next Training"
./test-modules.sh
```

### Open Individual Module
```bash
open -a "Google Chrome" "file:///Users/dadler/Documents/MC%20Next%20Training/modules/module-01-data-foundation.html"
```

### Test Mobile Responsive
1. Open module in Chrome
2. Press `Cmd + Option + I` to open DevTools
3. Press `Cmd + Shift + M` to toggle device toolbar
4. Select "iPhone 12 Pro" or "iPad Air"
5. Verify layout adapts properly

## Known Issues Before Fixes

### Issue 1: Lab 2 Header Overlap (FIXED)
**Symptom:** Lab 1 Step 6 content appeared in Lab 2 header area  
**Root cause:** No `clear: both` between sections  
**Fix applied:** Added `clear: both` to all major containers

### Issue 2: "Your Mission" Cramped (FIXED)
**Symptom:** Insufficient spacing in lab intro sections  
**Root cause:** Padding too small, no spacing between components  
**Fix applied:** Increased padding, added explicit margins

### Issue 3: Success Criteria Overlap (FIXED)
**Symptom:** Checklist items too close to step instructions  
**Root cause:** No visual separator, small margins  
**Fix applied:** Added top border, increased spacing

## Browser Testing Matrix

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | Latest  | ✅ Primary test browser |
| Safari  | Latest  | ⏳ Needs testing |
| Firefox | Latest  | ⏳ Needs testing |
| Edge    | Latest  | ⏳ Optional |

## Mobile Testing Matrix

| Device | Viewport | Status |
|--------|----------|--------|
| iPhone SE | 375px | ⏳ Needs testing |
| iPhone 12 Pro | 390px | ⏳ Needs testing |
| iPad Air | 820px | ⏳ Needs testing |
| Desktop | 1200px+ | ✅ Tested |

## Reporting Issues

If you find layout problems:

1. **Take a screenshot** showing the issue
2. **Note the module name** (e.g., "Module 1 - Data Foundation")
3. **Identify the section** (e.g., "Lab 2, Step 3")
4. **Describe expected vs actual** (e.g., "Expected indented content, saw overlapping text")
5. **Browser/device info** (e.g., "Chrome on Mac, viewport 1440px")

## Success Criteria for "All Clear"

✅ All 8 modules open without errors  
✅ No content overlap between sections  
✅ All "Your Mission" boxes properly formatted  
✅ All step numbers and content properly indented  
✅ All screenshot placeholders display correctly  
✅ All Pro Tips and Key Insights have proper borders  
✅ All Lab Checkpoints are readable  
✅ Module summary grids display in 2 columns (desktop)  
✅ Quiz radio buttons are styled consistently  
✅ Footer appears at bottom with correct styling  
✅ Mobile layout (< 768px) stacks properly without horizontal scroll

---

**Last Updated:** June 23, 2026  
**CSS Version:** v2.1 (post-overlap fixes)
