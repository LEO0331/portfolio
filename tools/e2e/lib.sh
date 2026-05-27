#!/usr/bin/env bash

export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export PWCLI="$CODEX_HOME/skills/playwright/scripts/playwright_cli.sh"
export BASE_URL="${1:-${E2E_BASE_URL:-http://127.0.0.1:${E2E_PORT:-4175}/portfolio}}"

mkdir -p output/playwright

run_pwcli() {
  local label="$1"
  shift

  local output
  local status

  set +e
  output=$("$PWCLI" "$@" 2>&1)
  status=$?
  set -e

  printf '%s\n' "$output"

  if [ "$status" -ne 0 ]; then
    echo "[${label}] PWCLI command failed: $*" >&2
    exit "$status"
  fi

  if printf '%s\n' "$output" | grep -Eq '(^### Error)|TimeoutError|ERR_CONNECTION_REFUSED|net::ERR_|chrome-error://chromewebdata'; then
    echo "[${label}] PWCLI reported runtime/browser errors: $*" >&2
    exit 1
  fi
}
