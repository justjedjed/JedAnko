---
title: How I host 5 websites on one server with Nginx + Cloudflare Tunnel
excerpt: One VPS, five live client sites, zero open ports — the architecture I run for every client site, and how to get the full setup done for yours.
date: 2026-09-28
tags: [Nginx, Cloudflare Tunnel, DevOps, Hosting]
og: og-blog-host-multiple-sites-nginx-cloudflare-tunnel.png
---

I host five live websites — a hotel, a commercial building, a restobar, a corporation, and their parent company site — on a single server. One VPS bill instead of five. No open ports 80 or 443. Every site shows a live badge on [my portfolio](/#live-sites) proving it's up right now.

Here's the architecture, honestly explained — and at the end, how to get the whole thing built for you.

## The shape of it

```text
Visitor → Cloudflare edge (DNS + SSL) → Cloudflare Tunnel → Nginx → your sites
```

Three jobs, three tools:

- **Cloudflare** handles DNS and the public SSL certificate. Free plan is enough.
- **Cloudflare Tunnel** (`cloudflared`) is an *outbound-only* connection from the server. The firewall stays shut — there is nothing to attack.
- **Nginx** routes each domain to the right folder or app on the machine, e.g. `shop.example.com` → one folder, `app.example.com` → a Node app on port 3000.

A basic static site block looks like this — this part is standard Nginx anyone can look up:

```nginx
server {
    listen 80;
    server_name shop.example.com;

    root /var/www/shop;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Simple. The parts that actually take experience are everything around it.

## What "everything around it" means

Getting from that snippet to five always-on client sites took a full playbook:

- **One shared tunnel** carrying every hostname, with a catch-all rule so unknown domains get a clean 404 instead of leaking somewhere
- **Wildcard origin SSL** so browser-to-server traffic is encrypted end to end (Full Strict), not just browser-to-Cloudflare
- **Node apps kept alive** across crashes and reboots (PM2 + startup hooks that people always forget to save)
- **Health checks that restart the tunnel** when the connection silently drops — `systemctl` alone won't catch that
- **WAF + rate limiting** at the edge, scoped per client so one site's rules never affect another's
- **Auto security patching, log rotation, and resource monitoring** so the box is safe to leave running unattended
- **Private admin access** (VPN, no open SSH) and **automated snapshots** before risky changes
- **A one-command script** so adding site number six takes five minutes, not an afternoon

That's the difference between "a server block" and "hosting you can sell to clients." The snippet above is 5% of it.

## Proof, not promises

I don't just write about this stack — I run it. All five client sites on [my Live Sites list](/#live-sites) run on exactly this architecture, each with a badge that pings the real URL from your browser and shows the round-trip time. If a tunnel ever drops, the badge says Offline. No fake "99.9%".

## Get the full setup — done for you

The complete implementation playbook (tunnel config, SSL, monitoring scripts, hardening, automation) is something I deploy **for clients**, not something I publish. Here's what you get:

- **Your sites migrated** onto one efficient server (or your existing one, hardened)
- **DNS, SSL, tunnel, monitoring, and backups** configured and verified live
- **A 5-minute routine** for adding future sites, handed over with plain-English notes
- **Someone to call** when something breaks at 11pm — me

One server instead of five hosting bills usually pays for the setup within months. [Contact me](/#contact) with what you're running now, and I'll tell you honestly whether this architecture fits — including when the answer is "your current hosting is fine."
