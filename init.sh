#!/bin/bash
set -e

echo "=== Portfolio Harness Verification ==="

node tools/validate-harness-state.mjs
npm ci
npm audit
npm run build
npm run test:e2e
git diff --check

echo "=== Verification Complete ==="
echo "Next steps:"
echo "1. Read AGENTS.md and progress.md"
echo "2. Select ONE pending feature from feature_list.json"
echo "3. Stay in scope and update progress.md before ending"
