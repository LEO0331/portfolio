#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/lib.sh"

"${SCRIPT_DIR}/playwright_user_flow.sh" "$BASE_URL"
"${SCRIPT_DIR}/playwright_user_flow_mobile.sh" "$BASE_URL"
"${SCRIPT_DIR}/playwright_user_flow_routes.sh" "$BASE_URL"

echo "[flow-all] All real browser user-flow scripts passed."
