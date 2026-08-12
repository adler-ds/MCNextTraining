#!/bin/bash

# Test script to open all modules in browser for visual verification
# Usage: ./test-modules.sh

echo "🧪 Testing MC Next Training Modules..."
echo ""

BASE_DIR="/Users/dadler/Documents/MC Next Training/modules"
MODULES=(
  "module-01-data-foundation.html"
  "module-02-segmentation.html"
  "module-03-data-graphs.html"
  "module-04-consent.html"
  "module-05-content-builder.html"
  "module-06-flows.html"
  "module-07-loyalty-integration.html"
  "module-08-analytics.html"
)

echo "Opening modules in Chrome..."
echo "Check for:"
echo "  ✓ Proper spacing in Lab Intro sections"
echo "  ✓ Step content indentation"
echo "  ✓ Success criteria visibility"
echo "  ✓ Screenshot placeholders"
echo "  ✓ Quiz layout"
echo "  ✓ Footer styling"
echo ""

for module in "${MODULES[@]}"; do
  echo "📄 Opening: $module"
  open -a "Google Chrome" "file://$BASE_DIR/$module"
  sleep 2  # Give Chrome time to load each tab
done

echo ""
echo "✅ All modules opened in Chrome"
echo "📋 Review each tab and verify UI improvements"
