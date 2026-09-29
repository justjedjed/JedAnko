---
title: The 27-part server playbook behind my client hosting (overview)
excerpt: Static IP to snapshots, tunnels to WAF — everything a single Ubuntu server needs to host client sites safely. The full implementation is a service I deliver, not a tutorial. Here's the map.
date: 2026-09-29
tags: [Ubuntu, Nginx, Cloudflare Tunnel, DevOps, Hosting]
og: og-blog-ubuntu-server-cloudflare-tunnel-setup-guide.png
---

Anyone can rent a VPS. Turning one into hosting you'd trust with *paying clients'* websites is a different job — networking, tunnels, certificates, process managers, monitoring, backups, and hardening, all wired together so the box is safe to leave running unattended.

I built exactly that as a 27-section playbook, and it's what runs all five of my [live client sites](/#live-sites). This post is the map of what's inside. The step-by-step implementation — commands, configs, and scripts — is what I **deliver for clients**, because a half-followed server guide is how people lock themselves out of SSH on a Friday night.

## What's inside

**Foundation & networking** — static LAN addressing done safely (with rollback), plus optional KVM virtual machines on a bridged network so a client's app can live in its own isolated VM.

**The core tunnel stack** — Nginx installed and verified, `cloudflared` installed and authenticated, your domain (say, `example.com`) connected to Cloudflare, one shared tunnel created, and a wildcard origin certificate so traffic is encrypted all the way to the server — Full Strict, not Almost.

**Serving sites & apps** — static sites as folders, Node/SvelteKit apps behind reverse proxies on their own ports, PM2 keeping every app alive across crashes *and* reboots (including the `pm2 save` step everyone forgets), and the full tunnel ingress config tying every hostname together with a safe catch-all.

**Staying alive** — a health-check script that curls your real public URL every 5 minutes and restarts the tunnel when the connection silently drops (systemd alone can't see that), plus Cloudflare-side tunnel alerts for when the whole box is unreachable.

**Private admin access** — a WireGuard-based VPN so *you* reach SSH, logs, and dashboards from anywhere with zero open inbound ports, friendly hostnames instead of IPs, and remote VM management without X11 pain.

**Backups without downtime** — live disk snapshots of running VMs on a nightly schedule with retention pruning, triggerable on demand from your phone before risky changes.

**Hardening & hygiene** — edge WAF with managed rules, bot protection, per-site rate limits (scoped by hostname so clients never affect each other), automatic security patching, log rotation, and resource monitoring bound to the private network only.

**Operations** — a one-command script that adds a new static site (folder, Nginx block, tunnel route, DNS, reloads) in about five minutes, a checklist for the manual SSR path, a 20-row troubleshooting table built from real failures, and a per-site-type quick reference.

## Why this isn't a copy-paste tutorial

Three honest reasons:

1. **The dangerous steps are order-dependent.** Bridge networking, static IPs, and firewall changes can lock you out of your own server if sequenced wrong. My playbook is sequenced from scars, not theory.
2. **Every server is different.** Cloud VM vs home lab, single site vs multi-client, static vs SSR — the right choices change, and a generic guide can't make them for you.
3. **The value is the guarantee.** When I deploy this, I verify every layer live, hand over plain-English notes, and remain the person to call. A tutorial can't do that.

## What "done for you" looks like

- **Audit** — I look at what you're running now and tell you straight whether this architecture fits (sometimes your current hosting is fine — I'll say so)
- **Build** — server hardened, tunnel live, your sites migrated with zero-downtime DNS cutover
- **Handover** — monitoring verified, snapshots scheduled, the 5-minute new-site routine in your hands
- **Backup human** — when something breaks at 11pm, you message me, not a support forum

Five sites on one VPS instead of five hosting bills typically pays for the setup within months — and every site gets the same live uptime badge my clients have. [Contact me](/#contact) with your current setup and I'll scope it honestly.
