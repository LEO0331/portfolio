#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-${E2E_BASE_URL:-http://127.0.0.1:${E2E_PORT:-4175}/portfolio}}"

./tools/e2e/playwright_user_flow.sh "$BASE_URL"
./tools/e2e/playwright_user_flow_mobile.sh "$BASE_URL"
./tools/e2e/playwright_user_flow_routes.sh "$BASE_URL"

echo "[flow-all] All real browser user-flow scripts passed."
