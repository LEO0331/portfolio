#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-http://127.0.0.1:4173/portfolio}"

./tools/e2e/playwright_user_flow.sh "$BASE_URL"
./tools/e2e/playwright_user_flow_mobile.sh "$BASE_URL"
./tools/e2e/playwright_user_flow_routes.sh "$BASE_URL"

echo "[flow-all] All real browser user-flow scripts passed."
