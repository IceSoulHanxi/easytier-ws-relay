#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
usage() {
  cat <<'EOF'
Usage: bash scripts/deploy-vps.sh [up|down|restart|logs|status|config] [--tls]
Default: up. Configuration: deploy/vps.env (created from example on first run).
Use --tls on EVERY command for a deployment with the Caddy TLS proxy.
Requires Docker Engine and Docker Compose v2 (with up --wait support).
EOF
}
ACTION="${1:-up}"
if [[ "$ACTION" == "-h" || "$ACTION" == "--help" ]]; then usage; exit 0; fi
case "$ACTION" in up|down|restart|logs|status|config) ;; *) usage >&2; exit 2 ;; esac
TLS=false
if [[ "${2:-}" == "--tls" ]]; then TLS=true; elif [[ -n "${2:-}" ]]; then usage >&2; exit 2; fi
if [[ $# -gt 2 ]]; then usage >&2; exit 2; fi
command -v docker >/dev/null || { echo 'Install Docker Engine: https://docs.docker.com/engine/install/' >&2; exit 1; }
docker compose version >/dev/null || { echo 'Install Docker Compose v2: https://docs.docker.com/compose/install/linux/' >&2; exit 1; }
docker info >/dev/null || { echo 'Docker daemon unavailable; start Docker or run this script with sudo.' >&2; exit 1; }
if [[ ! -f "$ROOT_DIR/deploy/vps.env" ]]; then
  cp "$ROOT_DIR/deploy/vps.env.example" "$ROOT_DIR/deploy/vps.env"
  chmod 600 "$ROOT_DIR/deploy/vps.env"
  echo 'Created deploy/vps.env; edit it to customize ports or domain.'
fi
COMPOSE=(docker compose --project-directory "$ROOT_DIR/deploy" --env-file "$ROOT_DIR/deploy/vps.env" -f "$ROOT_DIR/deploy/compose.yaml")
if "$TLS"; then COMPOSE+=(-f "$ROOT_DIR/deploy/compose.tls.yaml"); fi
"${COMPOSE[@]}" config --quiet
case "$ACTION" in
  up) "${COMPOSE[@]}" up -d --build --remove-orphans --wait --wait-timeout 120 ;;
  down) "${COMPOSE[@]}" down ;;
  restart) "${COMPOSE[@]}" restart ;;
  logs) "${COMPOSE[@]}" logs --tail=100 -f ;;
  status) "${COMPOSE[@]}" ps ;;
  config) "${COMPOSE[@]}" config ;;
esac
